/**
 * SuperTokens Authentication Provider
 *
 * Client-side auth provider using SuperTokens for session management
 *
 * Copyright © 2025 QwickApps.com. All rights reserved.
 */

import {
  AuthServiceClient,
  AuthSession,
  AuthUser,
  AuthResult,
  SignInCredentials,
  SignUpCredentials,
  PasswordResetRequest,
  SocialSignInOptions,
  AuthError,
  createAuthError,
  createAuthSuccess,
  createAuthFailure,
} from '@qwickapps/auth';

export interface SuperTokensConfig {
  appName: string;
  apiDomain: string;
  apiBasePath?: string;
}

export class SuperTokensAuthProvider implements AuthServiceClient {
  private config: SuperTokensConfig;
  private initialized = false;
  private authStateListeners: Array<(session: AuthSession | null, error?: AuthError) => void> = [];

  constructor(config: SuperTokensConfig) {
    this.config = {
      ...config,
      apiBasePath: config.apiBasePath || '/api/auth',
    };
  }

  private async initialize(): Promise<void> {
    if (this.initialized) return;

    try {
      const SuperTokens = (await import('supertokens-web-js')).default;
      const Session = (await import('supertokens-web-js/recipe/session')).default;
      const EmailPassword = (await import('supertokens-web-js/recipe/emailpassword')).default;

      SuperTokens.init({
        appInfo: {
          appName: this.config.appName,
          apiDomain: this.config.apiDomain,
          apiBasePath: this.config.apiBasePath!,
        },
        recipeList: [Session.init(), EmailPassword.init()],
      });

      this.initialized = true;
    } catch (error) {
      console.error('[SuperTokensAuthProvider] Initialization failed:', error);
      throw error;
    }
  }

  async getCurrentSession(): Promise<AuthSession | null> {
    await this.initialize();

    try {
      const Session = (await import('supertokens-web-js/recipe/session')).default;

      if (!(await Session.doesSessionExist())) {
        return null;
      }

      const userId = await Session.getUserId();
      const accessToken = await Session.getAccessToken();

      // Fetch user details from backend
      const response = await fetch(`${this.config.apiDomain}/api/users/me`, {
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        return null;
      }

      const user: AuthUser = await response.json();

      return {
        user,
        accessToken: accessToken || '',
        refreshToken: '', // SuperTokens manages refresh tokens internally
        expiresAt: new Date(Date.now() + 3600000), // 1 hour default
        tokenType: 'bearer',
      };
    } catch (error) {
      const authError = createAuthError(
        'UNKNOWN_ERROR',
        error instanceof Error ? error.message : 'Failed to get current session'
      );

      // Notify listeners of the error
      this.notifyAuthStateChange(null, authError);

      return null;
    }
  }

  async signIn(credentials: SignInCredentials): Promise<AuthResult<AuthSession>> {
    await this.initialize();

    try {
      const EmailPassword = (await import('supertokens-web-js/recipe/emailpassword')).default;

      const response = await EmailPassword.signIn({
        formFields: [
          { id: 'email', value: credentials.email },
          { id: 'password', value: credentials.password },
        ],
      });

      if (response.status !== 'OK') {
        const errorType = response.status === 'WRONG_CREDENTIALS_ERROR' ? 'INVALID_CREDENTIALS' : 'UNKNOWN_ERROR';
        const errorMessage = response.status === 'WRONG_CREDENTIALS_ERROR' ? 'Invalid email or password' : 'Sign in failed';
        return createAuthFailure(createAuthError(errorType, errorMessage));
      }

      const session = await this.getCurrentSession();
      if (!session) {
        return createAuthFailure(createAuthError('UNKNOWN_ERROR', 'Failed to create session'));
      }

      this.notifyAuthStateChange(session);

      return createAuthSuccess(session);
    } catch (error) {
      return createAuthFailure(
        createAuthError('UNKNOWN_ERROR', error instanceof Error ? error.message : 'Sign in failed')
      );
    }
  }

  async signUp(credentials: SignUpCredentials): Promise<AuthResult<AuthUser>> {
    await this.initialize();

    try {
      const EmailPassword = (await import('supertokens-web-js/recipe/emailpassword')).default;

      const formFields = [
        { id: 'email', value: credentials.email },
        { id: 'password', value: credentials.password },
      ];

      const response = await EmailPassword.signUp({
        formFields,
      });

      if (response.status !== 'OK') {
        const errorType = response.status === 'FIELD_ERROR' ? 'INVALID_EMAIL' : 'UNKNOWN_ERROR';
        const errorMessage = response.status === 'FIELD_ERROR' ? 'Invalid registration data' : 'Registration failed';
        return createAuthFailure(createAuthError(errorType, errorMessage));
      }

      const session = await this.getCurrentSession();
      if (!session) {
        return createAuthFailure(createAuthError('UNKNOWN_ERROR', 'Registration successful but session creation failed'));
      }

      this.notifyAuthStateChange(session);

      return createAuthSuccess(session.user);
    } catch (error) {
      return createAuthFailure(
        createAuthError('UNKNOWN_ERROR', error instanceof Error ? error.message : 'Registration failed')
      );
    }
  }

  async signOut(): Promise<AuthResult<null>> {
    await this.initialize();

    try {
      const Session = (await import('supertokens-web-js/recipe/session')).default;
      await Session.signOut();

      this.notifyAuthStateChange(null);

      return createAuthSuccess(null);
    } catch (error) {
      return createAuthFailure(
        createAuthError('UNKNOWN_ERROR', error instanceof Error ? error.message : 'Sign out failed')
      );
    }
  }

  async resetPassword(request: PasswordResetRequest): Promise<AuthResult<null>> {
    await this.initialize();

    try {
      const EmailPassword = (await import('supertokens-web-js/recipe/emailpassword')).default;

      const response = await EmailPassword.sendPasswordResetEmail({
        formFields: [{ id: 'email', value: request.email }],
      });

      if (response.status !== 'OK') {
        return createAuthFailure(createAuthError('UNKNOWN_ERROR', 'Failed to send password reset email'));
      }

      return createAuthSuccess(null);
    } catch (error) {
      return createAuthFailure(
        createAuthError('UNKNOWN_ERROR', error instanceof Error ? error.message : 'Password reset failed')
      );
    }
  }

  async updateProfile(update: Partial<AuthUser>): Promise<AuthResult<AuthUser>> {
    await this.initialize();

    try {
      const response = await fetch(`${this.config.apiDomain}/api/users/me`, {
        method: 'PATCH',
        headers: {
          ...this.getHeaders(),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
      });

      if (!response.ok) {
        return createAuthFailure(createAuthError('UNKNOWN_ERROR', 'Failed to update profile'));
      }

      const user: AuthUser = await response.json();

      return createAuthSuccess(user);
    } catch (error) {
      return createAuthFailure(
        createAuthError('UNKNOWN_ERROR', error instanceof Error ? error.message : 'Profile update failed')
      );
    }
  }

  async refreshSession(): Promise<AuthResult<AuthSession>> {
    await this.initialize();

    try {
      const Session = (await import('supertokens-web-js/recipe/session')).default;

      // SuperTokens handles session refresh automatically
      // Just verify session exists
      if (!(await Session.doesSessionExist())) {
        return createAuthFailure(createAuthError('TOKEN_EXPIRED', 'No active session'));
      }

      const session = await this.getCurrentSession();
      if (!session) {
        return createAuthFailure(createAuthError('UNKNOWN_ERROR', 'Failed to refresh session'));
      }

      return createAuthSuccess(session);
    } catch (error) {
      return createAuthFailure(
        createAuthError('UNKNOWN_ERROR', error instanceof Error ? error.message : 'Session refresh failed')
      );
    }
  }

  async signInWithProvider(options: SocialSignInOptions): Promise<AuthResult<AuthSession>> {
    // SuperTokens social login would be implemented here
    // For now, return not implemented
    return createAuthFailure(
      createAuthError('NOT_IMPLEMENTED', 'Social login not yet implemented for SuperTokens')
    );
  }

  onAuthStateChange(
    callback: (session: AuthSession | null, error?: AuthError) => void
  ): () => void {
    this.authStateListeners.push(callback);

    // Return unsubscribe function
    return () => {
      const index = this.authStateListeners.indexOf(callback);
      if (index > -1) {
        this.authStateListeners.splice(index, 1);
      }
    };
  }

  getHeaders(): HeadersInit {
    // SuperTokens manages headers automatically via interceptors
    // Return empty headers as SuperTokens SDK handles auth headers
    return {};
  }

  private notifyAuthStateChange(session: AuthSession | null, error?: AuthError): void {
    this.authStateListeners.forEach((listener) => {
      try {
        listener(session, error);
      } catch (err) {
        console.error('[SuperTokensAuthProvider] Auth state listener error:', err);
      }
    });
  }
}

/**
 * Factory function for creating SuperTokens auth provider
 */
export function createSuperTokensProvider(config: SuperTokensConfig): SuperTokensAuthProvider {
  return new SuperTokensAuthProvider(config);
}

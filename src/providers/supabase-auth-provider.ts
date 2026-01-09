/**
 * Supabase authentication provider for client-side auth
 * 
 * Copyright © 2025 QwickApps.com. All rights reserved.
 * This software is proprietary and confidential.
 */

import { createClient, SupabaseClient, Session, User } from '@supabase/supabase-js';
import {
  AuthUser,
  AuthSession,
  AuthError,
  AuthResult,
  SignUpCredentials,
  SignInCredentials,
  PasswordResetRequest,
  SocialSignInOptions,
  createAuthError,
  createAuthSuccess,
  createAuthFailure,
} from '@qwickapps/auth';
import { getLogger } from '@qwickapps/logging';
import { AuthServiceClient } from '@qwickapps/auth';

const logger = getLogger('SupabaseAuthProvider');

/**
 * Supabase-specific configuration
 */
export interface SupabaseAuthConfig {
  supabaseUrl: string;
  supabaseKey: string;
  features?: {
    emailVerification?: boolean;
    passwordReset?: boolean;
    registration?: boolean;
  };
  redirectUrls?: {
    afterSignIn?: string;
    afterSignOut?: string;
    afterSignUp?: string;
    passwordReset?: string;
  };
  enabledProviders?: string[]; // List of enabled OAuth providers (e.g., ['github', 'google'])
}

/**
 * Supabase authentication provider - implements AuthServiceClient interface
 */
export class SupabaseAuthProvider implements AuthServiceClient {
  private client: SupabaseClient;
  private config: SupabaseAuthConfig;

  constructor(config: SupabaseAuthConfig) {
    this.config = config;
    this.client = createClient(config.supabaseUrl, config.supabaseKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    });
    
    logger.debug('SupabaseAuthProvider initialized', { 
      url: config.supabaseUrl,
      features: config.features 
    });
  }

  /**
   * Get the Supabase client instance
   */
  getClient(): SupabaseClient {
    return this.client;
  }

  /**
   * Get list of enabled OAuth providers
   */
  getEnabledProviders(): string[] {
    return this.config.enabledProviders || [];
  }

  /**
   * Get headers for API requests - Supabase-specific implementation
   */
  getHeaders(): HeadersInit {
    // For Supabase direct client usage, we mainly use the anon key
    // Session management is handled internally by the Supabase client
    return {
      'Content-Type': 'application/json',
      'apikey': this.config.supabaseKey,
      'Authorization': `Bearer ${this.config.supabaseKey}`,
    };
  }

  /**
   * Convert Supabase user to AuthUser format
   */
  private convertUser(supabaseUser: User): AuthUser {
    return {
      id: supabaseUser.id,
      email: supabaseUser.email || '',
      emailVerified: supabaseUser.email_confirmed_at != null,
      name: supabaseUser.user_metadata?.full_name || supabaseUser.user_metadata?.name,
      avatarUrl: supabaseUser.user_metadata?.avatar_url,
      phoneNumber: supabaseUser.phone,
      lastSignInAt: supabaseUser.last_sign_in_at ? new Date(supabaseUser.last_sign_in_at) : undefined,
      createdAt: new Date(supabaseUser.created_at),
      updatedAt: new Date(supabaseUser.updated_at || supabaseUser.created_at),
      metadata: supabaseUser.user_metadata,
    };
  }

  /**
   * Convert Supabase session to AuthSession format
   */
  private convertSession(supabaseSession: Session): AuthSession {
    return {
      user: this.convertUser(supabaseSession.user),
      accessToken: supabaseSession.access_token,
      refreshToken: supabaseSession.refresh_token,
      expiresAt: supabaseSession.expires_at ? new Date(supabaseSession.expires_at * 1000) : undefined,
      tokenType: supabaseSession.token_type || 'bearer',
      providerToken: supabaseSession.provider_token ?? undefined,
      providerRefreshToken: supabaseSession.provider_refresh_token ?? undefined,
    };
  }

  /**
   * Convert Supabase error to AuthError format
   */
  private convertError(error: any): AuthError {
    logger.debug('Converting Supabase error', { error });
    
    if (!error) {
      return createAuthError('UNKNOWN_ERROR', 'An unknown error occurred');
    }

    const message = error.message || 'An error occurred';
    
    // Map Supabase error codes to AuthError types
    if (message.includes('Invalid login credentials') || message.includes('Email not confirmed')) {
      return createAuthError('INVALID_CREDENTIALS', 'Invalid email or password');
    }
    
    if (message.includes('User not found')) {
      return createAuthError('USER_NOT_FOUND', 'User not found');
    }
    
    if (message.includes('User already registered')) {
      return createAuthError('USER_ALREADY_EXISTS', 'User already exists with this email');
    }
    
    if (message.includes('Email not confirmed')) {
      return createAuthError('EMAIL_NOT_VERIFIED', 'Please verify your email before signing in');
    }
    
    if (message.includes('Password should be')) {
      return createAuthError('PASSWORD_TOO_WEAK', 'Password does not meet security requirements');
    }
    
    if (message.includes('Invalid email')) {
      return createAuthError('INVALID_EMAIL', 'Invalid email format');
    }
    
    if (message.includes('Signups not allowed')) {
      return createAuthError('SIGNUP_DISABLED', 'User registration is currently disabled');
    }
    
    if (message.includes('JWT expired') || message.includes('Token expired')) {
      return createAuthError('TOKEN_EXPIRED', 'Session has expired');
    }

    // Default to provider error
    return createAuthError('PROVIDER_ERROR', message, { originalError: error });
  }

  /**
   * Get current session
   */
  async getCurrentSession(): Promise<AuthSession | null> {
    logger.debug('Getting current session');
    
    try {
      const { data, error } = await this.client.auth.getSession();
      
      if (error) {
        logger.debug('Error getting session', { error });
        return null;
      }
      
      if (!data.session) {
        logger.debug('No active session');
        return null;
      }
      
      const session = this.convertSession(data.session);
      logger.debug('Current session retrieved', { userId: session.user.id });
      return session;
    } catch (error) {
      logger.error('Failed to get current session', { error });
      return null;
    }
  }

  /**
   * Get current user
   */
  async getCurrentUser(): Promise<AuthUser | null> {
    logger.debug('Getting current user');
    
    try {
      const { data, error } = await this.client.auth.getUser();
      
      if (error) {
        logger.debug('Error getting user', { error });
        return null;
      }
      
      if (!data.user) {
        logger.debug('No authenticated user');
        return null;
      }
      
      const user = this.convertUser(data.user);
      logger.debug('Current user retrieved', { userId: user.id, email: user.email });
      return user;
    } catch (error) {
      logger.error('Failed to get current user', { error });
      return null;
    }
  }

  /**
   * Sign up a new user
   */
  async signUp(credentials: SignUpCredentials): Promise<AuthResult<AuthUser>> {
    logger.debug('Signing up user', { email: credentials.email });
    
    try {
      const { data, error } = await this.client.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
          data: {
            full_name: credentials.name,
            ...credentials.metadata,
          },
        },
      });

      if (error) {
        logger.debug('Sign up failed', { error });
        return createAuthFailure(this.convertError(error));
      }

      if (!data.user) {
        logger.debug('No user returned from sign up');
        return createAuthFailure(createAuthError('UNKNOWN_ERROR', 'Sign up failed'));
      }

      const user = this.convertUser(data.user);
      logger.debug('User signed up successfully', { userId: user.id });
      
      return createAuthSuccess(user);
    } catch (error) {
      logger.error('Sign up error', { error });
      return createAuthFailure(this.convertError(error));
    }
  }

  /**
   * Sign in with email and password
   */
  async signIn(credentials: SignInCredentials): Promise<AuthResult<AuthSession>> {
    logger.debug('Signing in user', { email: credentials.email });
    
    try {
      const { data, error } = await this.client.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) {
        logger.debug('Sign in failed', { error });
        return createAuthFailure(this.convertError(error));
      }

      if (!data.session) {
        logger.debug('No session returned from sign in');
        return createAuthFailure(createAuthError('UNKNOWN_ERROR', 'Sign in failed'));
      }

      const session = this.convertSession(data.session);
      logger.debug('User signed in successfully', { userId: session.user.id });
      
      return createAuthSuccess(session);
    } catch (error) {
      logger.error('Sign in error', { error });
      return createAuthFailure(this.convertError(error));
    }
  }

  /**
   * Sign in with social provider
   */
  async signInWithProvider(options: SocialSignInOptions): Promise<AuthResult<AuthSession>> {
    logger.debug('Signing in with social provider', { provider: options.provider });
    
    try {
      const { data, error } = await this.client.auth.signInWithOAuth({
        provider: options.provider as any,
        options: {
          redirectTo: options.redirectTo || this.config.redirectUrls?.afterSignIn,
          scopes: options.scopes?.join(' '),
        },
      });

      if (error) {
        logger.debug('Social sign in failed', { error });
        return createAuthFailure(this.convertError(error));
      }

      // For OAuth, the actual session will be available after redirect
      // This method initiates the OAuth flow
      logger.debug('Social sign in initiated', { provider: options.provider });
      
      // Return a placeholder - the real session will come via auth state change
      return createAuthSuccess({} as AuthSession);
    } catch (error) {
      logger.error('Social sign in error', { error });
      return createAuthFailure(this.convertError(error));
    }
  }

  /**
   * Sign out current user
   */
  async signOut(): Promise<AuthResult<null>> {
    logger.debug('Signing out user');
    
    try {
      const { error } = await this.client.auth.signOut();

      if (error) {
        logger.debug('Sign out failed', { error });
        return createAuthFailure(this.convertError(error));
      }

      logger.debug('User signed out successfully');
      return createAuthSuccess(null);
    } catch (error) {
      logger.error('Sign out error', { error });
      return createAuthFailure(this.convertError(error));
    }
  }

  /**
   * Send password reset email
   */
  async resetPassword(request: PasswordResetRequest): Promise<AuthResult<null>> {
    logger.debug('Sending password reset email', { email: request.email });
    
    try {
      const { error } = await this.client.auth.resetPasswordForEmail(request.email, {
        redirectTo: request.redirectTo || this.config.redirectUrls?.passwordReset,
      });

      if (error) {
        logger.debug('Password reset failed', { error });
        return createAuthFailure(this.convertError(error));
      }

      logger.debug('Password reset email sent successfully');
      return createAuthSuccess(null);
    } catch (error) {
      logger.error('Password reset error', { error });
      return createAuthFailure(this.convertError(error));
    }
  }

  /**
   * Update user profile
   */
  async updateProfile(update: Partial<AuthUser>): Promise<AuthResult<AuthUser>> {
    logger.debug('Updating user profile');
    
    try {
      const { data, error } = await this.client.auth.updateUser({
        data: {
          full_name: update.name,
          avatar_url: update.avatarUrl,
          ...update.metadata,
        },
      });

      if (error) {
        logger.debug('Profile update failed', { error });
        return createAuthFailure(this.convertError(error));
      }

      if (!data.user) {
        logger.debug('No user returned from profile update');
        return createAuthFailure(createAuthError('UNKNOWN_ERROR', 'Profile update failed'));
      }

      const user = this.convertUser(data.user);
      logger.debug('Profile updated successfully');
      
      return createAuthSuccess(user);
    } catch (error) {
      logger.error('Profile update error', { error });
      return createAuthFailure(this.convertError(error));
    }
  }

  /**
   * Refresh current session
   */
  async refreshSession(): Promise<AuthResult<AuthSession>> {
    logger.debug('Refreshing session');
    
    try {
      const { data, error } = await this.client.auth.refreshSession();

      if (error) {
        logger.debug('Session refresh failed', { error });
        return createAuthFailure(this.convertError(error));
      }

      if (!data.session) {
        logger.debug('No session returned from refresh');
        return createAuthFailure(createAuthError('TOKEN_EXPIRED', 'Session refresh failed'));
      }

      const session = this.convertSession(data.session);
      logger.debug('Session refreshed successfully');
      
      return createAuthSuccess(session);
    } catch (error) {
      logger.error('Session refresh error', { error });
      return createAuthFailure(this.convertError(error));
    }
  }

  /**
   * Listen to auth state changes
   */
  onAuthStateChange(callback: (session: AuthSession | null, error?: AuthError) => void): () => void {
    logger.debug('Setting up auth state change listener');
    
    const { data: { subscription } } = this.client.auth.onAuthStateChange((event, session) => {
      logger.debug('Auth state changed', { event, hasSession: !!session });
      
      if (session) {
        const convertedSession = this.convertSession(session);
        callback(convertedSession);
      } else {
        callback(null);
      }
    });

    return () => {
      logger.debug('Removing auth state change listener');
      subscription.unsubscribe();
    };
  }
}
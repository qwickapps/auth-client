/**
 * QwickAuth Service Client - Default implementation for QwickApps Auth Service
 * 
 * This is the default auth service client that communicates with qwickapps-auth-service
 * via HTTP endpoints. Can be replaced with custom implementations for different backends.
 * 
 * Copyright © 2025 QwickApps.com. All rights reserved.
 */

import {
  AuthUser,
  AuthSession,
  AuthError,
  AuthResult,
  SignUpCredentials,
  SignInCredentials,
  PasswordResetRequest,
  SocialSignInOptions,
  createAuthSuccess,
  createAuthFailure,
  AuthClientConfig,
} from '@qwickapps/auth';
import { getLogger } from '@qwickapps/logging';
import { AuthServiceClient } from '@qwickapps/auth';

const logger = getLogger('QwickAuthServiceClient');

/**
 * Default implementation of AuthServiceClient for QwickApps Auth Service
 */
export class QwickAuthServiceClient implements AuthServiceClient {
  private serviceEndpoint: string;
  private authStateListeners: Array<(session: AuthSession | null, error?: AuthError) => void> = [];
  private config: AuthClientConfig;

  constructor(config: AuthClientConfig) {
    this.config = config;
    this.serviceEndpoint = config.serviceEndpoint.replace(/\/$/, ''); // Remove trailing slash
    logger.debug('QwickAuthServiceClient initialized', { serviceEndpoint: this.serviceEndpoint });
  }

  /**
   * Get headers for API requests - default implementation for standard services
   */
  getHeaders(): HeadersInit {
    return {
      'Content-Type': 'application/json',
      'apikey': this.config.supabaseAnonKey,
      'Authorization': `Bearer ${this.config.supabaseAnonKey}`,
    };
  }

  /**
   * Get current session from service
   */
  async getCurrentSession(): Promise<AuthSession | null> {
    try {
      const response = await fetch(`${this.serviceEndpoint}/auth/me`, {
        method: 'GET',
        credentials: 'include', // Include session cookies
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        if (response.status === 401) {
          // No active session
          return null;
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      logger.debug('Current session retrieved', { hasSession: !!data.session });
      
      return data.session || null;
    } catch (error) {
      logger.error('Failed to get current session', { error });
      return null;
    }
  }

  /**
   * Sign in with credentials
   */
  async signIn(credentials: SignInCredentials): Promise<AuthResult<AuthSession>> {
    try {
      logger.debug('Signing in', { email: credentials.email });
      
      const response = await fetch(`${this.serviceEndpoint}/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: this.getHeaders(),
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        logger.error('Sign in failed', { status: response.status, error: data });
        return createAuthFailure(data.error || {
          type: 'SIGN_IN_ERROR',
          message: data.message || 'Sign in failed',
        });
      }

      logger.debug('Sign in successful');
      
      // Notify listeners
      this.notifyAuthStateChange(data.session);
      
      return createAuthSuccess(data.session);
    } catch (error) {
      logger.error('Sign in error', { error });
      return createAuthFailure({
        type: 'NETWORK_ERROR',
        message: 'Failed to connect to authentication service',
        details: error,
      });
    }
  }

  /**
   * Sign up new user
   */
  async signUp(credentials: SignUpCredentials): Promise<AuthResult<AuthUser>> {
    try {
      logger.debug('Signing up', { email: credentials.email });
      
      const response = await fetch(`${this.serviceEndpoint}/auth/register`, {
        method: 'POST',
        credentials: 'include',
        headers: this.getHeaders(),
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        logger.error('Sign up failed', { status: response.status, error: data });
        return createAuthFailure(data.error || {
          type: 'SIGN_UP_ERROR',
          message: data.message || 'Sign up failed',
        });
      }

      logger.debug('Sign up successful');
      return createAuthSuccess(data.user);
    } catch (error) {
      logger.error('Sign up error', { error });
      return createAuthFailure({
        type: 'NETWORK_ERROR',
        message: 'Failed to connect to authentication service',
        details: error,
      });
    }
  }

  /**
   * Sign out current user
   */
  async signOut(): Promise<AuthResult<null>> {
    try {
      logger.debug('Signing out');
      
      const response = await fetch(`${this.serviceEndpoint}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        const data = await response.json();
        logger.error('Sign out failed', { status: response.status, error: data });
        return createAuthFailure(data.error || {
          type: 'SIGN_OUT_ERROR',
          message: data.message || 'Sign out failed',
        });
      }

      logger.debug('Sign out successful');
      
      // Notify listeners
      this.notifyAuthStateChange(null);
      
      return createAuthSuccess(null);
    } catch (error) {
      logger.error('Sign out error', { error });
      return createAuthFailure({
        type: 'NETWORK_ERROR',
        message: 'Failed to connect to authentication service',
        details: error,
      });
    }
  }

  /**
   * Request password reset
   */
  async resetPassword(request: PasswordResetRequest): Promise<AuthResult<null>> {
    try {
      logger.debug('Requesting password reset', { email: request.email });
      
      const response = await fetch(`${this.serviceEndpoint}/auth/reset-password`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(request),
      });

      const data = await response.json();

      if (!response.ok) {
        logger.error('Password reset failed', { status: response.status, error: data });
        return createAuthFailure(data.error || {
          type: 'PASSWORD_RESET_ERROR',
          message: data.message || 'Password reset failed',
        });
      }

      logger.debug('Password reset email sent');
      return createAuthSuccess(null);
    } catch (error) {
      logger.error('Password reset error', { error });
      return createAuthFailure({
        type: 'NETWORK_ERROR',
        message: 'Failed to connect to authentication service',
        details: error,
      });
    }
  }

  /**
   * Update user profile
   */
  async updateProfile(update: Partial<AuthUser>): Promise<AuthResult<AuthUser>> {
    try {
      logger.debug('Updating profile');
      
      const response = await fetch(`${this.serviceEndpoint}/auth/profile`, {
        method: 'PATCH',
        credentials: 'include',
        headers: this.getHeaders(),
        body: JSON.stringify(update),
      });

      const data = await response.json();

      if (!response.ok) {
        logger.error('Profile update failed', { status: response.status, error: data });
        return createAuthFailure(data.error || {
          type: 'PROFILE_UPDATE_ERROR',
          message: data.message || 'Profile update failed',
        });
      }

      logger.debug('Profile update successful');
      return createAuthSuccess(data.user);
    } catch (error) {
      logger.error('Profile update error', { error });
      return createAuthFailure({
        type: 'NETWORK_ERROR',
        message: 'Failed to connect to authentication service',
        details: error,
      });
    }
  }

  /**
   * Refresh current session
   */
  async refreshSession(): Promise<AuthResult<AuthSession>> {
    try {
      logger.debug('Refreshing session');
      
      const response = await fetch(`${this.serviceEndpoint}/auth/refresh`, {
        method: 'POST',
        credentials: 'include',
        headers: this.getHeaders(),
      });

      const data = await response.json();

      if (!response.ok) {
        logger.error('Session refresh failed', { status: response.status, error: data });
        return createAuthFailure(data.error || {
          type: 'SESSION_REFRESH_ERROR',
          message: data.message || 'Session refresh failed',
        });
      }

      logger.debug('Session refresh successful');
      
      // Notify listeners
      this.notifyAuthStateChange(data.session);
      
      return createAuthSuccess(data.session);
    } catch (error) {
      logger.error('Session refresh error', { error });
      return createAuthFailure({
        type: 'NETWORK_ERROR',
        message: 'Failed to connect to authentication service',
        details: error,
      });
    }
  }

  /**
   * Sign in with social provider
   */
  async signInWithProvider(options: SocialSignInOptions): Promise<AuthResult<AuthSession>> {
    try {
      logger.debug('Social sign in requested', { provider: options.provider });
      
      // For social auth, we typically redirect to the service endpoint
      const redirectUrl = `${this.serviceEndpoint}/auth/${options.provider}`;
      
      // Store current location for redirect back
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem('auth_redirect_url', window.location.href);
        window.location.href = redirectUrl;
      }

      // This is a redirect, so we return a success immediately
      // The actual session will be handled after redirect
      return createAuthSuccess(null as any);
    } catch (error) {
      logger.error('Social sign in error', { error });
      return createAuthFailure({
        type: 'UNKNOWN_ERROR',
        message: 'Failed to initiate social authentication',
        details: error,
      });
    }
  }

  /**
   * Set up auth state change listener
   */
  onAuthStateChange(callback: (session: AuthSession | null, error?: AuthError) => void): () => void {
    this.authStateListeners.push(callback);
    
    // Return unsubscribe function
    return () => {
      const index = this.authStateListeners.indexOf(callback);
      if (index > -1) {
        this.authStateListeners.splice(index, 1);
      }
    };
  }

  /**
   * Notify all listeners of auth state changes
   */
  private notifyAuthStateChange(session: AuthSession | null, error?: AuthError) {
    this.authStateListeners.forEach(callback => {
      try {
        callback(session, error);
      } catch (error) {
        logger.error('Auth state listener error', { error });
      }
    });
  }
}
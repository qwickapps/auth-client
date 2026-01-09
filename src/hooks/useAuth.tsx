/**
 * React Authentication Hooks and Context for QwickApps
 *
 * Provides authentication state, actions, and role-based access utilities for React applications.
 *
 * Copyright © 2025 QwickApps.com. All rights reserved.
 * Proprietary and confidential.
 */

import React, { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import {
  AuthUser,
  AuthSession,
  AuthError,
  AuthResult,
  SignUpCredentials,
  SignInCredentials,
  PasswordResetRequest,
  SocialSignInOptions,
} from '@qwickapps/auth';
import { getLogger } from '@qwickapps/logging';
import { 
  ClientAuthState, 
  AuthContextValue, 
  AuthProviderProps
} from '../types/auth-client';

const logger = getLogger('AuthProvider');

// Create auth context
const AuthContext = createContext<AuthContextValue | null>(null);

/**
 * AuthProvider component
 *
 * Provides authentication context and state management for child components.
 * Injects a custom auth service client and exposes authentication actions and state.
 *
 * @param {AuthProviderProps} props - Provider props including children, authServiceClient, and optional callbacks.
 * @returns {JSX.Element} React context provider for authentication.
 */
export function AuthProvider({ 
  children, 
  authServiceClient,
  onAuthStateChange, 
  onError 
}: AuthProviderProps) {
  const [state, setState] = useState<ClientAuthState>({
    user: null,
    session: null,
    loading: true,
    error: null,
    initialized: false,
  });

  // Get auth service client - simple and clear
  const authService = useState(() => {
    logger.debug('Using provided auth service client');
    return authServiceClient;
  })[0];

  // Update state helper
  const updateState = useCallback((updates: Partial<ClientAuthState>) => {
    setState(prevState => {
      const newState = { ...prevState, ...updates };
      
      // Notify parent component of auth state changes
      if (onAuthStateChange) {
        onAuthStateChange(newState);
      }
      
      return newState;
    });
  }, [onAuthStateChange]);

  // Handle errors
  const handleError = useCallback((error: AuthError) => {
    logger.error('Auth error occurred', { error });
    updateState({ error, loading: false });
    
    if (onError) {
      onError(error);
    }
  }, [updateState, onError]);

  // Clear error
  const clearError = useCallback(() => {
    updateState({ error: null });
  }, [updateState]);

  // Initialize auth provider and set up listeners
  useEffect(() => {
    logger.debug('Initializing auth provider');
    
    let unsubscribe: (() => void) | null = null;

    const initialize = async () => {
      try {
        // Get initial session
        const session = await authService.getCurrentSession();
        
        logger.debug('Initial session retrieved', { hasSession: !!session });
        
        updateState({
          user: session?.user || null,
          session,
          loading: false,
          initialized: true,
          error: null,
        });

        // Set up auth state change listener
        unsubscribe = authService.onAuthStateChange((session, error) => {
          if (error) {
            handleError(error);
          } else {
            logger.debug('Auth state changed', { hasSession: !!session });
            updateState({
              user: session?.user || null,
              session,
              loading: false,
              error: null,
            });
          }
        });

      } catch (error) {
        logger.error('Failed to initialize auth provider', { error });
        handleError({
          type: 'UNKNOWN_ERROR',
          message: 'Failed to initialize authentication',
          details: error,
        });
      }
    };

    initialize();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [authService, updateState, handleError]);

  // Auth actions
  const signIn = useCallback(async (credentials: SignInCredentials): Promise<AuthResult<AuthSession>> => {
    logger.debug('Sign in requested', { email: credentials.email });
    
    updateState({ loading: true, error: null });
    
    try {
      const result = await authService.signIn(credentials);
      
      if (result.error) {
        handleError(result.error);
      } else {
        logger.debug('Sign in successful');
        // State will be updated via auth state change listener
      }
      
      return result;
    } catch (error) {
      const authError = {
        type: 'UNKNOWN_ERROR' as const,
        message: 'Sign in failed',
        details: error,
      };
      handleError(authError);
      return { data: null, error: authError };
    } finally {
      updateState({ loading: false });
    }
  }, [authService, updateState, handleError]);

  const signUp = useCallback(async (credentials: SignUpCredentials): Promise<AuthResult<AuthUser>> => {
    logger.debug('Sign up requested', { email: credentials.email });
    
    updateState({ loading: true, error: null });
    
    try {
      const result = await authService.signUp(credentials);
      
      if (result.error) {
        handleError(result.error);
      } else {
        logger.debug('Sign up successful');
      }
      
      return result;
    } catch (error) {
      const authError = {
        type: 'UNKNOWN_ERROR' as const,
        message: 'Sign up failed',
        details: error,
      };
      handleError(authError);
      return { data: null, error: authError };
    } finally {
      updateState({ loading: false });
    }
  }, [authService, updateState, handleError]);

  const signOut = useCallback(async (): Promise<AuthResult<null>> => {
    logger.debug('Sign out requested');
    
    updateState({ loading: true, error: null });
    
    try {
      const result = await authService.signOut();
      
      if (result.error) {
        handleError(result.error);
      } else {
        logger.debug('Sign out successful');
        // State will be updated via auth state change listener
      }
      
      return result;
    } catch (error) {
      const authError = {
        type: 'UNKNOWN_ERROR' as const,
        message: 'Sign out failed',
        details: error,
      };
      handleError(authError);
      return { data: null, error: authError };
    } finally {
      updateState({ loading: false });
    }
  }, [authService, updateState, handleError]);

  const resetPassword = useCallback(async (request: PasswordResetRequest): Promise<AuthResult<null>> => {
    logger.debug('Password reset requested', { email: request.email });
    
    updateState({ loading: true, error: null });
    
    try {
      const result = await authService.resetPassword(request);
      
      if (result.error) {
        handleError(result.error);
      } else {
        logger.debug('Password reset email sent');
      }
      
      return result;
    } catch (error) {
      const authError = {
        type: 'UNKNOWN_ERROR' as const,
        message: 'Password reset failed',
        details: error,
      };
      handleError(authError);
      return { data: null, error: authError };
    } finally {
      updateState({ loading: false });
    }
  }, [authService, updateState, handleError]);

  const updateProfile = useCallback(async (update: Partial<AuthUser>): Promise<AuthResult<AuthUser>> => {
    logger.debug('Profile update requested');
    
    updateState({ loading: true, error: null });
    
    try {
      const result = await authService.updateProfile(update);
      
      if (result.error) {
        handleError(result.error);
      } else {
        logger.debug('Profile update successful');
        // State will be updated via auth state change listener
      }
      
      return result;
    } catch (error) {
      const authError = {
        type: 'UNKNOWN_ERROR' as const,
        message: 'Profile update failed',
        details: error,
      };
      handleError(authError);
      return { data: null, error: authError };
    } finally {
      updateState({ loading: false });
    }
  }, [authService, updateState, handleError]);

  const refreshSession = useCallback(async (): Promise<AuthResult<AuthSession>> => {
    logger.debug('Session refresh requested');
    
    try {
      const result = await authService.refreshSession();
      
      if (result.error) {
        handleError(result.error);
      } else {
        logger.debug('Session refresh successful');
        // State will be updated via auth state change listener
      }
      
      return result;
    } catch (error) {
      const authError = {
        type: 'UNKNOWN_ERROR' as const,
        message: 'Session refresh failed',
        details: error,
      };
      handleError(authError);
      return { data: null, error: authError };
    }
  }, [authServiceClient, handleError]);

  const signInWithProvider = useCallback(async (options: SocialSignInOptions): Promise<AuthResult<AuthSession>> => {
    logger.debug('Social sign in requested', { provider: options.provider });
    
    updateState({ loading: true, error: null });
    
    try {
      const result = await authService.signInWithProvider(options);
      
      if (result.error) {
        handleError(result.error);
      } else {
        logger.debug('Social sign in initiated');
      }
      
      return result;
    } catch (error) {
      const authError = {
        type: 'UNKNOWN_ERROR' as const,
        message: 'Social sign in failed',
        details: error,
      };
      handleError(authError);
      return { data: null, error: authError };
    } finally {
      updateState({ loading: false });
    }
  }, [authService, updateState, handleError]);

  // Context value
  const contextValue: AuthContextValue = {
    user: state.user,
    session: state.session,
    loading: state.loading,
    error: state.error,
    initialized: state.initialized,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updateProfile,
    refreshSession,
    signInWithProvider,
    clearError,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * useAuth hook
 *
 * Returns the current authentication context value, including user, session, loading, error, and auth actions.
 * Must be used within an AuthProvider.
 *
 * @returns {AuthContextValue} Authentication context value.
 * @throws {Error} If used outside an AuthProvider.
 */
export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}

/**
 * useIsAuthenticated hook
 *
 * Returns true if a user is currently authenticated, false otherwise.
 *
 * @returns {boolean} Authentication status.
 */
export function useIsAuthenticated(): boolean {
  const { user } = useAuth();
  return user !== null;
}

/**
 * useHasRole hook
 *
 * Checks if the current user has a specific role.
 *
 * @param {string} role - Role to check.
 * @returns {boolean} True if user has the role, false otherwise.
 */
export function useHasRole(role: string): boolean {
  const { user } = useAuth();
  return user?.metadata?.roles?.includes(role) ?? false;
}

/**
 * useHasAnyRole hook
 *
 * Checks if the current user has any of the specified roles.
 *
 * @param {string[]} roles - Array of roles to check.
 * @returns {boolean} True if user has any of the roles, false otherwise.
 */
export function useHasAnyRole(roles: string[]): boolean {
  const { user } = useAuth();
  const userRoles = user?.metadata?.roles || [];
  return roles.some(role => userRoles.includes(role));
}
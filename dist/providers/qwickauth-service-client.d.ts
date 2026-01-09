/**
 * QwickAuth Service Client - Default implementation for QwickApps Auth Service
 *
 * This is the default auth service client that communicates with qwickapps-auth-service
 * via HTTP endpoints. Can be replaced with custom implementations for different backends.
 *
 * Copyright © 2025 QwickApps.com. All rights reserved.
 */
import { AuthUser, AuthSession, AuthError, AuthResult, SignUpCredentials, SignInCredentials, PasswordResetRequest, SocialSignInOptions, AuthClientConfig } from '@qwickapps/auth';
import { AuthServiceClient } from '@qwickapps/auth';
/**
 * Default implementation of AuthServiceClient for QwickApps Auth Service
 */
export declare class QwickAuthServiceClient implements AuthServiceClient {
    private serviceEndpoint;
    private authStateListeners;
    private config;
    constructor(config: AuthClientConfig);
    /**
     * Get headers for API requests - default implementation for standard services
     */
    getHeaders(): HeadersInit;
    /**
     * Get current session from service
     */
    getCurrentSession(): Promise<AuthSession | null>;
    /**
     * Sign in with credentials
     */
    signIn(credentials: SignInCredentials): Promise<AuthResult<AuthSession>>;
    /**
     * Sign up new user
     */
    signUp(credentials: SignUpCredentials): Promise<AuthResult<AuthUser>>;
    /**
     * Sign out current user
     */
    signOut(): Promise<AuthResult<null>>;
    /**
     * Request password reset
     */
    resetPassword(request: PasswordResetRequest): Promise<AuthResult<null>>;
    /**
     * Update user profile
     */
    updateProfile(update: Partial<AuthUser>): Promise<AuthResult<AuthUser>>;
    /**
     * Refresh current session
     */
    refreshSession(): Promise<AuthResult<AuthSession>>;
    /**
     * Sign in with social provider
     */
    signInWithProvider(options: SocialSignInOptions): Promise<AuthResult<AuthSession>>;
    /**
     * Set up auth state change listener
     */
    onAuthStateChange(callback: (session: AuthSession | null, error?: AuthError) => void): () => void;
    /**
     * Notify all listeners of auth state changes
     */
    private notifyAuthStateChange;
}

/**
 * Supabase authentication provider for client-side auth
 *
 * Copyright © 2025 QwickApps.com. All rights reserved.
 * This software is proprietary and confidential.
 */
import { SupabaseClient } from '@supabase/supabase-js';
import { AuthUser, AuthSession, AuthError, AuthResult, SignUpCredentials, SignInCredentials, PasswordResetRequest, SocialSignInOptions } from '@qwickapps/auth';
import { AuthServiceClient } from '@qwickapps/auth';
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
    enabledProviders?: string[];
}
/**
 * Supabase authentication provider - implements AuthServiceClient interface
 */
export declare class SupabaseAuthProvider implements AuthServiceClient {
    private client;
    private config;
    constructor(config: SupabaseAuthConfig);
    /**
     * Get the Supabase client instance
     */
    getClient(): SupabaseClient;
    /**
     * Get list of enabled OAuth providers
     */
    getEnabledProviders(): string[];
    /**
     * Get headers for API requests - Supabase-specific implementation
     */
    getHeaders(): HeadersInit;
    /**
     * Convert Supabase user to AuthUser format
     */
    private convertUser;
    /**
     * Convert Supabase session to AuthSession format
     */
    private convertSession;
    /**
     * Convert Supabase error to AuthError format
     */
    private convertError;
    /**
     * Get current session
     */
    getCurrentSession(): Promise<AuthSession | null>;
    /**
     * Get current user
     */
    getCurrentUser(): Promise<AuthUser | null>;
    /**
     * Sign up a new user
     */
    signUp(credentials: SignUpCredentials): Promise<AuthResult<AuthUser>>;
    /**
     * Sign in with email and password
     */
    signIn(credentials: SignInCredentials): Promise<AuthResult<AuthSession>>;
    /**
     * Sign in with social provider
     */
    signInWithProvider(options: SocialSignInOptions): Promise<AuthResult<AuthSession>>;
    /**
     * Sign out current user
     */
    signOut(): Promise<AuthResult<null>>;
    /**
     * Send password reset email
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
     * Listen to auth state changes
     */
    onAuthStateChange(callback: (session: AuthSession | null, error?: AuthError) => void): () => void;
}

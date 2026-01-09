/**
 * SuperTokens Authentication Provider
 *
 * Client-side auth provider using SuperTokens for session management
 *
 * Copyright © 2025 QwickApps.com. All rights reserved.
 */
import { AuthServiceClient, AuthSession, AuthUser, AuthResult, SignInCredentials, SignUpCredentials, PasswordResetRequest, SocialSignInOptions, AuthError } from '@qwickapps/auth';
export interface SuperTokensConfig {
    appName: string;
    apiDomain: string;
    apiBasePath?: string;
}
export declare class SuperTokensAuthProvider implements AuthServiceClient {
    private config;
    private initialized;
    private authStateListeners;
    constructor(config: SuperTokensConfig);
    private initialize;
    getCurrentSession(): Promise<AuthSession | null>;
    signIn(credentials: SignInCredentials): Promise<AuthResult<AuthSession>>;
    signUp(credentials: SignUpCredentials): Promise<AuthResult<AuthUser>>;
    signOut(): Promise<AuthResult<null>>;
    resetPassword(request: PasswordResetRequest): Promise<AuthResult<null>>;
    updateProfile(update: Partial<AuthUser>): Promise<AuthResult<AuthUser>>;
    refreshSession(): Promise<AuthResult<AuthSession>>;
    signInWithProvider(options: SocialSignInOptions): Promise<AuthResult<AuthSession>>;
    onAuthStateChange(callback: (session: AuthSession | null, error?: AuthError) => void): () => void;
    getHeaders(): HeadersInit;
    private notifyAuthStateChange;
}
/**
 * Factory function for creating SuperTokens auth provider
 */
export declare function createSuperTokensProvider(config: SuperTokensConfig): SuperTokensAuthProvider;

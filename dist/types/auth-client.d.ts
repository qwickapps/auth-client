/**
 * Client-side authentication types for QwickApps Auth Client
 *
 * Copyright © 2025 QwickApps.com. All rights reserved.
 * This software is proprietary and confidential.
 */
import { AuthUser, AuthSession, AuthError, AuthResult, SignUpCredentials, SignInCredentials, PasswordResetRequest, SocialSignInOptions, AuthServiceClient, SocialProviderConfig as BaseSocialProviderConfig, AuthClientConfig as BaseAuthClientConfig } from '@qwickapps/auth';
/**
 * Client-side authentication state (extends backend with loading states)
 */
export interface ClientAuthState {
    user: AuthUser | null;
    session: AuthSession | null;
    loading: boolean;
    error: AuthError | null;
    initialized: boolean;
}
/**
 * Social provider configuration with UI support (extends base)
 */
export interface SocialProviderUIConfig extends BaseSocialProviderConfig {
    icon?: React.ReactNode;
}
/**
 * Authentication client configuration with UI support (extends base)
 */
export interface AuthClientUIConfig extends BaseAuthClientConfig {
    /**
     * Social providers configuration with UI support
     */
    socialProviders?: SocialProviderUIConfig[];
    /**
     * UI customization
     */
    ui?: {
        theme?: 'light' | 'dark' | 'auto';
        primaryColor?: string;
        logo?: string | React.ReactNode;
    };
}
/**
 * Registration form data
 */
export interface RegisterFormData {
    email: string;
    password: string;
    confirmPassword: string;
    fullName?: string;
    acceptTerms?: boolean;
}
/**
 * Login form data
 */
export interface LoginFormData {
    email: string;
    password: string;
    rememberMe?: boolean;
}
/**
 * Auth context value for React
 */
export interface AuthContextValue {
    user: AuthUser | null;
    session: AuthSession | null;
    loading: boolean;
    error: AuthError | null;
    initialized: boolean;
    signIn: (credentials: SignInCredentials) => Promise<AuthResult<AuthSession>>;
    signUp: (credentials: SignUpCredentials) => Promise<AuthResult<AuthUser>>;
    signOut: () => Promise<AuthResult<null>>;
    resetPassword: (request: PasswordResetRequest) => Promise<AuthResult<null>>;
    updateProfile: (update: Partial<AuthUser>) => Promise<AuthResult<AuthUser>>;
    refreshSession: () => Promise<AuthResult<AuthSession>>;
    signInWithProvider: (options: SocialSignInOptions) => Promise<AuthResult<AuthSession>>;
    clearError: () => void;
}
/**
 * Auth provider props - clean, simple interface
 */
export interface AuthProviderProps {
    children: React.ReactNode;
    /** Auth service client - pass the .authServiceClient property from your API client */
    authServiceClient: AuthServiceClient;
    /** Auth state change callback */
    onAuthStateChange?: (state: ClientAuthState) => void;
    /** Error callback */
    onError?: (error: AuthError) => void;
}
/**
 * Form component props
 */
export interface LoginPageProps {
    title?: string;
    subtitle?: string;
    logo?: string | React.ReactNode;
    onSuccess?: (session: AuthSession) => void;
    onError?: (error: AuthError) => void;
    showSocialLogin?: boolean;
    showForgotPassword?: boolean;
    registerUrl?: string;
    className?: string;
}
export interface RegisterPageProps {
    title?: string;
    subtitle?: string;
    logo?: string | React.ReactNode;
    onSuccess?: (user: AuthUser) => void;
    onError?: (error: AuthError) => void;
    showSocialLogin?: boolean;
    requireName?: boolean;
    requireTerms?: boolean;
    termsUrl?: string;
    signInUrl?: string;
    className?: string;
}
export interface PasswordResetPageProps {
    title?: string;
    subtitle?: string;
    logo?: string | React.ReactNode;
    onSuccess?: () => void;
    onError?: (error: AuthError) => void;
    backToLoginUrl?: string;
    className?: string;
}

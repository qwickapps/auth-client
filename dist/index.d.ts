/**
 * QwickApps Authentication Client Library
 *
 * Copyright © 2025 QwickApps.com. All rights reserved.
 * This software is proprietary and confidential.
 *
 * Complete React authentication solution with built-in Supabase integration,
 * auth UI components, and zero-configuration setup for client applications.
 */
export { AuthProvider, useAuth, useIsAuthenticated, useHasRole, useHasAnyRole } from './hooks/useAuth';
export { LoginPage } from './components/auth/LoginPage';
export { LoginForm } from './components/auth/LoginForm';
export { RegisterPage } from './components/auth/RegisterPage';
export { RegisterForm } from './components/auth/RegisterForm';
export { PasswordResetPage } from './components/auth/PasswordResetPage';
export { PasswordResetForm } from './components/auth/PasswordResetForm';
export { PasswordResetConfirmPage } from './components/auth/PasswordResetConfirmPage';
export { PasswordResetConfirmForm } from './components/auth/PasswordResetConfirmForm';
export { RouteGuard } from './components/auth/RouteGuard';
export { AccessGuard } from './components/auth/AccessGuard';
export { default as AuthRoutes } from './components/auth/AuthRoutes';
export { SocialAuthBlock } from './components/auth/SocialAuthBlock';
export { SocialLoginButton } from './components/auth/SocialLoginButton';
export { SignUpFooterLink, SignInFooterLink } from './components/auth/AuthFooterLinks';
export { LogoutButton } from './components/auth/LogoutButton';
export type { LogoutButtonProps } from './components/auth/LogoutButton';
export type { ClientAuthState, RegisterFormData, LoginFormData, AuthContextValue, AuthProviderProps, LoginPageProps, RegisterPageProps, PasswordResetPageProps, SocialProviderUIConfig, AuthClientUIConfig, } from './types/auth-client';
export type { AuthUser, AuthSession, AuthError, AuthResult, SignUpCredentials, SignInCredentials, PasswordResetRequest, SocialProvider, SocialSignInOptions, AuthenticationType, AuthServiceClient, SocialProviderConfig, AuthClientConfig, } from '@qwickapps/auth';
export { SupabaseAuthProvider } from './providers/supabase-auth-provider';
export { QwickAuthServiceClient } from './providers/qwickauth-service-client';
export { SuperTokensAuthProvider, createSuperTokensProvider } from './providers/supertokens-auth-provider';
export type { SuperTokensConfig } from './providers/supertokens-auth-provider';
export declare const QWICKAPPS_AUTH_CLIENT_VERSION = "1.0.0";
import { AuthenticationType } from '@qwickapps/auth';
import { AuthProvider } from './hooks/useAuth';
/**
 * Create a client configuration for authentication services
 */
export declare function createAuthConfig(config: {
    serviceEndpoint: string;
    supportedAuthTypes?: AuthenticationType[];
    defaultAuthType?: AuthenticationType;
    appName?: string;
    socialProviders?: string[];
}): object;
export default AuthProvider;

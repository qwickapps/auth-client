/**
 * Authentication Components
 *
 * Export all auth-related UI components for QwickApps React Framework
 *
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */
export { LoginForm } from './LoginForm';
export type { LoginFormProps, LoginCredentials } from './LoginForm';
export { RegisterForm } from './RegisterForm';
export type { RegisterFormProps, RegisterCredentials } from './RegisterForm';
export { PasswordResetForm } from './PasswordResetForm';
export type { PasswordResetFormProps, PasswordResetRequest } from './PasswordResetForm';
export { PasswordResetConfirmForm } from './PasswordResetConfirmForm';
export type { PasswordResetConfirmFormProps, PasswordResetConfirm, PasswordStrength } from './PasswordResetConfirmForm';
export { SocialLoginButton } from './SocialLoginButton';
export type { SocialLoginButtonProps, SocialProvider } from './SocialLoginButton';
export { SocialAuthBlock } from './SocialAuthBlock';
export type { SocialAuthBlockProps } from './SocialAuthBlock';
export { AuthFooterLinks, SignUpFooterLink, SignInFooterLink } from './AuthFooterLinks';
export type { AuthFooterLinksProps } from './AuthFooterLinks';
export { LogoutButton } from './LogoutButton';
export type { LogoutButtonProps } from './LogoutButton';
export { AuthProvider, useAuth } from '../../hooks/useAuth';
export type { AuthProviderProps } from '../../types/auth-client';
export { RouteGuard } from './RouteGuard';
export type { RouteGuardProps, AuthState } from './RouteGuard';
export { AccessGuard } from './AccessGuard';
export type { AccessGuardProps, User, AccessDeniedAction } from './AccessGuard';
export { LoginPage } from './LoginPage';
export { RegisterPage } from './RegisterPage';
export type { RegisterPageProps } from './RegisterPage';
export { PasswordResetPage } from './PasswordResetPage';
export type { PasswordResetPageProps } from './PasswordResetPage';
export { PasswordResetConfirmPage } from './PasswordResetConfirmPage';
export type { PasswordResetConfirmPageProps } from './PasswordResetConfirmPage';
export { default as AuthRoutes } from './AuthRoutes';
export type { PasswordStrength as CommonPasswordStrength } from './RegisterForm';

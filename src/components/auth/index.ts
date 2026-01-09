/**
 * Authentication Components
 * 
 * Export all auth-related UI components for QwickApps React Framework
 * 
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */

// Form Components
export { LoginForm } from './LoginForm';
export type { LoginFormProps, LoginCredentials } from './LoginForm';

export { RegisterForm } from './RegisterForm';
export type { RegisterFormProps, RegisterCredentials } from './RegisterForm';

export { PasswordResetForm } from './PasswordResetForm';
export type { PasswordResetFormProps, PasswordResetRequest } from './PasswordResetForm';

export { PasswordResetConfirmForm } from './PasswordResetConfirmForm';
export type { 
  PasswordResetConfirmFormProps, 
  PasswordResetConfirm,
  PasswordStrength 
} from './PasswordResetConfirmForm';

// Social Login
export { SocialLoginButton } from './SocialLoginButton';
export type { SocialLoginButtonProps, SocialProvider } from './SocialLoginButton';

export { SocialAuthBlock } from './SocialAuthBlock';
export type { SocialAuthBlockProps } from './SocialAuthBlock';

// Footer Components
export { AuthFooterLinks, SignUpFooterLink, SignInFooterLink } from './AuthFooterLinks';
export type { AuthFooterLinksProps } from './AuthFooterLinks';

// Utility Components
export { LogoutButton } from './LogoutButton';
export type { LogoutButtonProps } from './LogoutButton';

// Authentication Provider (Centralized Auth + Routing)
export { AuthProvider, useAuth } from '../../hooks/useAuth';
export type { AuthProviderProps } from '../../types/auth-client';

// Route Protection (Full Authentication Flow)
export { RouteGuard } from './RouteGuard';
export type { RouteGuardProps, AuthState } from './RouteGuard';

// Component Protection (Lightweight Access Control)
export { AccessGuard } from './AccessGuard';
// withAccessGuard removed for security (prevented dev console manipulation)
export type { AccessGuardProps, User, AccessDeniedAction } from './AccessGuard';

// Page Components (full-page auth experiences)
export { LoginPage } from './LoginPage';

export { RegisterPage } from './RegisterPage';
export type { RegisterPageProps } from './RegisterPage';

export { PasswordResetPage } from './PasswordResetPage';
export type { PasswordResetPageProps } from './PasswordResetPage';

export { PasswordResetConfirmPage } from './PasswordResetConfirmPage';
export type { PasswordResetConfirmPageProps } from './PasswordResetConfirmPage';

// Auto-routing component for all auth pages
export { default as AuthRoutes } from './AuthRoutes';

// Re-export common types used across auth components
export type {
  PasswordStrength as CommonPasswordStrength
} from './RegisterForm';
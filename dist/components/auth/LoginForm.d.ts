/**
 * LoginForm - User login form component
 *
 * Provides a complete login interface with:
 * - Email/password input fields
 * - Form validation
 * - Loading states
 * - Error handling
 * - Social login integration
 * - Forgot password link
 *
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */
import React from 'react';
export interface LoginCredentials {
    email: string;
    password: string;
}
export interface LoginFormProps {
    /** Loading state */
    loading?: boolean;
    /** Error message to display */
    error?: string;
    /** Login handler */
    onLogin: (credentials: LoginCredentials) => void | Promise<void>;
    /** Forgot password handler */
    onForgotPassword?: (email: string) => void | Promise<void>;
    /** Social login handler */
    onSocialLogin?: (provider: string) => void | Promise<void>;
    /** Link to registration page */
    signUpUrl?: string;
    /** Show social login options */
    showSocialLogin?: boolean;
    /** Available social providers */
    socialProviders?: Array<{
        id: string;
        name: string;
        icon?: React.ReactNode;
    }>;
    /** Show forgot password link */
    showForgotPassword?: boolean;
    /** Show remember me checkbox */
    showRememberMe?: boolean;
    /** Additional CSS class */
    className?: string;
}
export declare const LoginForm: React.FC<LoginFormProps>;
export default LoginForm;

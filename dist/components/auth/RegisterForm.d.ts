/**
 * RegisterForm - Pure user registration form component
 *
 * Provides form interface for registration with:
 * - Email/password/confirm password fields
 * - Form validation and password strength checking
 * - Terms of service acceptance
 * - Loading states
 * - Social registration integration
 *
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */
import React from 'react';
export interface RegisterCredentials {
    email: string;
    password: string;
    confirmPassword: string;
    name?: string;
    acceptTerms: boolean;
}
export interface PasswordStrength {
    score: number;
    feedback: string[];
    isValid: boolean;
}
export interface RegisterFormProps {
    /** Loading state */
    loading?: boolean;
    /** Error message to display */
    error?: string;
    /** Registration handler */
    onRegister: (credentials: Omit<RegisterCredentials, 'confirmPassword'>) => void | Promise<void>;
    /** Social registration handler */
    onSocialRegister?: (provider: string) => void | Promise<void>;
    /** Password strength validator */
    validatePasswordStrength?: (password: string) => PasswordStrength;
    /** Terms of service URL */
    termsUrl?: string;
    /** Privacy policy URL */
    privacyUrl?: string;
    /** Show social registration options */
    showSocialRegister?: boolean;
    /** Available social providers */
    socialProviders?: Array<{
        id: string;
        name: string;
        icon?: React.ReactNode;
    }>;
    /** Require name field */
    requireName?: boolean;
    /** Show name field (alias for requireName) */
    showNameField?: boolean;
    /** Additional CSS class */
    className?: string;
}
export declare const RegisterForm: React.FC<RegisterFormProps>;
export default RegisterForm;

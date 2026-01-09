/**
 * PasswordResetConfirmForm - Pure password reset confirmation form component
 *
 * Provides form interface for setting new password with reset token:
 * - New password input with strength validation
 * - Password confirmation
 * - Form validation
 * - Loading states
 *
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */
import React from 'react';
export interface PasswordResetConfirm {
    password: string;
    confirmPassword: string;
    token: string;
}
export interface PasswordStrength {
    score: number;
    feedback: string[];
    isValid: boolean;
}
export interface PasswordResetConfirmFormProps {
    /** Reset token from URL or props */
    token?: string;
    /** Loading state */
    loading?: boolean;
    /** Error message to display */
    error?: string;
    /** Password reset confirmation handler */
    onPasswordResetConfirm: (request: PasswordResetConfirm) => void | Promise<void>;
    /** Password strength validator */
    validatePasswordStrength?: (password: string) => PasswordStrength;
    /** Sign in link */
    signInLink?: string;
    /** Sign in text */
    signInText?: string;
    /** Additional CSS class */
    className?: string;
}
export declare const PasswordResetConfirmForm: React.FC<PasswordResetConfirmFormProps>;
export default PasswordResetConfirmForm;

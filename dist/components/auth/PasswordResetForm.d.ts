/**
 * PasswordResetForm - Pure password reset form component
 *
 * Provides form interface for password reset with:
 * - Email input for reset request
 * - Form validation
 * - Loading states
 *
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */
import React from 'react';
export interface PasswordResetRequest {
    email: string;
}
export interface PasswordResetFormProps {
    /** Loading state */
    loading?: boolean;
    /** Error message to display */
    error?: string;
    /** Password reset request handler */
    onPasswordReset: (request: PasswordResetRequest) => void | Promise<void>;
    /** Back to login link */
    backToLoginLink?: string;
    /** Back to login text */
    backToLoginText?: string;
    /** Additional CSS class */
    className?: string;
}
export declare const PasswordResetForm: React.FC<PasswordResetFormProps>;
export default PasswordResetForm;

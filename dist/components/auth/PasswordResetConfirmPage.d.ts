/**
 * PasswordResetConfirmPage - Complete password reset confirmation page with modern layout
 *
 * Provides a full-page password reset confirmation experience with:
 * - Centered, card-based layout using FormPage
 * - CoverImageHeader with smart branding defaults
 * - Status message handling
 * - Consistent footer with sign-in link
 * - Responsive design for all screen sizes
 *
 * Suggested route: /auth/reset-password/confirm
 *
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */
import React from 'react';
import { PasswordResetConfirmFormProps } from './PasswordResetConfirmForm';
export interface PasswordResetConfirmPageProps extends PasswordResetConfirmFormProps {
    /** Page title (defaults to "Set New Password") */
    title?: string;
    /** Page subtitle */
    subtitle?: string;
    /** Logo element (overrides default app logo) */
    logo?: React.ReactNode;
    /** Custom header content (overrides CoverImageHeader) */
    header?: React.ReactNode;
    /** Background variant */
    background?: 'default' | 'gradient' | 'image';
    /** Background image URL (when background='image') */
    backgroundImage?: string;
    /** Form container max width */
    maxWidth?: 'xs' | 'sm' | 'md';
    /** Status message type */
    status?: 'info' | 'success' | 'warning' | 'error';
    /** Status message content */
    message?: string;
    /** Link to login page */
    signInUrl?: string;
    /** Footer content */
    footer?: React.ReactNode;
}
export declare const PasswordResetConfirmPage: React.FC<PasswordResetConfirmPageProps>;
export default PasswordResetConfirmPage;

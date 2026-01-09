/**
 * PasswordResetPage - Complete password reset page with modern layout
 *
 * Provides a full-page password reset experience with:
 * - Centered, card-based layout using FormPage
 * - CoverImageHeader with smart branding defaults
 * - Status message handling
 * - Consistent footer with sign-in link
 * - Responsive design for all screen sizes
 *
 * Suggested route: /auth/reset-password
 *
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */
import React from 'react';
import { PasswordResetFormProps } from './PasswordResetForm';
export interface PasswordResetPageProps extends PasswordResetFormProps {
    /** Page title (defaults to "Reset Password") */
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
export declare const PasswordResetPage: React.FC<PasswordResetPageProps>;
export default PasswordResetPage;

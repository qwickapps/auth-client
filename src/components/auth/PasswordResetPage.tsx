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
import { Typography, Link } from '@mui/material';
import { PasswordResetForm, PasswordResetFormProps } from './PasswordResetForm';
import { FormPage } from '@qwickapps/react-framework';

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

export const PasswordResetPage: React.FC<PasswordResetPageProps> = ({
  title = "Reset Password",
  subtitle = "Enter your email address and we'll send you a link to reset your password",
  logo,
  header,
  background = 'default',
  backgroundImage,
  maxWidth = 'sm',
  status,
  message,
  signInUrl,
  footer,
  ...passwordResetFormProps
}) => {
  // Create default footer with sign-in link
  const footerContent = footer || (signInUrl ? (
    <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
      Remember your password?{' '}
      <Link href={signInUrl}>
        Sign in
      </Link>
    </Typography>
  ) : undefined);

  return (
    <FormPage
      title={title}
      description={subtitle}
      form={<PasswordResetForm {...passwordResetFormProps} />}
      footer={footerContent}
      status={status}
      message={message}
      coverImage={logo}
      // header={header}
      maxWidth={maxWidth}
      background={background}
      backgroundImage={backgroundImage}
    />
  );
};

export default PasswordResetPage;
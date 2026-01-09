/**
 * RegisterPage - Complete registration page with modern layout
 * 
 * Provides a full-page registration experience with:
 * - Centered, card-based layout using FormPage
 * - CoverImageHeader with smart branding defaults
 * - Status message handling
 * - Consistent footer with sign-in link
 * - Responsive design for all screen sizes
 * 
 * Suggested route: /auth/register
 * 
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */

import React from 'react';
import { RegisterForm, RegisterFormProps } from './RegisterForm';
import { FormPage } from '@qwickapps/react-framework';
import { SignInFooterLink } from './AuthFooterLinks';

export interface RegisterPageProps extends RegisterFormProps {
  /** Page title (defaults to "Create Account") */
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
  /** Link to login page (alias for signInUrl) */
  signInLink?: string;
  /** Footer content */
  footer?: React.ReactNode;
  /** Sign in text for the footer link */
  signInText?: string;
  /** Terms and conditions link */
  termsLink?: string;
  /** Privacy policy link */
  privacyLink?: string;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({
  title = "Create Account",
  subtitle = "Join us and start your journey today",
  logo,
  header,
  background = 'default', 
  backgroundImage,
  maxWidth = 'sm',
  status,
  message,
  signInUrl,
  signInLink,
  footer,
  signInText,
  termsLink,
  privacyLink,
  ...registerFormProps
}) => {
  // Use signInLink if provided, otherwise fallback to signInUrl
  const loginUrl = signInLink ?? signInUrl;
  
  // Create default footer with sign-in link
  const footerContent = footer || (loginUrl ? (
    <SignInFooterLink href={loginUrl} />
  ) : undefined);

  return (
    <FormPage
      title={title}
      description={subtitle}
      form={<RegisterForm {...registerFormProps} />}
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

export default RegisterPage;
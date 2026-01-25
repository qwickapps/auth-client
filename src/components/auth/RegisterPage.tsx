/**
 * RegisterPage - Complete registration page with built-in authentication
 *
 * Provides a full-page registration experience with:
 * - Automatic authentication integration
 * - Centered, card-based layout using FormPage
 * - Status message handling
 * - Consistent footer with sign-in link
 * - Responsive design for all screen sizes
 *
 * **IMPORTANT**: This component is framework-agnostic and does NOT handle routing internally.
 * You MUST provide an onSuccess callback to handle navigation after successful registration.
 *
 * @example
 * ```tsx
 * // Next.js App Router
 * import { useRouter } from 'next/navigation';
 *
 * function Page() {
 *   const router = useRouter();
 *   return (
 *     <RegisterPage
 *       onSuccess={() => router.push('/dashboard')}
 *     />
 *   );
 * }
 *
 * // React Router
 * import { useNavigate } from 'react-router-dom';
 *
 * function Page() {
 *   const navigate = useNavigate();
 *   return (
 *     <RegisterPage
 *       onSuccess={() => navigate('/dashboard')}
 *     />
 *   );
 * }
 * ```
 *
 * Suggested route: /auth/register
 *
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */

import React, { useState } from 'react';
import { RegisterForm } from './RegisterForm';
import { FormPage } from '@qwickapps/react-framework';
import { SignInFooterLink } from './AuthFooterLinks';
import { useAuth } from '../../hooks/useAuth';
import { RegisterPageProps } from '../../types/auth-client';

export const RegisterPage: React.FC<RegisterPageProps> = ({
  title = "Create Account",
  subtitle = "Join us and start your journey today",
  logo,
  onSuccess,
  onError,
  showSocialLogin = false,
  requireName = false,
  requireTerms = false,
  termsUrl,
  signInUrl = "/auth/login",
  className,
}) => {
  const { signUp, loading, error, clearError } = useAuth();
  const [localError, setLocalError] = useState<string | undefined>();

  const handleRegister = async (credentials: {
    email: string;
    password: string;
    name?: string;
    acceptTerms: boolean;
  }) => {
    try {
      clearError();
      setLocalError(undefined);

      const result = await signUp({
        email: credentials.email,
        password: credentials.password,
        name: credentials.name,
      });

      if (result.error) {
        const errorMessage = result.error.message;
        setLocalError(errorMessage);
        if (onError) {
          onError(result.error);
        }
      } else if (result.data) {
        // Success - handle redirect via callback
        if (onSuccess) {
          onSuccess(result.data);
        } else {
          console.warn('RegisterPage: No onSuccess callback provided. Registration successful but cannot redirect. Please provide an onSuccess prop to handle navigation.');
        }
      }
    } catch (err) {
      const errorMessage = 'An unexpected error occurred. Please try again.';
      setLocalError(errorMessage);
      console.error('Registration error:', err);
    }
  };

  // Create default footer with sign-in link
  const footerContent = signInUrl ? (
    <SignInFooterLink href={signInUrl} />
  ) : undefined;

  return (
    <FormPage
      title={title}
      description={subtitle}
      form={
        <RegisterForm
          loading={loading}
          error={localError || error?.message}
          onRegister={handleRegister}
          showSocialRegister={showSocialLogin}
          requireName={requireName}
          termsUrl={termsUrl}
        />
      }
      footer={footerContent}
      coverImage={logo}
      maxWidth="sm"
      background="default"
    />
  );
};

export default RegisterPage;
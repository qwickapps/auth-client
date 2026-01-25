/**
 * LoginPage - Complete login page with built-in authentication
 *
 * Provides a full-page login experience with:
 * - Automatic Supabase authentication integration
 * - Centered, card-based layout using FormPage
 * - Status message handling
 * - Consistent footer with register link
 * - Responsive design for all screen sizes
 *
 * **IMPORTANT**: This component is framework-agnostic and does NOT handle routing internally.
 * You MUST provide an onSuccess callback to handle navigation after successful login.
 *
 * @example
 * ```tsx
 * // Next.js App Router
 * import { useRouter } from 'next/navigation';
 *
 * function Page() {
 *   const router = useRouter();
 *   return (
 *     <LoginPage
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
 *     <LoginPage
 *       onSuccess={() => navigate('/dashboard')}
 *     />
 *   );
 * }
 * ```
 *
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */

import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { FormPage } from '@qwickapps/react-framework';
import { SignUpFooterLink } from './AuthFooterLinks';
import { useAuth } from '../../hooks/useAuth';
import { LoginPageProps } from '../../types/auth-client';

export const LoginPage: React.FC<LoginPageProps> = ({
  title = "Welcome Back",
  subtitle = "Sign in to your account to continue",
  logo,
  onSuccess,
  onError,
  showSocialLogin = false,
  showForgotPassword = true,
  registerUrl = "/auth/register",
}) => {
  const { signIn, loading, error, clearError } = useAuth();
  const [localError, setLocalError] = useState<string | undefined>();

  const handleLogin = async (credentials: { email: string; password: string }) => {
    try {
      clearError();
      setLocalError(undefined);

      const result = await signIn(credentials);
      
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
          console.warn('LoginPage: No onSuccess callback provided. Login successful but cannot redirect. Please provide an onSuccess prop to handle navigation.');
        }
      }
    } catch (err) {
      const errorMessage = 'An unexpected error occurred. Please try again.';
      setLocalError(errorMessage);
      console.error('Login error:', err);
    }
  };

  // Create default footer with register link
  const footerContent = registerUrl ? (
    <SignUpFooterLink href={registerUrl} />
  ) : undefined;

  return (
    <FormPage
      title={title}
      description={subtitle}
      form={
        <LoginForm
          loading={loading}
          error={localError || error?.message}
          onLogin={handleLogin}
          showSocialLogin={showSocialLogin}
          showForgotPassword={showForgotPassword}
        />
      }
      footer={footerContent}
      coverImage={logo}
      maxWidth="sm"
      background="default"
    />
  );
};

export default LoginPage;
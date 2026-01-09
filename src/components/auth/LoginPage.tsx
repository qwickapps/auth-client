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
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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
        // Success - handle redirect
        if (onSuccess) {
          onSuccess(result.data);
        } else {
          // Default redirect to dashboard
          navigate('/dashboard');
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
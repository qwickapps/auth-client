/**
 * LoginForm - User login form component
 * 
 * Provides a complete login interface with:
 * - Email/password input fields
 * - Form validation
 * - Loading states
 * - Error handling
 * - Social login integration
 * - Forgot password link
 * 
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */

import React, { useState } from 'react';
import {
  Box,
  CircularProgress,
  Link,
  Typography
} from '@mui/material';
import { Login as LoginIcon } from '@mui/icons-material';
import { TextField, Button, GridCell, GridLayout } from '@qwickapps/react-framework';
import SocialAuthBlock from './SocialAuthBlock';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginFormProps {
  /** Loading state */
  loading?: boolean;
  /** Error message to display */
  error?: string;
  /** Login handler */
  onLogin: (credentials: LoginCredentials) => void | Promise<void>;
  /** Forgot password handler */
  onForgotPassword?: (email: string) => void | Promise<void>;
  /** Social login handler */
  onSocialLogin?: (provider: string) => void | Promise<void>;
  /** Link to registration page */
  signUpUrl?: string;
  /** Show social login options */
  showSocialLogin?: boolean;
  /** Available social providers */
  socialProviders?: Array<{
    id: string;
    name: string;
    icon?: React.ReactNode;
  }>;
  /** Show forgot password link */
  showForgotPassword?: boolean;
  /** Show remember me checkbox */
  showRememberMe?: boolean;
  /** Additional CSS class */
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  loading = false,
  onLogin,
  onForgotPassword,
  onSocialLogin,
  signUpUrl,
  showSocialLogin = false,
  socialProviders = [],
  showForgotPassword = true,
  className
}) => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: ''
  });
  const [validationErrors, setValidationErrors] = useState<Partial<LoginCredentials>>({});

  const validateForm = (): boolean => {
    const errors: Partial<LoginCredentials> = {};

    if (!credentials.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!credentials.password) {
      errors.password = 'Password is required';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await onLogin(credentials);
    } catch (err) {
      // Error handling managed by parent component
      console.error('Login error:', err);
    }
  };

  const handleForgotPassword = () => {
    if (onForgotPassword && credentials.email) {
      onForgotPassword(credentials.email);
    }
  };

  return (
    <Box className={className} component="form" onSubmit={handleSubmit} noValidate>
        <GridLayout spacing="small" columns={1}>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            value={credentials.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
            error={!!validationErrors.email}
            helperText={validationErrors.email}
            required
            disabled={loading}
            placeholder="Enter your email address"
            span={12}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            value={credentials.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
            error={!!validationErrors.password}
            helperText={validationErrors.password}
            required
            disabled={loading}
            placeholder="Enter your password"
            span={12}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : <LoginIcon />}
            sx={{ mt: 1 }}
            span="auto"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>

          {/* Forgot password link */}
          {showForgotPassword && onForgotPassword && (
            <GridCell span="grow" sx={{ textAlign: 'center', mt: 1 }}>
              <Link
                component="button"
                type="button"
                variant="body2"
                onClick={handleForgotPassword}
                disabled={loading}
                sx={{ cursor: 'pointer' }}
              >
                Forgot password?
              </Link>
            </GridCell>
          )}
        </GridLayout>

        {/* Social login section */}
        {showSocialLogin && socialProviders.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <SocialAuthBlock
              socialProviders={socialProviders}
              onSocialAuth={(provider) => onSocialLogin?.(provider)}
              loading={loading}
            />
          </Box>
        )}

        {/* Sign up link */}
        {signUpUrl && (
          <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
            Don't have an account?{' '}
            <Link href={signUpUrl}>
              Sign up
            </Link>
          </Typography>
        )}
    </Box>
  );
};

export default LoginForm;
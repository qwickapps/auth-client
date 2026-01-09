/**
 * RegisterForm - Pure user registration form component
 * 
 * Provides form interface for registration with:
 * - Email/password/confirm password fields
 * - Form validation and password strength checking
 * - Terms of service acceptance
 * - Loading states
 * - Social registration integration
 * 
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */

import React, { useState, useMemo } from 'react';
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Link,
  LinearProgress,
  Typography
} from '@mui/material';
import { PersonAdd as RegisterIcon } from '@mui/icons-material';
import { TextInputField, GridCell, GridLayout } from '@qwickapps/react-framework';
import SocialAuthBlock from './SocialAuthBlock';

export interface RegisterCredentials {
  email: string;
  password: string;
  confirmPassword: string;
  name?: string;
  acceptTerms: boolean;
}

export interface PasswordStrength {
  score: number; // 0-4
  feedback: string[];
  isValid: boolean;
}

export interface RegisterFormProps {
  /** Loading state */
  loading?: boolean;
  /** Error message to display */
  error?: string;
  /** Registration handler */
  onRegister: (credentials: Omit<RegisterCredentials, 'confirmPassword'>) => void | Promise<void>;
  /** Social registration handler */
  onSocialRegister?: (provider: string) => void | Promise<void>;
  /** Password strength validator */
  validatePasswordStrength?: (password: string) => PasswordStrength;
  /** Terms of service URL */
  termsUrl?: string;
  /** Privacy policy URL */
  privacyUrl?: string;
  /** Show social registration options */
  showSocialRegister?: boolean;
  /** Available social providers */
  socialProviders?: Array<{
    id: string;
    name: string;
    icon?: React.ReactNode;
  }>;
  /** Require name field */
  requireName?: boolean;
  /** Show name field (alias for requireName) */
  showNameField?: boolean;
  /** Additional CSS class */
  className?: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  loading = false,
  onRegister,
  onSocialRegister,
  validatePasswordStrength,
  termsUrl,
  privacyUrl,
  showSocialRegister = false,
  socialProviders = [],
  requireName = false,
  showNameField,
  className
}) => {
  // Handle showNameField as alias for requireName
  const shouldShowNameField = showNameField ?? requireName;
  
  const [credentials, setCredentials] = useState<RegisterCredentials>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    acceptTerms: false
  });
  const [validationErrors, setValidationErrors] = useState<Partial<RegisterCredentials & { terms: string }>>({});

  // Password strength validation
  const passwordStrength = useMemo(() => {
    if (!credentials.password) return null;
    return validatePasswordStrength?.(credentials.password) || {
      score: 0,
      feedback: [],
      isValid: credentials.password.length >= 8
    };
  }, [credentials.password, validatePasswordStrength]);

  const validateForm = (): boolean => {
    const errors: Partial<RegisterCredentials & { terms: string }> = {};

    // Email validation
    if (!credentials.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Name validation
    if (shouldShowNameField && !credentials.name) {
      errors.name = 'Name is required';
    }

    // Password validation
    if (!credentials.password) {
      errors.password = 'Password is required';
    } else if (passwordStrength && !passwordStrength.isValid) {
      errors.password = 'Password does not meet requirements';
    }

    // Password confirmation validation
    if (!credentials.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (credentials.password !== credentials.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    // Terms validation
    if (!credentials.acceptTerms) {
      errors.terms = 'You must accept the terms of service';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const { confirmPassword, ...registrationData } = credentials;
      await onRegister(registrationData);
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  const getPasswordStrengthColor = () => {
    if (!passwordStrength) return 'inherit';
    switch (passwordStrength.score) {
      case 0: case 1: return 'error';
      case 2: return 'warning';
      case 3: return 'info';
      case 4: return 'success';
      default: return 'inherit';
    }
  };

  return (
    <Box className={className} component="form" onSubmit={handleSubmit} noValidate>
      <GridLayout spacing="2">
        <TextInputField
          label="Email Address"
          type="email"
          value={credentials.email}
          onChange={(value) => setCredentials(prev => ({ ...prev, email: value }))}
          error={validationErrors.email}
          required
          disabled={loading}
          placeholder="Enter your email address"
        />

        {shouldShowNameField && (
          <TextInputField
            label="Full Name"
            type="text"
            value={credentials.name || ''}
            onChange={(value) => setCredentials(prev => ({ ...prev, name: value }))}
            error={validationErrors.name}
            required={shouldShowNameField}
            disabled={loading}
            placeholder="Enter your full name"
          />
        )}

        <TextInputField
          label="Password"
          type="password"
          value={credentials.password}
          onChange={(value) => setCredentials(prev => ({ ...prev, password: value }))}
          error={validationErrors.password}
          required
          disabled={loading}
          placeholder="Create a strong password"
        />
        {passwordStrength && credentials.password && (
          <Box sx={{ mt: 1 }}>
            <LinearProgress
              variant="determinate"
              value={(passwordStrength.score / 4) * 100}
              color={getPasswordStrengthColor()}
              sx={{ height: 4, borderRadius: 2 }}
            />
            <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
              Password strength: {['Very weak', 'Weak', 'Fair', 'Good', 'Strong'][passwordStrength.score]}
            </Typography>
            {passwordStrength.feedback.length > 0 && (
              <Typography variant="caption" color="text.secondary" component="div">
                {passwordStrength.feedback.map((tip, index) => (
                  <div key={index}>• {tip}</div>
                ))}
              </Typography>
            )}
          </Box>
        )}

        <TextInputField
          label="Confirm Password"
          type="password"
          value={credentials.confirmPassword}
          onChange={(value) => setCredentials(prev => ({ ...prev, confirmPassword: value }))}
          error={validationErrors.confirmPassword}
          required
          disabled={loading}
          placeholder="Confirm your password"
        />

        <FormControlLabel
          sx={{ width: '100%' }}
          control={
            <Checkbox
              checked={credentials.acceptTerms}
              onChange={(e) => setCredentials(prev => ({ ...prev, acceptTerms: e.target.checked }))}
              disabled={loading}
              color="primary"
            />
          }
          label={
            <Typography variant="body2">
              I agree to the{' '}
              {termsUrl ? (
                <Link href={termsUrl} target="_blank">Terms of Service</Link>
              ) : (
                'Terms of Service'
              )}
              {privacyUrl && (
                <>
                  {' '}and{' '}
                  <Link href={privacyUrl} target="_blank">Privacy Policy</Link>
                </>
              )}
            </Typography>
          }
        />
        {validationErrors.terms && (
          <Typography variant="caption" color="error" sx={{ display: 'block', mt: 0.5 }}>
            {validationErrors.terms}
          </Typography>
        )}

        <GridCell span={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : <RegisterIcon />}
            sx={{ mt: 1 }}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </GridCell>

        {showSocialRegister && socialProviders.length > 0 && (
          <SocialAuthBlock 
            socialProviders={socialProviders}
            onSocialAuth={(provider) => onSocialRegister?.(provider)}
            loading={loading}
          />
        )}
      </GridLayout>
    </Box>
  );
};

export default RegisterForm;
/**
 * PasswordResetConfirmForm - Pure password reset confirmation form component
 * 
 * Provides form interface for setting new password with reset token:
 * - New password input with strength validation
 * - Password confirmation
 * - Form validation
 * - Loading states
 * 
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */

import { Lock as LockIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  LinearProgress,
  Typography
} from '@mui/material';
import React, { useMemo, useState } from 'react';
import { TextInputField, GridLayout } from '@qwickapps/react-framework';

export interface PasswordResetConfirm {
  password: string;
  confirmPassword: string;
  token: string;
}

export interface PasswordStrength {
  score: number; // 0-4
  feedback: string[];
  isValid: boolean;
}

export interface PasswordResetConfirmFormProps {
  /** Reset token from URL or props */
  token?: string;
  /** Loading state */
  loading?: boolean;
  /** Error message to display */
  error?: string;
  /** Password reset confirmation handler */
  onPasswordResetConfirm: (request: PasswordResetConfirm) => void | Promise<void>;
  /** Password strength validator */
  validatePasswordStrength?: (password: string) => PasswordStrength;
  /** Sign in link */
  signInLink?: string;
  /** Sign in text */  
  signInText?: string;
  /** Additional CSS class */
  className?: string;
}

export const PasswordResetConfirmForm: React.FC<PasswordResetConfirmFormProps> = ({
  token,
  loading = false,
  onPasswordResetConfirm,
  validatePasswordStrength,
  className
}) => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [validationErrors, setValidationErrors] = useState<{
    password?: string;
    confirmPassword?: string;
  }>({});

  // Password strength validation
  const passwordStrength = useMemo(() => {
    if (!formData.password) return null;
    return validatePasswordStrength?.(formData.password) || {
      score: 0,
      feedback: [],
      isValid: formData.password.length >= 8
    };
  }, [formData.password, validatePasswordStrength]);

  const validateForm = (): boolean => {
    const errors: typeof validationErrors = {};

    // Password validation
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (passwordStrength && !passwordStrength.isValid) {
      errors.password = 'Password does not meet requirements';
    }

    // Password confirmation validation
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await onPasswordResetConfirm({
        ...formData,
        token: token || ''
      });
    } catch (err) {
      console.error('Password reset confirm error:', err);
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
          label="New Password"
          type="password"
          value={formData.password}
          onChange={(value) => setFormData(prev => ({ ...prev, password: value }))}
          error={validationErrors.password}
          required
          disabled={loading}
          placeholder="Enter your new password"
        />
        {passwordStrength && formData.password && (
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
          label="Confirm New Password"
          type="password"
          value={formData.confirmPassword}
          onChange={(value) => setFormData(prev => ({ ...prev, confirmPassword: value }))}
          error={validationErrors.confirmPassword}
          required
          disabled={loading}
          placeholder="Confirm your new password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={loading}
          startIcon={loading ? <CircularProgress size={20} /> : <LockIcon />}
          sx={{ mt: 1 }}
        >
          {loading ? 'Updating Password...' : 'Update Password'}
        </Button>
      </GridLayout>
    </Box>
  );
};

export default PasswordResetConfirmForm;
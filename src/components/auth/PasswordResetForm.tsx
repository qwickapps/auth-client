/**
 * PasswordResetForm - Pure password reset form component
 * 
 * Provides form interface for password reset with:
 * - Email input for reset request
 * - Form validation
 * - Loading states
 * 
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */

import { Email as EmailIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress
} from '@mui/material';
import React, { useState } from 'react';
import { TextInputField, GridCell, GridLayout } from '@qwickapps/react-framework';

export interface PasswordResetRequest {
  email: string;
}

export interface PasswordResetFormProps {
  /** Loading state */
  loading?: boolean;
  /** Error message to display */
  error?: string;
  /** Password reset request handler */
  onPasswordReset: (request: PasswordResetRequest) => void | Promise<void>;
  /** Back to login link */
  backToLoginLink?: string;
  /** Back to login text */
  backToLoginText?: string;
  /** Additional CSS class */
  className?: string;
}

export const PasswordResetForm: React.FC<PasswordResetFormProps> = ({
  loading = false,
  onPasswordReset,
  className
}) => {
  const [email, setEmail] = useState('');
  const [validationError, setValidationError] = useState<string>('');

  const validateForm = (): boolean => {
    if (!email) {
      setValidationError('Email is required');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setValidationError('Please enter a valid email address');
      return false;
    }

    setValidationError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await onPasswordReset({ email });
    } catch (err) {
      console.error('Password reset error:', err);
    }
  };

  return (
    <Box className={className} component="form" onSubmit={handleSubmit} noValidate>
      <GridLayout>
        <TextInputField
          label="Email Address"
          type="email"
          value={email}
          onChange={setEmail}
          error={validationError}
          required
          disabled={loading}
          placeholder="Enter your email address"
        />

        <GridCell span="grow">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : <EmailIcon />}
            sx={{ mt: 1 }}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </Button>
        </GridCell>
      </GridLayout>
    </Box>
  );
};

export default PasswordResetForm;
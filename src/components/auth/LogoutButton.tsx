/**
 * LogoutButton - Button component for user sign out
 *
 * Provides a simple button to sign out the current user with loading state
 * and error handling.
 *
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */

import React, { useState } from 'react';
import { Button, CircularProgress, Snackbar, Alert } from '@mui/material';
import { Logout as LogoutIcon } from '@mui/icons-material';
import { useAuth } from '../../hooks/useAuth';

export interface LogoutButtonProps {
  /** Button variant (default: 'outlined') */
  variant?: 'text' | 'outlined' | 'contained';
  /** Button size (default: 'medium') */
  size?: 'small' | 'medium' | 'large';
  /** Button color (default: 'primary') */
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  /** Show logout icon (default: true) */
  showIcon?: boolean;
  /** Button text (default: 'Sign Out') */
  children?: React.ReactNode;
  /** Custom icon to display */
  icon?: React.ReactNode;
  /** Full width button (default: false) */
  fullWidth?: boolean;
  /** Callback after successful logout */
  onLogoutSuccess?: () => void;
  /** Callback on logout error */
  onLogoutError?: (error: Error) => void;
  /** CSS class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({
  variant = 'outlined',
  size = 'medium',
  color = 'primary',
  showIcon = true,
  children = 'Sign Out',
  icon,
  fullWidth = false,
  onLogoutSuccess,
  onLogoutError,
  className,
  style,
}) => {
  const { signOut } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogout = async () => {
    setLoading(true);
    setError(null);

    try {
      await signOut();
      onLogoutSuccess?.();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to sign out';
      setError(errorMessage);
      onLogoutError?.(err instanceof Error ? err : new Error(errorMessage));
    } finally {
      setLoading(false);
    }
  };

  const handleCloseError = () => {
    setError(null);
  };

  const buttonIcon = icon || (showIcon ? <LogoutIcon /> : undefined);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        color={color}
        onClick={handleLogout}
        disabled={loading}
        startIcon={loading ? <CircularProgress size={20} /> : buttonIcon}
        fullWidth={fullWidth}
        className={className}
        style={style}
      >
        {loading ? 'Signing out...' : children}
      </Button>

      {/* Error notification */}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default LogoutButton;

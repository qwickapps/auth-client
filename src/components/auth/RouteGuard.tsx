/**
 * RouteGuard - Full authentication and route protection component
 * 
 * Provides comprehensive authentication-based route protection:
 * - Blocks access to protected routes for unauthenticated users
 * - Shows loading states during auth checks
 * - Redirects to login when required
 * - Supports role-based access control
 * - Customizable fallback UI
 * - Error handling for auth failures
 * 
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */

import React from 'react';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { Lock as LockIcon, Login as LoginIcon } from '@mui/icons-material';
import { useAuth } from '../../hooks/useAuth';
import { AuthError } from '@qwickapps/auth';

export interface AuthState {
  user: any | null;
  loading: boolean;
  error?: string | AuthError | null;
}

export interface RouteGuardProps {
  /** Current authentication state (optional - will fetch automatically if not provided) */
  authState?: AuthState;
  /** Content to render when authenticated */
  children: React.ReactNode;
  /** Fallback content when unauthenticated (overrides default) */
  fallback?: React.ReactNode;
  /** Loading content (overrides default) */
  loadingComponent?: React.ReactNode;
  /** Error content (overrides default) */
  errorComponent?: React.ReactNode;
  /** Required user roles for access (user needs ANY of these roles - OR logic) */
  requiredRoles?: string[];
  /** Function to check if user has required roles (default: OR logic) */
  hasRoles?: (user: any, roles: string[]) => boolean;
  /** Redirect to login handler */
  onRedirectToLogin?: () => void;
  /** Show login button in fallback */
  showLoginButton?: boolean;
  /** Custom login button text */
  loginButtonText?: string;
  /** Custom access denied message */
  accessDeniedMessage?: string;
  /** Custom class name */
  className?: string;
}

export const RouteGuard: React.FC<RouteGuardProps> = ({
  authState: providedAuthState,
  children,
  fallback,
  loadingComponent,
  errorComponent,
  requiredRoles = [],
  hasRoles = (user, roles) => {
    if (!user || !user.roles) return roles.length === 0;
    return roles.some(role => user.roles.includes(role)); // Changed to 'some' for OR logic
  },
  onRedirectToLogin,
  showLoginButton = true,
  loginButtonText = "Sign In",
  accessDeniedMessage = "You don't have permission to access this resource.",
  className
}) => {
  // Fetch auth state automatically if not provided
  const fetchedAuthState = useAuth();
  
  // Use provided auth state or fetch it automatically
  const authState = providedAuthState || {
    user: fetchedAuthState.user,
    loading: fetchedAuthState.loading,
    error: fetchedAuthState.error
  };
  
  const { user, loading, error } = authState;

  // Show loading state
  if (loading) {
    return (
      <Box className={className}>
        {loadingComponent || (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '200px',
              textAlign: 'center'
            }}
          >
            <CircularProgress size={40} sx={{ mb: 2 }} />
            <Typography variant="body1" color="text.secondary">
              Checking authentication...
            </Typography>
          </Box>
        )}
      </Box>
    );
  }

  // Show error state
  if (error) {
    return (
      <Box className={className}>
        {errorComponent || (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '200px',
              textAlign: 'center',
              p: 3
            }}
          >
            <LockIcon sx={{ fontSize: 48, color: 'error.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Authentication Error
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {typeof error === 'string' ? error : error?.message || 'An error occurred'}
            </Typography>
            {showLoginButton && onRedirectToLogin && (
              <Button
                variant="contained"
                onClick={onRedirectToLogin}
                startIcon={<LoginIcon />}
              >
                {loginButtonText}
              </Button>
            )}
          </Box>
        )}
      </Box>
    );
  }

  // Check if user is authenticated
  if (!user) {
    return (
      <Box className={className}>
        {fallback || (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
              textAlign: 'center',
              p: 3
            }}
          >
            <LockIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Authentication Required
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Please sign in to access this content.
            </Typography>
            {showLoginButton && onRedirectToLogin && (
              <Button
                variant="contained"
                size="large"
                onClick={onRedirectToLogin}
                startIcon={<LoginIcon />}
              >
                {loginButtonText}
              </Button>
            )}
          </Box>
        )}
      </Box>
    );
  }

  // Check role-based permissions
  if (requiredRoles.length > 0 && !hasRoles(user, requiredRoles)) {
    return (
      <Box className={className}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            textAlign: 'center',
            p: 3
          }}
        >
          <LockIcon sx={{ fontSize: 64, color: 'warning.main', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            Access Denied
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {accessDeniedMessage}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Required roles: {requiredRoles.join(', ')}
          </Typography>
        </Box>
      </Box>
    );
  }

  // User is authenticated and authorized - render protected content
  return <Box className={className}>{children}</Box>;
};

export default RouteGuard;
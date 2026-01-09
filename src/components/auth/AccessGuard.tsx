/**
 * AccessGuard - Lightweight component-level access control
 * 
 * Provides secure role-based access control for any UI component without
 * full authentication flow. Perfect for hiding UI elements based on user roles.
 * 
 * SECURITY FEATURES:
 * - Only secure actions (hide/message). No 'disable' action.
 * - Only explicit props accepted (no component static properties).
 * - Prevents dev console manipulation of role requirements.
 * 
 * First line of defense for UX protection. Real security enforced by:
 * - Backend API role verification  
 * - Database RLS (Row Level Security)
 * 
 * Usage:
 * ```tsx
 * // SECURE: Only explicit props (no component static properties)
 * <AccessGuard 
 *   requiresRole="admin"  // Must be explicit for security
 *   user={currentUser}
 *   onAccessDenied="hide" // or "message", custom component
 * >
 *   <AdminPanel />
 * </AccessGuard>
 * 
 * // Protect any element
 * <AccessGuard requiresRole="admin" user={user} onAccessDenied="message">
 *   <Button>Delete All Users</Button>
 * </AccessGuard>
 * ```
 * 
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */

import React from 'react';
import { Alert, Typography } from '@mui/material';

export interface User {
  /** User ID */
  id?: string;
  /** User roles array */
  roles?: string[];
  /** Any other user properties */
  [key: string]: any;
}

export type AccessDeniedAction = 
  | 'hide'           // Don't render component (default, secure)
  | 'message'        // Show access denied message
  | React.ReactNode; // Custom fallback component

export interface AccessGuardProps {
  /** Component to render if access is granted (alternative to children) */
  component?: React.ComponentType<any>;
  /** Props to pass to the component */
  componentProps?: any;
  /** Children elements to protect */
  children?: React.ReactNode;
  /** Current user object (null/undefined = not authenticated) */
  user?: User | null;
  /** Required role for access (overrides component.requiresRole) */
  requiresRole?: string;
  /** Required roles for access (user needs at least one) */
  requiresRoles?: string[];
  /** Require authentication (user must be logged in) */
  requiresAuth?: boolean;
  /** Action to take when access is denied */
  onAccessDenied?: AccessDeniedAction;
  /** Custom access denied message */
  accessDeniedMessage?: string;
  /** Callback when access is denied (for analytics/logging) */
  onAccessDeniedCallback?: (reason: string, user?: User | null) => void;
}

// Note: ComponentWithRole interface removed for security
// Role requirements must now be explicitly passed as props

export const AccessGuard: React.FC<AccessGuardProps> = ({
  component: Component,
  componentProps = {},
  children,
  user,
  requiresRole,
  requiresRoles,
  requiresAuth = false,
  onAccessDenied = 'hide',
  accessDeniedMessage,
  onAccessDeniedCallback,
}) => {
  // Determine what to render (component or children)
  const renderTarget = Component ? <Component {...componentProps} /> : children;
  
  if (!renderTarget) {
    return null;
  }

  // Use only explicit props for security (no component static properties)
  // This prevents manipulation via browser dev console
  const authRequired = requiresAuth || requiresRole || requiresRoles;
  
  // Check authentication
  if (authRequired && !user) {
    onAccessDeniedCallback?.('not_authenticated', user);
    return handleAccessDenied('not_authenticated', 'Authentication required');
  }

  // Check role requirements
  if ((requiresRole || requiresRoles) && user) {
    const userRoles = user.roles || [];
    
    const hasRequiredRole = () => {
      if (requiresRole && !userRoles.includes(requiresRole)) {
        return false;
      }
      
      if (requiresRoles && !requiresRoles.some(role => userRoles.includes(role))) {
        return false;
      }
      
      return true;
    };

    if (!hasRequiredRole()) {
      const roleInfo = requiresRole || requiresRoles?.join(' or ') || '';
      onAccessDeniedCallback?.('insufficient_roles', user);
      return handleAccessDenied('insufficient_roles', `Required role(s): ${roleInfo}`);
    }
  }

  // Access granted - render the target
  return <>{renderTarget}</>;

  // Helper function to handle different access denied actions
  function handleAccessDenied(reason: string, defaultMessage: string) {
    // Hide (default) - don't render anything
    if (onAccessDenied === 'hide') {
      return null;
    }

    // Note: 'disable' action removed for security reasons
    // Users can re-enable disabled elements via browser dev tools

    // Message - show access denied message
    if (onAccessDenied === 'message') {
      return (
        <Alert severity="warning" sx={{ my: 1 }}>
          <Typography variant="body2">
            {accessDeniedMessage || defaultMessage}
          </Typography>
        </Alert>
      );
    }

    // Custom component
    if (React.isValidElement(onAccessDenied)) {
      return <>{onAccessDenied}</>;
    }

    // Fallback to hide
    return null;
  }
};

/**
 * Higher-order component for role-based protection - REMOVED for security
 * 
 * This HOC was removed because it sets static properties on components,
 * which can be manipulated via browser dev console.
 * 
 * Use explicit AccessGuard wrapper instead:
 * 
 * Instead of:
 * const ProtectedComponent = withAccessGuard(MyComponent, "admin");
 * 
 * Use:
 * <AccessGuard requiresRole="admin" user={user}>
 *   <MyComponent />
 * </AccessGuard>
 */

export default AccessGuard;
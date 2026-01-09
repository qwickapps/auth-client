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
export declare const RouteGuard: React.FC<RouteGuardProps>;
export default RouteGuard;

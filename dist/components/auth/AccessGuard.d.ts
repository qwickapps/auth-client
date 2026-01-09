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
export interface User {
    /** User ID */
    id?: string;
    /** User roles array */
    roles?: string[];
    /** Any other user properties */
    [key: string]: any;
}
export type AccessDeniedAction = 'hide' | 'message' | React.ReactNode;
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
export declare const AccessGuard: React.FC<AccessGuardProps>;
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

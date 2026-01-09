/**
 * AuthRoutes - Automatic auth routing component
 *
 * Provides all authentication routes in a single component
 *
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */
import React from 'react';
export interface AuthRoutesProps {
    /**
     * Child routes - can be Route or AuthRoute components
     */
    children: React.ReactNode;
    /**
     * Enable default authentication routes (login, register, etc.)
     */
    enableDefaultAuthRoutes?: boolean;
    /**
     * App name to display in auth pages (when default auth routes enabled)
     */
    appName?: string;
    /**
     * Base path for default auth routes (default: 'auth')
     */
    authBasePath?: string;
    /**
     * Social providers to enable for default auth routes
     */
    socialProviders?: Array<{
        id: string;
        name: string;
        icon?: React.ReactNode;
    }>;
    /**
     * Show social login/register buttons for default auth routes
     */
    showSocialAuth?: boolean;
}
/**
 * AuthRoutes component that transforms AuthRoute to Route + RouteGuard
 *
 * @example
 * ```tsx
 * <AuthRoutes enableDefaultAuthRoutes={true}>
 *   <AuthRoute path="/dashboard" element={<RouteGuard><Dashboard /></RouteGuard>} />
 *   <Route path="/public" element={<PublicPage />} />
 * </AuthRoutes>
 * ```
 */
declare const AuthRoutes: React.FC<AuthRoutesProps>;
export default AuthRoutes;

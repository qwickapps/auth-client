/**
 * AuthRoutes - Automatic auth routing component
 * 
 * Provides all authentication routes in a single component
 * 
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import PasswordResetPage from './PasswordResetPage';
import { useQwickApp } from '@qwickapps/react-framework';


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
  socialProviders?: Array<{ id: string; name: string; icon?: React.ReactNode }>;

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
const AuthRoutes: React.FC<AuthRoutesProps> = ({
  children,
  enableDefaultAuthRoutes = false,
  authBasePath = 'auth',
  socialProviders = [],
  showSocialAuth = false,
}) => {

  const { logo } = useQwickApp();

  // Add default auth routes if enabled
  const defaultAuthRoutes = enableDefaultAuthRoutes ? [
    <Route
      key="auth-login"
      path={`${authBasePath}/login`}
      element={
        <LoginPage
          title="Welcome Back!"
          subtitle="Sign in to continue"
          logo={logo}
          showSocialLogin={showSocialAuth}
          registerUrl={`/${authBasePath}/register`}
        />
      }
    />,
    <Route
      key="auth-register"
      path={`${authBasePath}/register`}
      element={
        <RegisterPage
          logo={logo}
          title="Create Account"
          subtitle="Join us today"
          showSocialRegister={showSocialAuth}
          socialProviders={socialProviders}
          signInUrl={`/${authBasePath}/login`}
          showNameField={true}
          onRegister={() => { }}
        />
      }
    />,
    <Route
      key="auth-forgot"
      path={`${authBasePath}/forgot-password`}
      element={
        <PasswordResetPage
          logo={logo}
          title="Reset Password"
          subtitle="Enter your email to reset your password"
          backToLoginLink={`/${authBasePath}/login`}
          onPasswordReset={() => { }}
        />
      }
    />
  ] : [];

  return (
    <Routes>
      {children}
      {defaultAuthRoutes}
    </Routes>
  );
};

export default AuthRoutes;
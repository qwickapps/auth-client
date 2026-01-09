/**
 * React Authentication Hooks and Context for QwickApps
 *
 * Provides authentication state, actions, and role-based access utilities for React applications.
 *
 * Copyright © 2025 QwickApps.com. All rights reserved.
 * Proprietary and confidential.
 */
import { AuthContextValue, AuthProviderProps } from '../types/auth-client';
/**
 * AuthProvider component
 *
 * Provides authentication context and state management for child components.
 * Injects a custom auth service client and exposes authentication actions and state.
 *
 * @param {AuthProviderProps} props - Provider props including children, authServiceClient, and optional callbacks.
 * @returns {JSX.Element} React context provider for authentication.
 */
export declare function AuthProvider({ children, authServiceClient, onAuthStateChange, onError }: AuthProviderProps): import("react/jsx-runtime").JSX.Element;
/**
 * useAuth hook
 *
 * Returns the current authentication context value, including user, session, loading, error, and auth actions.
 * Must be used within an AuthProvider.
 *
 * @returns {AuthContextValue} Authentication context value.
 * @throws {Error} If used outside an AuthProvider.
 */
export declare function useAuth(): AuthContextValue;
/**
 * useIsAuthenticated hook
 *
 * Returns true if a user is currently authenticated, false otherwise.
 *
 * @returns {boolean} Authentication status.
 */
export declare function useIsAuthenticated(): boolean;
/**
 * useHasRole hook
 *
 * Checks if the current user has a specific role.
 *
 * @param {string} role - Role to check.
 * @returns {boolean} True if user has the role, false otherwise.
 */
export declare function useHasRole(role: string): boolean;
/**
 * useHasAnyRole hook
 *
 * Checks if the current user has any of the specified roles.
 *
 * @param {string[]} roles - Array of roles to check.
 * @returns {boolean} True if user has any of the roles, false otherwise.
 */
export declare function useHasAnyRole(roles: string[]): boolean;

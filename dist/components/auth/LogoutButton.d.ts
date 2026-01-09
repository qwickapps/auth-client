/**
 * LogoutButton - Button component for user sign out
 *
 * Provides a simple button to sign out the current user with loading state
 * and error handling.
 *
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */
import React from 'react';
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
export declare const LogoutButton: React.FC<LogoutButtonProps>;
export default LogoutButton;

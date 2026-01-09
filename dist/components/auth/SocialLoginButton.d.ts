/**
 * SocialLoginButton - Customizable social authentication button
 *
 * Provides a consistent interface for social login providers:
 * - Pre-configured popular providers (Google, GitHub, etc.)
 * - Custom provider support
 * - Consistent styling and loading states
 * - Accessible and responsive design
 *
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */
import React from 'react';
import { SxProps, Theme } from '@mui/material';
declare const SOCIAL_PROVIDERS: {
    readonly google: {
        readonly name: "Google";
        readonly color: "#db4437";
        readonly backgroundColor: "#ffffff";
        readonly textColor: "#757575";
        readonly borderColor: "#dadce0";
    };
    readonly github: {
        readonly name: "GitHub";
        readonly color: "#333333";
        readonly backgroundColor: "#ffffff";
        readonly textColor: "#333333";
        readonly borderColor: "#dadce0";
    };
    readonly facebook: {
        readonly name: "Facebook";
        readonly color: "#1877f2";
        readonly backgroundColor: "#1877f2";
        readonly textColor: "#ffffff";
        readonly borderColor: "#1877f2";
    };
    readonly twitter: {
        readonly name: "Twitter";
        readonly color: "#1da1f2";
        readonly backgroundColor: "#ffffff";
        readonly textColor: "#1da1f2";
        readonly borderColor: "#1da1f2";
    };
    readonly apple: {
        readonly name: "Apple";
        readonly color: "#000000";
        readonly backgroundColor: "#000000";
        readonly textColor: "#ffffff";
        readonly borderColor: "#000000";
    };
    readonly microsoft: {
        readonly name: "Microsoft";
        readonly color: "#0078d4";
        readonly backgroundColor: "#ffffff";
        readonly textColor: "#0078d4";
        readonly borderColor: "#0078d4";
    };
    readonly linkedin: {
        readonly name: "LinkedIn";
        readonly color: "#0077b5";
        readonly backgroundColor: "#0077b5";
        readonly textColor: "#ffffff";
        readonly borderColor: "#0077b5";
    };
};
export type SocialProvider = keyof typeof SOCIAL_PROVIDERS;
export interface SocialLoginButtonProps {
    /** Social provider (predefined) or custom provider name */
    provider: SocialProvider | string;
    /** Click handler */
    onClick: (provider: string) => void | Promise<void>;
    /** Loading state */
    loading?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Full width button */
    fullWidth?: boolean;
    /** Button size */
    size?: 'small' | 'medium' | 'large';
    /** Custom icon */
    icon?: React.ReactNode;
    /** Custom text (overrides default "Continue with {Provider}") */
    children?: React.ReactNode;
    /** Custom styling */
    sx?: SxProps<Theme>;
    /** Custom class name */
    className?: string;
    /** Button variant */
    variant?: 'contained' | 'outlined' | 'text';
    /** Custom colors for unknown providers */
    customColors?: {
        backgroundColor?: string;
        textColor?: string;
        borderColor?: string;
    };
}
export declare const SocialLoginButton: React.FC<SocialLoginButtonProps>;
export default SocialLoginButton;

/**
 * SocialAuthBlock - Reusable social authentication UI component
 *
 * Provides standardized social auth layout with:
 * - Divider with "or continue with" text
 * - Grid layout of social provider buttons
 * - Loading state support
 * - Consistent styling with framework
 *
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */
import React from 'react';
export interface SocialProvider {
    id: string;
    name: string;
    icon?: React.ReactNode;
}
export interface SocialAuthBlockProps {
    /** Available social providers */
    socialProviders: SocialProvider[];
    /** Social auth handler */
    onSocialAuth: (provider: string) => void | Promise<void>;
    /** Loading state */
    loading?: boolean;
    /** Custom divider text (default: "or continue with") */
    dividerText?: string;
    /** Button variant */
    buttonVariant?: 'text' | 'outlined' | 'contained';
    /** Whether to show the divider */
    showDivider?: boolean;
}
export declare const SocialAuthBlock: React.FC<SocialAuthBlockProps>;
export default SocialAuthBlock;

/**
 * AuthFooterLinks - Reusable auth form footer links component
 *
 * Provides standardized footer links for auth forms:
 * - "Don't have an account? Sign up" pattern
 * - "Already have an account? Sign in" pattern
 * - Consistent styling and layout
 *
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */
import React from 'react';
export interface AuthFooterLinksProps {
    /** Primary text before the link */
    text: string;
    /** Link text */
    linkText: string;
    /** Link URL or href */
    href?: string;
    /** Custom link click handler */
    onClick?: () => void;
    /** Additional CSS styling */
    sx?: object;
}
export declare const AuthFooterLinks: React.FC<AuthFooterLinksProps>;
export declare const SignUpFooterLink: React.FC<{
    href?: string;
    onClick?: () => void;
    sx?: object;
}>;
export declare const SignInFooterLink: React.FC<{
    href?: string;
    onClick?: () => void;
    sx?: object;
}>;
export default AuthFooterLinks;

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
import { Typography, Link } from '@mui/material';

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

export const AuthFooterLinks: React.FC<AuthFooterLinksProps> = ({
  text,
  linkText,
  href,
  onClick,
  sx = {},
}) => {
  return (
    <Typography 
      variant="body2" 
      sx={{ 
        textAlign: 'center', 
        mt: 2,
        ...sx 
      }}
    >
      {text}{' '}
      <Link 
        href={href}
        onClick={onClick}
        sx={{ cursor: onClick ? 'pointer' : undefined }}
      >
        {linkText}
      </Link>
    </Typography>
  );
};

// Convenience components for common patterns
export const SignUpFooterLink: React.FC<{ href?: string; onClick?: () => void; sx?: object }> = ({ 
  href, 
  onClick,
  sx 
}) => (
  <AuthFooterLinks 
    text="Don't have an account?" 
    linkText="Sign up" 
    href={href}
    onClick={onClick}
    sx={sx}
  />
);

export const SignInFooterLink: React.FC<{ href?: string; onClick?: () => void; sx?: object }> = ({ 
  href, 
  onClick,
  sx 
}) => (
  <AuthFooterLinks 
    text="Already have an account?" 
    linkText="Sign in" 
    href={href}
    onClick={onClick}
    sx={sx}
  />
);

export default AuthFooterLinks;
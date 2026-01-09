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
import { Button, CircularProgress, SxProps, Theme } from '@mui/material';

// Common social provider configurations
const SOCIAL_PROVIDERS = {
  google: {
    name: 'Google',
    color: '#db4437',
    backgroundColor: '#ffffff',
    textColor: '#757575',
    borderColor: '#dadce0'
  },
  github: {
    name: 'GitHub',
    color: '#333333',
    backgroundColor: '#ffffff',
    textColor: '#333333',
    borderColor: '#dadce0'
  },
  facebook: {
    name: 'Facebook',
    color: '#1877f2',
    backgroundColor: '#1877f2',
    textColor: '#ffffff',
    borderColor: '#1877f2'
  },
  twitter: {
    name: 'Twitter',
    color: '#1da1f2',
    backgroundColor: '#ffffff',
    textColor: '#1da1f2',
    borderColor: '#1da1f2'
  },
  apple: {
    name: 'Apple',
    color: '#000000',
    backgroundColor: '#000000',
    textColor: '#ffffff',
    borderColor: '#000000'
  },
  microsoft: {
    name: 'Microsoft',
    color: '#0078d4',
    backgroundColor: '#ffffff',
    textColor: '#0078d4',
    borderColor: '#0078d4'
  },
  linkedin: {
    name: 'LinkedIn',
    color: '#0077b5',
    backgroundColor: '#0077b5',
    textColor: '#ffffff',
    borderColor: '#0077b5'
  }
} as const;

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

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  provider,
  onClick,
  loading = false,
  disabled = false,
  fullWidth = true,
  size = 'large',
  icon,
  children,
  sx,
  className,
  variant = 'outlined',
  customColors
}) => {
  const isKnownProvider = provider in SOCIAL_PROVIDERS;
  const providerConfig = isKnownProvider 
    ? SOCIAL_PROVIDERS[provider as SocialProvider]
    : {
        name: typeof provider === 'string' ? provider.charAt(0).toUpperCase() + provider.slice(1) : 'Unknown',
        color: customColors?.textColor || '#333333',
        backgroundColor: customColors?.backgroundColor || '#ffffff',
        textColor: customColors?.textColor || '#333333',
        borderColor: customColors?.borderColor || '#dadce0'
      };

  const buttonText = children || `Continue with ${providerConfig.name}`;

  const handleClick = async () => {
    if (!loading && !disabled) {
      await onClick(provider);
    }
  };

  // Dynamic styling based on provider and variant
  const getButtonStyles = (): SxProps<Theme> => {
    const baseStyles: SxProps<Theme> = {
      borderRadius: 1,
      textTransform: 'none',
      fontWeight: 500,
      py: variant === 'outlined' ? 1.5 : 1.25,
      ...sx
    };

    if (variant === 'outlined') {
      return {
        ...baseStyles,
        borderColor: providerConfig.borderColor,
        color: providerConfig.textColor,
        backgroundColor: providerConfig.backgroundColor,
        '&:hover': {
          borderColor: providerConfig.color,
          backgroundColor: providerConfig.backgroundColor,
          opacity: 0.8
        }
      };
    } else if (variant === 'contained') {
      return {
        ...baseStyles,
        backgroundColor: providerConfig.backgroundColor,
        color: providerConfig.textColor,
        border: `1px solid ${providerConfig.borderColor}`,
        '&:hover': {
          backgroundColor: providerConfig.color,
          opacity: 0.9
        }
      };
    }

    return baseStyles;
  };

  return (
    <Button
      fullWidth={fullWidth}
      variant={variant}
      size={size}
      disabled={disabled || loading}
      onClick={handleClick}
      startIcon={loading ? <CircularProgress size={20} /> : icon}
      sx={getButtonStyles()}
      className={className}
    >
      {buttonText}
    </Button>
  );
};

export default SocialLoginButton;
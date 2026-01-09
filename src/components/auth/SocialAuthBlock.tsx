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
import {
  Button,
  Divider,
  Typography,
} from '@mui/material';
import { GridLayout } from '@qwickapps/react-framework';

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

export const SocialAuthBlock: React.FC<SocialAuthBlockProps> = ({
  socialProviders,
  onSocialAuth,
  loading = false,
  dividerText = 'or continue with',
  buttonVariant = 'outlined',
  showDivider = true,
}) => {
  if (socialProviders.length === 0) {
    return null;
  }

  return (
    <GridLayout sx={{ width: '100%' }}>
      {showDivider && (
        <Divider sx={{ my: 2, width: '100%' }}>
          <Typography variant="body2" color="text.secondary">
            {dividerText}
          </Typography>
        </Divider>
      )}

      {socialProviders.map((provider) => (
        <Button
          key={provider.id}
          fullWidth
          variant={buttonVariant}
          onClick={() => onSocialAuth(provider.id)}
          disabled={loading}
          startIcon={provider.icon}
        >
          Continue with {provider.name}
        </Button>
      ))}
    </GridLayout>
  );
};

export default SocialAuthBlock;
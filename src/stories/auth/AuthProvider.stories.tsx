/**
 * AuthProvider Stories
 * 
 * Demonstrates basic authentication provider functionality
 */

import type { Meta, StoryObj } from '@storybook/react';
import { 
  Button, 
  Card, 
  Typography, 
  Box
} from '@mui/material';

import { AuthProvider, useAuth, type AuthServiceClient } from '../../index';

// Mock auth service client for stories
const mockAuthServiceClient: AuthServiceClient = {
  getCurrentSession: () => Promise.resolve(null),
  signIn: () => Promise.resolve({ data: null, error: null }),
  signUp: () => Promise.resolve({ data: null, error: null }),
  signOut: () => Promise.resolve({ data: null, error: null }),
  resetPassword: () => Promise.resolve({ data: null, error: null }),
  updateProfile: () => Promise.resolve({ data: null, error: null }),
  refreshSession: () => Promise.resolve({ data: null, error: null }),
  signInWithProvider: () => Promise.resolve({ data: null, error: null }),
  onAuthStateChange: () => () => {},
  getHeaders: () => ({ 'Content-Type': 'application/json' })
};

// Demo component that uses auth context
function AuthDemo() {
  const auth = useAuth();
  
  return (
    <Card sx={{ p: 3, maxWidth: 400 }}>
      <Typography variant="h6" gutterBottom>
        Auth State
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography>
          Loading: {auth.loading ? 'Yes' : 'No'}
        </Typography>
        <Typography>
          User: {auth.user ? `${auth.user.email}` : 'None'}
        </Typography>
        <Typography>
          Initialized: {auth.initialized ? 'Yes' : 'No'}
        </Typography>
        <Typography>
          Error: {auth.error?.message || 'None'}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <Button 
          variant="outlined" 
          onClick={() => auth.signIn({ email: 'test@example.com', password: 'password' })}
        >
          Sign In
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => auth.signOut()}
        >
          Sign Out
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => auth.clearError()}
        >
          Clear Error
        </Button>
      </Box>
    </Card>
  );
}

const meta: Meta<typeof AuthProvider> = {
  title: 'Auth/AuthProvider',
  component: AuthProvider,
  parameters: {
    docs: {
      description: {
        component: `
**AuthProvider** provides authentication context and state management.

**Key Features:**
- 🔧 **Context Provider**: Centralized auth state management
- 🎣 **useAuth Hook**: Access auth state and methods anywhere
- ⚡ **Async Actions**: Sign in, sign out, register, etc.
- 🛡️ **Error Handling**: Centralized error state
        `,
      },
    },
  },
  argTypes: {
    authServiceClient: {
      description: 'Auth service client implementation',
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <AuthProvider {...args}>
      <AuthDemo />
    </AuthProvider>
  ),
  args: {
    authServiceClient: mockAuthServiceClient,
  },
};

export const WithErrorHandling: Story = {
  render: (args) => {
    const errorClient: AuthServiceClient = {
      ...mockAuthServiceClient,
      signIn: () => Promise.resolve({ 
        data: null, 
        error: { type: 'INVALID_CREDENTIALS' as const, message: 'Invalid email or password' } 
      }),
    };

    return (
      <AuthProvider {...args} authServiceClient={errorClient}>
        <AuthDemo />
      </AuthProvider>
    );
  },
  args: {
    authServiceClient: mockAuthServiceClient,
  },
};
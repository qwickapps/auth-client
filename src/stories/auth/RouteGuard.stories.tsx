/**
 * RouteGuard Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { RouteGuard } from '../../components/auth/RouteGuard';
import { Typography, Box } from '@mui/material';

const meta: Meta<typeof RouteGuard> = {
  title: 'Auth/RouteGuard',
  component: RouteGuard,
  parameters: {
    docs: {
      description: {
        component: `
**RouteGuard** provides full authentication flow and route protection.

**Key Features:**
- Loading states during authentication checks
- Login redirect for unauthenticated users  
- Error handling for authentication failures
- Role-based access control after authentication
- Customizable fallback UI

**Perfect For:**
- Protecting entire routes and pages
- Full authentication workflow
- Login/logout flow management
        `
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock protected content
const ProtectedContent = () => (
  <Box sx={{ p: 4, border: '2px dashed #ccc', borderRadius: 2, textAlign: 'center' }}>
    <Typography variant="h5" color="success.main" gutterBottom>
      🎉 Protected Content
    </Typography>
    <Typography variant="body1">
      This content is only visible to authenticated users!
    </Typography>
  </Box>
);

// Mock user objects
const mockUser = {
  id: '1',
  email: 'user@example.com',
  emailVerified: true,
  name: 'John Doe',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const mockAdminUser = {
  id: '2',
  email: 'admin@example.com',
  emailVerified: true,
  name: 'Admin User',
  createdAt: new Date(),
  updatedAt: new Date(),
  metadata: { roles: ['admin'] },
};

export const Loading: Story = {
  args: {
    authState: {
      user: null,
      loading: true,
    },
    onRedirectToLogin: () => {alert('Redirecting to login...'); },
    children: <ProtectedContent />,
  },
};

export const Unauthenticated: Story = {
  args: {
    authState: {
      user: null,
      loading: false,
    },
    onRedirectToLogin: () => {alert('Redirecting to login...'); },
    children: <ProtectedContent />,
  },
};

export const Authenticated: Story = {
  args: {
    authState: {
      user: mockUser,
      loading: false,
    },
    children: <ProtectedContent />,
  },
};

export const WithError: Story = {
  args: {
    authState: {
      user: null,
      loading: false,
      error: 'Session expired. Please sign in again.',
    },
    onRedirectToLogin: () => {alert('Redirecting to login...'); },
    children: <ProtectedContent />,
  },
};

export const RoleBasedAccess: Story = {
  args: {
    authState: {
      user: mockUser,
      loading: false,
    },
    requiredRoles: ['admin'],
    onRedirectToLogin: () => {alert('Redirecting to login...'); },
    children: <ProtectedContent />,
  },
};

export const RoleBasedAccessGranted: Story = {
  args: {
    authState: {
      user: mockAdminUser,
      loading: false,
    },
    requiredRoles: ['admin'],
    children: <ProtectedContent />,
  },
};

export const CustomFallback: Story = {
  args: {
    authState: {
      user: null,
      loading: false,
    },
    fallback: (
      <Box sx={{ p: 4, textAlign: 'center', bgcolor: 'warning.light', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Custom Fallback UI
        </Typography>
        <Typography variant="body2">
          This is a custom unauthenticated state component.
        </Typography>
      </Box>
    ),
    children: <ProtectedContent />,
  },
};

export const NoLoginButton: Story = {
  args: {
    authState: {
      user: null,
      loading: false,
    },
    showLoginButton: false,
    children: <ProtectedContent />,
  },
};

export const CustomMessages: Story = {
  args: {
    authState: {
      user: mockUser,
      loading: false,
    },
    requiredRoles: ['admin', 'moderator'],
    accessDeniedMessage: 'You need admin or moderator privileges to access this feature.',
    children: <ProtectedContent />,
  },
};
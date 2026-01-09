/**
 * AccessGuard Storybook Stories
 * 
 * Interactive demonstrations of component-level authentication and role protection
 * 
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { 
  Button, 
  Card, 
  Typography, 
  Box, 
  Chip,
  Alert
} from '@mui/material';
import { 
  Delete as DeleteIcon,
  Settings as SettingsIcon,
  AdminPanelSettings as AdminIcon
} from '@mui/icons-material';

import { AccessGuard, type User, type AccessDeniedAction } from '../../components/auth';

const meta: Meta<typeof AccessGuard> = {
  title: 'Auth/AccessGuard',
  component: AccessGuard,
  parameters: {
    docs: {
      description: {
        component: `
**AccessGuard** provides secure, lightweight component-level authentication and role-based access control.

**Key Features:**
- 🔐 Authentication checking (is user logged in?)
- 👥 Role-based access control with flexible matching
- 🔒 **Secure-only actions**: hide (default) or message - no 'disable' for security
- 🧩 Works with any component or JSX element
- ⚡ Component-level role declarations via static properties
- 🔄 Automatic detection of component role requirements

**Security First:**
- No 'disable' action - users can re-enable via dev tools
- Only renders what users should see (hide) or shows access messages
- First line of defense - real security enforced by backend API & database RLS

**Perfect For:**
- Hiding admin buttons from regular users
- Showing role-specific UI elements conditionally
- Protecting sensitive content inline with secure rendering
- Component-level security without full route guards
        `
      }
    }
  },
  argTypes: {
    user: {
      control: 'object',
      description: 'Current user object (null = not logged in)'
    },
    requiresRole: {
      control: 'text',
      description: 'Required role for access'
    },
    requiresRoles: {
      control: 'object',
      description: 'Array of roles (user needs at least one)'
    },
    requiresAuth: {
      control: 'boolean',
      description: 'Require user to be authenticated'
    },
    onAccessDenied: {
      control: 'select',
      options: ['hide', 'message'],
      description: 'Secure action when access is denied'
    },
    accessDeniedMessage: {
      control: 'text',
      description: 'Custom access denied message'
    }
  }
};

export default meta;
type Story = StoryObj<typeof AccessGuard>;

// Sample components for demonstration
const AdminButton = () => (
  <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
    Delete All Users
  </Button>
);
// Note: No static properties for security! Role passed via AccessGuard props

const ModeratorButton = () => (
  <Button variant="outlined" color="warning" startIcon={<SettingsIcon />}>
    Moderate Content
  </Button>
);
// Note: No static properties for security! Roles passed via AccessGuard props

// Mock users for testing
const guestUser = null;
const regularUser: User = { id: '1', roles: ['user'] };
const moderatorUser: User = { id: '2', roles: ['user', 'moderator'] };
const adminUser: User = { id: '3', roles: ['user', 'admin'] };

/**
 * Basic component protection with role requirements
 * Shows how AccessGuard uses explicit role requirements (secure)
 */
export const BasicRoleProtection: Story = {
  args: {
    requiresRole: 'admin',
    user: regularUser,
    onAccessDenied: 'message'
  },
  render: (args) => (
    <Box>
      <Typography variant="h6" gutterBottom>
        🔒 Admin Button (explicit "admin" role requirement)
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Current user: {args.user ? `User with roles: [${args.user.roles?.join(', ')}]` : 'Guest (not logged in)'}
      </Typography>
      <Typography variant="caption" color="warning.main" sx={{ mb: 2, display: 'block' }}>
        💡 Role requirement passed explicitly via requiresRole prop (secure)
      </Typography>
      <AccessGuard {...args}>
        <AdminButton />
      </AccessGuard>
    </Box>
  )
};

/**
 * Demonstrates different access denied actions
 * Shows the three built-in ways to handle access denial
 */
export const AccessDeniedActions: Story = {
  render: () => {
    const actions: { label: string; action: AccessDeniedAction; description: string; icon: string }[] = [
      { label: 'Hide (default)', action: 'hide', description: 'Component disappears completely (secure)', icon: '👻' },
      { label: 'Show Message', action: 'message', description: 'Shows custom access denied message', icon: '💬' },
    ];

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          🔒 Secure Access Denied Actions
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Regular user (roles: [user]) trying to access admin-only button - only secure actions available
        </Typography>
        
        {actions.map(({ label, action, description, icon }) => (
          <Card key={label} sx={{ mb: 2, p: 2, border: '1px solid', borderColor: 'divider' }}>
            <Typography variant="subtitle1" gutterBottom>
              {icon} {label}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {description}
            </Typography>
            <AccessGuard
              requiresRole="admin"
              user={regularUser}
              onAccessDenied={action}
              accessDeniedMessage="You need admin privileges for this action"
            >
              <AdminButton />
            </AccessGuard>
          </Card>
        ))}
      </Box>
    );
  }
};

/**
 * Authentication checking (logged in vs guest)
 * Basic auth requirement without specific roles
 */
export const AuthenticationCheck: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        🔐 Authentication Checking
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Content that requires any logged-in user (no specific roles)
      </Typography>
      
      <Card sx={{ mb: 2, p: 2, bgcolor: 'error.50' }}>
        <Typography variant="subtitle1" gutterBottom sx={{ color: 'error.main' }}>
          ❌ Guest User (not logged in)
        </Typography>
        <AccessGuard
          requiresAuth
          user={guestUser}
          onAccessDenied="message"
          accessDeniedMessage="Please log in to continue"
        >
          <Button variant="contained" startIcon={<SettingsIcon />}>User Dashboard</Button>
        </AccessGuard>
      </Card>

      <Card sx={{ mb: 2, p: 2, bgcolor: 'success.50' }}>
        <Typography variant="subtitle1" gutterBottom sx={{ color: 'success.main' }}>
          ✅ Logged In User
        </Typography>
        <AccessGuard
          requiresAuth
          user={regularUser}
          onAccessDenied="message"
        >
          <Button variant="contained" startIcon={<SettingsIcon />}>User Dashboard</Button>
        </AccessGuard>
      </Card>
    </Box>
  )
};

/**
 * Focused demo of disabled action with click alerts
 * Shows how disabled components prevent interactions while maintaining visual feedback
 */
export const SecureActionsShowcase: Story = {
  render: () => {
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          🔒 Secure Actions Showcase
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          AccessGuard only uses secure actions - no 'disable' since users can re-enable via dev tools
        </Typography>
        
        <Alert severity="warning" sx={{ mb: 3 }}>
          <strong>🔒 Security Note:</strong> 'Disable' action removed for security. 
          Users can easily re-enable disabled buttons via browser dev tools, making it ineffective for access control.
        </Alert>
        
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Card sx={{ p: 2, flex: 1, bgcolor: 'success.50', border: '1px solid', borderColor: 'success.main' }}>
            <Typography variant="subtitle1" gutterBottom sx={{ color: 'success.main' }}>
              ✅ Admin User - Button Rendered
            </Typography>
            <AccessGuard
              requiresRole="admin"
              user={adminUser}
              onAccessDenied="hide"
            >
              <AdminButton />
            </AccessGuard>
            <Typography variant="caption" color="success.main" sx={{ mt: 1, display: 'block' }}>
              User has admin role - button renders normally
            </Typography>
          </Card>
          
          <Card sx={{ p: 2, flex: 1, bgcolor: 'error.50', border: '2px solid', borderColor: 'error.main' }}>
            <Typography variant="subtitle1" gutterBottom sx={{ color: 'error.main' }}>
              🚫 Regular User - Button Hidden
            </Typography>
            <AccessGuard
              requiresRole="admin"
              user={regularUser}
              onAccessDenied="hide"
            >
              <AdminButton />
            </AccessGuard>
            <Typography variant="caption" color="error.main" sx={{ mt: 1, display: 'block', fontWeight: 'bold' }}>
              No admin role - button completely hidden (secure)
            </Typography>
          </Card>
        </Box>
        
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          💬 Message Action Alternative
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Instead of disabling, show an access denied message:
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Card sx={{ p: 2, flex: 1 }}>
            <Typography variant="subtitle1" gutterBottom>
              Message Action Demo
            </Typography>
            <AccessGuard
              requiresRole="admin"
              user={regularUser}
              onAccessDenied="message"
              accessDeniedMessage="Admin privileges required for this action"
            >
              <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => alert('Admin action executed!')}>
                Delete All Users
              </Button>
            </AccessGuard>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
              Shows clear feedback without revealing the protected action
            </Typography>
          </Card>
        </Box>
        
        <Alert severity="success" sx={{ mb: 2 }}>
          <strong>🎯 Secure Design Principles:</strong>
          <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
            <li><strong>Hide:</strong> Don't render unauthorized components at all</li>
            <li><strong>Message:</strong> Show clear access denied feedback</li>
            <li><strong>No Disable:</strong> Prevents dev tools bypass attempts</li>
            <li><strong>Backend Enforcement:</strong> Real security via API + database RLS</li>
          </ul>
        </Alert>
      </Box>
    );
  }
};

/**
 * Multiple role options (OR logic)
 */
export const MultipleRoleOptions: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Multiple Role Requirements (OR Logic)
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Button requires "admin" OR "moderator" role
      </Typography>
      
      {[guestUser, regularUser, moderatorUser, adminUser].map((user, index) => (
        <Card key={index} sx={{ mb: 2, p: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            {user ? `User with roles: [${user.roles?.join(', ')}]` : 'Guest (not logged in)'}
          </Typography>
          <AccessGuard
            requiresRoles={["admin", "moderator"]}
            user={user}
            onAccessDenied="message"
          >
            <ModeratorButton />
          </AccessGuard>
        </Card>
      ))}
    </Box>
  )
};

/**
 * Protecting arbitrary JSX elements
 */
export const ProtectAnyElement: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Protecting Any JSX Element
      </Typography>
      
      <Card sx={{ p: 3 }}>
        <Typography variant="body1" paragraph>
          This is public content everyone can see.
        </Typography>
        
        <AccessGuard
          requiresRole="admin"
          user={regularUser}
          onAccessDenied="hide"
        >
          <Alert severity="error" sx={{ my: 2 }}>
            🔒 This sensitive admin information is hidden from regular users
          </Alert>
        </AccessGuard>
        
        <AccessGuard
          requiresRole="admin"
          user={regularUser}
          onAccessDenied="message"
          accessDeniedMessage="Admin-only content hidden"
        >
          <Box sx={{ p: 2, bgcolor: 'error.light', color: 'white', borderRadius: 1 }}>
            <Typography variant="body2">
              Sensitive admin data and controls would be here
            </Typography>
          </Box>
        </AccessGuard>
      </Card>
    </Box>
  )
};

/**
 * Interactive demo with user switching
 * Live demonstration showing how different user roles affect access
 */
export const InteractiveDemo: Story = {
  render: () => {
    const [currentUser, setCurrentUser] = React.useState<User | null>(regularUser);
    
    const userOptions = [
      { label: '👤 Guest', user: guestUser, description: 'Not logged in' },
      { label: '👤 Regular User', user: regularUser, description: 'roles: [user]' },
      { label: '👮 Moderator', user: moderatorUser, description: 'roles: [user, moderator]' },
      { label: '👑 Admin', user: adminUser, description: 'roles: [user, admin]' },
    ];

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          🎮 Interactive Role Demo
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Switch user to see different access levels in real-time:
          </Typography>
          {userOptions.map(({ label, user, description }) => (
            <Chip
              key={label}
              label={`${label} (${description})`}
              onClick={() => setCurrentUser(user)}
              color={currentUser === user ? 'primary' : 'default'}
              variant={currentUser === user ? 'filled' : 'outlined'}
              sx={{ mr: 1, mb: 1, cursor: 'pointer' }}
            />
          ))}
        </Box>

        <Card sx={{ p: 3, bgcolor: 'background.paper' }}>
          <Typography variant="subtitle1" gutterBottom sx={{ mb: 3 }}>
            🎭 Current User: {currentUser ? `${currentUser.roles?.join(', ')} roles` : 'Guest (not logged in)'}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Protected components with different access requirements:
          </Typography>
          
          <Box sx={{ '& > *': { mr: 1, mb: 1 }, mt: 2 }}>
            <AccessGuard
              user={currentUser}
              requiresAuth
              onAccessDenied="hide"
            >
              <Button variant="contained" color="primary">
                📊 User Dashboard
              </Button>
            </AccessGuard>

            <AccessGuard
              requiresRoles={["admin", "moderator"]}
              user={currentUser}
              onAccessDenied="hide"
            >
              <ModeratorButton />
            </AccessGuard>

            <AccessGuard
              requiresRole="admin"
              user={currentUser}
              onAccessDenied="hide"
            >
              <AdminButton />
            </AccessGuard>

            <AccessGuard
              user={currentUser}
              requiresRole="admin"
              onAccessDenied="message"
              accessDeniedMessage="Admin access required"
            >
              <Button variant="contained" color="error" startIcon={<AdminIcon />}>
                ⚙️ System Settings
              </Button>
            </AccessGuard>
          </Box>
          
          <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
            💡 Notice how buttons hide completely or show access denied messages based on your role and the onAccessDenied setting (secure actions only)
          </Typography>
        </Card>
      </Box>
    );
  }
};
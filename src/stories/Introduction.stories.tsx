/**
 * QwickApps Authentication Client - Introduction
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Typography, Button, Paper, Chip } from '@mui/material';

// Documentation component
const Introduction = () => (
  <Box sx={{ maxWidth: 1000, margin: '0 auto', padding: 3 }}>
    {/* Header */}
    <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        QwickApps Authentication Client
      </Typography>
      <Typography variant="h6" color="text.secondary">
        A comprehensive React authentication solution with built-in Supabase integration
      </Typography>
    </Box>

    {/* Quick Start */}
    <Paper elevation={1} sx={{ padding: 3, marginBottom: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        🚀 Zero Configuration Authentication
      </Typography>
      <Typography paragraph>
        Get started with authentication in just a few lines of code:
      </Typography>
      <Paper 
        sx={{ 
          padding: 2, 
          backgroundColor: 'grey.50', 
          fontFamily: 'monospace', 
          fontSize: '0.9rem',
          overflow: 'auto' 
        }}
      >
        {`import { AuthProvider } from '@qwickapps/auth-client';

function App() {
  return (
    <AuthProvider
      config={{
        supabaseUrl: process.env.REACT_APP_SUPABASE_URL,
        supabaseKey: process.env.REACT_APP_SUPABASE_ANON_KEY
      }}
    >
      <MyApp />
    </AuthProvider>
  );
}`}
      </Paper>
    </Paper>

    {/* Features */}
    <Paper elevation={1} sx={{ padding: 3, marginBottom: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        🎨 Beautiful UI Components
      </Typography>
      <Typography paragraph>
        Pre-built, customizable authentication pages:
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: 2 }}>
        <Chip label="LoginPage - Modern sign-in form" variant="outlined" />
        <Chip label="RegisterPage - User registration" variant="outlined" />
        <Chip label="Password Recovery - Reset workflow" variant="outlined" />
        <Chip label="Access Controls - Route protection" variant="outlined" />
      </Box>
    </Paper>

    {/* Security */}
    <Paper elevation={1} sx={{ padding: 3, marginBottom: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        🛡️ Security First
      </Typography>
      <Box component="ul" sx={{ paddingLeft: 2 }}>
        <Typography component="li"><strong>Route Protection</strong> - RouteGuard, AccessGuard</Typography>
        <Typography component="li"><strong>Role-Based Access</strong> - Granular permission control</Typography>
        <Typography component="li"><strong>Session Management</strong> - Automatic token refresh</Typography>
        <Typography component="li"><strong>Type Safety</strong> - Full TypeScript support</Typography>
      </Box>
    </Paper>

    {/* React Hooks */}
    <Paper elevation={1} sx={{ padding: 3, marginBottom: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        🔧 React Hooks
      </Typography>
      <Typography paragraph>
        Powerful hooks for authentication state:
      </Typography>
      <Paper 
        sx={{ 
          padding: 2, 
          backgroundColor: 'grey.50', 
          fontFamily: 'monospace', 
          fontSize: '0.9rem' 
        }}
      >
        {`const { user, signIn, signOut, loading } = useAuth();
const isAuthenticated = useIsAuthenticated();
const hasAdminRole = useHasRole('admin');`}
      </Paper>
    </Paper>

    {/* Architecture */}
    <Paper elevation={1} sx={{ padding: 3, marginBottom: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        📦 Architecture
      </Typography>
      <Typography paragraph>
        This package provides:
      </Typography>
      <Box component="ul" sx={{ paddingLeft: 2, marginBottom: 2 }}>
        <Typography component="li"><strong>Frontend Auth Logic</strong> - React components and hooks</Typography>
        <Typography component="li"><strong>Supabase Integration</strong> - Built-in authentication provider</Typography>
        <Typography component="li"><strong>UI Components</strong> - Complete auth workflows</Typography>
        <Typography component="li"><strong>Route Protection</strong> - Multiple protection strategies</Typography>
      </Box>
      
      <Typography variant="h6" gutterBottom>Works seamlessly with:</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        <Chip label="@qwickapps/react-framework" color="primary" variant="outlined" />
        <Chip label="@qwickapps/auth" color="primary" variant="outlined" />
        <Chip label="Your Supabase project" color="primary" variant="outlined" />
      </Box>
    </Paper>

    {/* Getting Started */}
    <Paper elevation={1} sx={{ padding: 3, marginBottom: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        🎯 Getting Started
      </Typography>
      
      <Box component="ol" sx={{ paddingLeft: 2 }}>
        <Typography component="li" paragraph>
          <strong>Install the package</strong>
          <Paper sx={{ padding: 1, backgroundColor: 'grey.50', fontFamily: 'monospace', marginTop: 1 }}>
            npm install @qwickapps/auth-client
          </Paper>
        </Typography>
        
        <Typography component="li" paragraph>
          <strong>Set up environment variables</strong>
          <Paper sx={{ padding: 1, backgroundColor: 'grey.50', fontFamily: 'monospace', marginTop: 1 }}>
            {`REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key`}
          </Paper>
        </Typography>
        
        <Typography component="li">
          <strong>Wrap your app with AuthProvider</strong>
        </Typography>
        <Typography component="li">
          <strong>Add auth pages to your router</strong>
        </Typography>
        <Typography component="li">
          <strong>Protect your routes</strong>
        </Typography>
      </Box>
    </Paper>

    {/* Call to Action */}
    <Box sx={{ textAlign: 'center', marginTop: 4 }}>
      <Typography variant="h6" paragraph>
        Explore the stories to see all components in action!
      </Typography>
      <Button variant="contained" size="large">
        Browse Components
      </Button>
    </Box>
  </Box>
);

const meta: Meta<typeof Introduction> = {
  title: 'Introduction',
  component: Introduction,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: null,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {};
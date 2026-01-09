import CssBaseline from '@mui/material/CssBaseline';
import type { Preview } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
import { AuthProvider } from '../src/components/auth';
import { AuthUser } from '@qwickapps/auth-backend';

// Create a default theme for stories
const theme = createTheme();

// Mock Supabase configuration for stories
const mockAuthConfig = {
  supabaseUrl: 'https://mock-project.supabase.co',
  supabaseKey: 'mock-anon-key-for-storybook-testing'
};

// Mock auth context for stories that need useAuth but don't use AuthProvider
const mockUser: AuthUser = {
  id: 'mock-user-id',
  email: 'demo@example.com',
  user_metadata: {},
  app_metadata: {}
};

const AuthContext = React.createContext({
  user: mockUser,
  session: null,
  loading: false,
  error: null,
  signIn: async () => ({ data: { user: mockUser, session: null }, error: null }),
  signUp: async () => ({ data: { user: mockUser, session: null }, error: null }),
  signOut: async () => ({ error: null }),
  resetPassword: async () => ({ data: {}, error: null })
});

const MockAuthProvider = ({ children }: { children: React.ReactNode }) => (
  <AuthContext.Provider value={{
    user: mockUser,
    session: null,
    loading: false,
    error: null,
    signIn: async () => ({ data: { user: mockUser, session: null }, error: null }),
    signUp: async () => ({ data: { user: mockUser, session: null }, error: null }),
    signOut: async () => ({ error: null }),
    resetPassword: async () => ({ data: {}, error: null })
  }}>
    {children}
  </AuthContext.Provider>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1a1a1a',
        },
      ],
    },
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  decorators: [
    (Story, context) => {
      // Check if story is already providing AuthProvider (skip complex AuthProvider stories for now)
      const isAuthProviderStory = context.title?.includes('AuthProvider');
      
      if (isAuthProviderStory) {
        // AuthProvider stories manage their own auth context
        return (
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <div style={{ padding: '1rem' }}>
                <CssBaseline />
                <Story />
              </div>
            </ThemeProvider>
          </BrowserRouter>
        );
      }
      
      // Other stories get mock auth context (simpler than real AuthProvider)
      return (
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <MockAuthProvider>
              <div style={{ padding: '1rem' }}>
                <CssBaseline />
                <Story />
              </div>
            </MockAuthProvider>
          </ThemeProvider>
        </BrowserRouter>
      );
    },
  ],
};

export default preview;
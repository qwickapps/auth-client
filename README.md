# @qwickapps/auth-client

Complete React authentication solution for QwickApps applications. Zero-configuration Supabase integration with beautiful UI components and comprehensive auth workflows.

## Features

- 🔐 **Zero Config Auth** - Built-in Supabase integration, just provide credentials
- ⚛️ **React Hooks** - `useAuth`, `useIsAuthenticated`, `useHasRole`
- 🎨 **Beautiful UI** - Complete auth workflows with Material-UI components
- 🛡️ **Route Protection** - `AuthRoute`, `RouteGuard`, `AccessGuard` components
- 🚀 **TypeScript** - Full type safety with comprehensive interfaces
- 📱 **Responsive** - Mobile-first design with all screen sizes supported
- 🎭 **Social Login** - Google, GitHub, Facebook integration ready
- 🔄 **Session Management** - Automatic token refresh and persistence

## Installation

```bash
npm install @qwickapps/auth-client
```

## Quick Start

### 1. Wrap your app with AuthProvider

```tsx
import { AuthProvider } from '@qwickapps/auth-client';

function App() {
  return (
    <AuthProvider
      config={{
        supabaseUrl: process.env.REACT_APP_SUPABASE_URL,
        supabaseKey: process.env.REACT_APP_SUPABASE_ANON_KEY,
        appName: "My App"
      }}
    >
      <MyApp />
    </AuthProvider>
  );
}
```

### 2. Use auth in your components

```tsx
import { useAuth, useIsAuthenticated } from '@qwickapps/auth-client';

function MyComponent() {
  const { user, signIn, signOut, loading } = useAuth();
  const isAuthenticated = useIsAuthenticated();

  if (loading) return <div>Loading...</div>;

  if (!isAuthenticated) {
    return (
      <button onClick={() => signIn({ email: 'user@example.com', password: 'password' })}>
        Sign In
      </button>
    );
  }

  return (
    <div>
      <h1>Welcome {user.name}!</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
```

### 3. Add auth pages to your routes

```tsx
import { LoginPage, RegisterPage, PasswordResetPage } from '@qwickapps/auth-client';
import { Routes, Route } from 'react-router-dom';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/reset-password" element={<PasswordResetPage />} />
      {/* Your other routes */}
    </Routes>
  );
}
```

### 4. Protect routes

```tsx
import { AuthRoute, RouteGuard } from '@qwickapps/auth-client';

function ProtectedRoutes() {
  return (
    <Routes>
      {/* Route-level protection */}
      <Route 
        path="/dashboard" 
        element={
          <AuthRoute requireAuth>
            <Dashboard />
          </AuthRoute>
        } 
      />
      
      {/* Role-based protection */}
      <Route 
        path="/admin" 
        element={
          <AuthRoute requireRoles={['admin']}>
            <AdminPanel />
          </AuthRoute>
        } 
      />
    </Routes>
  );
}
```

## Core Components

### AuthProvider

The main authentication provider that handles all auth state:

```tsx
<AuthProvider
  config={{
    supabaseUrl: string,
    supabaseKey: string,
    appName?: string,
    redirectUrls?: {
      afterSignIn?: string,
      afterSignOut?: string,
      afterSignUp?: string,
      passwordReset?: string,
    },
    features?: {
      socialLogin?: boolean,
      emailVerification?: boolean,
      passwordReset?: boolean,
      registration?: boolean,
    }
  }}
  onAuthStateChange?: (state) => void
  onError?: (error) => void
>
  {children}
</AuthProvider>
```

### Auth Pages

Ready-to-use auth pages with beautiful UI:

```tsx
// Login page
<LoginPage
  title="Welcome Back"
  subtitle="Sign in to your account"
  onSuccess={(session) => navigate('/dashboard')}
  showSocialLogin={true}
  registerUrl="/register"
/>

// Register page
<RegisterPage
  title="Create Account"
  subtitle="Join our platform today"
  onSuccess={(user) => navigate('/dashboard')}
  requireName={true}
  signInUrl="/login"
/>

// Password reset
<PasswordResetPage
  title="Reset Password"
  subtitle="Enter your email to reset your password"
  backToLoginUrl="/login"
/>
```

### Route Protection

Multiple ways to protect your routes:

```tsx
// Simple auth requirement
<AuthRoute requireAuth>
  <Dashboard />
</AuthRoute>

// Role-based access
<AuthRoute requireRoles={['admin', 'moderator']}>
  <AdminPanel />
</AuthRoute>

// Component-level protection
<RouteGuard
  authState={{ user, loading: false }}
  requiredRoles={['admin']}
  fallback={<AccessDenied />}
>
  <SensitiveComponent />
</RouteGuard>

// Access control for individual elements
<AccessGuard user={user} requireRoles={['admin']}>
  <AdminButton />
</AccessGuard>
```

## Hooks

### useAuth

Main authentication hook:

```tsx
const {
  // State
  user,              // Current user or null
  session,           // Current session or null  
  loading,           // Auth operation in progress
  error,             // Last auth error
  initialized,       // Auth provider ready

  // Actions
  signIn,            // Sign in with email/password
  signUp,            // Register new user
  signOut,           // Sign out current user
  resetPassword,     // Send password reset email
  updateProfile,     // Update user profile
  refreshSession,    // Refresh current session
  signInWithProvider, // Social login
  clearError,        // Clear current error
} = useAuth();
```

### Utility Hooks

```tsx
const isAuthenticated = useIsAuthenticated();
const hasAdminRole = useHasRole('admin');
const hasAnyModRole = useHasAnyRole(['admin', 'moderator']);
```

## Advanced Usage

### Custom Supabase Provider

For advanced use cases, access the Supabase provider directly:

```tsx
import { SupabaseAuthProvider } from '@qwickapps/auth-client';

const authProvider = new SupabaseAuthProvider({
  supabaseUrl: 'your-url',
  supabaseKey: 'your-key'
});

// Access Supabase client
const supabaseClient = authProvider.getClient();
```

### Social Authentication

Enable social login providers:

```tsx
<AuthProvider
  config={{
    supabaseUrl: 'your-url',
    supabaseKey: 'your-key',
    features: {
      socialLogin: true
    }
  }}
>
  {/* Social login will be available in LoginPage */}
</AuthProvider>
```

### Error Handling

Handle authentication errors:

```tsx
<AuthProvider
  config={authConfig}
  onError={(error) => {
    console.error('Auth error:', error);
    toast.error(error.message);
  }}
  onAuthStateChange={(state) => {
    if (state.user && !state.loading) {
      analytics.identify(state.user.id);
    }
  }}
>
  {children}
</AuthProvider>
```

## TypeScript Support

Full TypeScript support with comprehensive type definitions:

```tsx
import type {
  AuthUser,
  AuthSession,
  ClientAuthConfig,
  AuthContextValue,
  LoginPageProps,
} from '@qwickapps/auth-client';

// Type-safe configuration
const config: ClientAuthConfig = {
  supabaseUrl: process.env.REACT_APP_SUPABASE_URL!,
  supabaseKey: process.env.REACT_APP_SUPABASE_ANON_KEY!,
};

// Type-safe event handlers
const handleAuthStateChange = (state: ClientAuthState) => {
  if (state.user) {
    console.log('User signed in:', state.user.email);
  }
};
```

## Environment Variables

Set up your environment variables:

```bash
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Dependencies

This package depends on:

- `@qwickapps/react-framework` - UI components and theming
- `@qwickapps/auth-backend` - Shared auth types and utilities  
- `@supabase/supabase-js` - Supabase client
- React 16.8+ with hooks support
- Material-UI for styling

## Migration

If you're upgrading from the old framework auth system:

```tsx
// OLD - Framework auth
import { AuthProvider } from '@qwickapps/react-framework';

<AuthProvider user={user} authConfig={{ enableBuiltInRoutes: true }}>
  {children}
</AuthProvider>

// NEW - Auth client
import { AuthProvider } from '@qwickapps/auth-client';

<AuthProvider config={{ supabaseUrl, supabaseKey }}>
  {children}
</AuthProvider>
```

## License

Copyright (c) 2025 QwickApps.com. All rights reserved.
This software is proprietary and confidential.
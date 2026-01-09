# Authentication System

**QwickApps React Framework Authentication & Role-Based Access Control**

> **Copyright (c) 2025 QwickApps.com. All rights reserved.**  
> This document contains proprietary and confidential information.

## Overview

The QwickApps React Framework provides a comprehensive, security-first authentication system with role-based access control. The system is designed around three core components that work together to provide flexible, secure, and developer-friendly authentication.

## Architecture

### Core Components

1. **AuthProvider** - Centralized authentication and routing management
2. **RouteGuard** - Full authentication flow for protected routes  
3. **AccessGuard** - Lightweight component-level access control

### Security Principles

- **Compiled Security**: Role requirements baked into bundle, preventing dev console manipulation
- **No Client-Side Disable**: Only secure actions (hide/message) to prevent circumvention
- **OR Logic**: User needs ANY of the specified roles (intuitive permission model)
- **Layered Security**: Client-side UX + backend API + database RLS enforcement

## Quick Start

### Basic Setup

```tsx
import { QwickApp, AuthProvider } from '@qwickapps/react-framework';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <QwickApp appName="My App">
      <AuthProvider router={<BrowserRouter />} user={currentUser}>
        <Route path="/" component={HomePage} />
        <Route path="/dashboard" component={Dashboard} requiresAuth />
        <Route path="/admin" component={AdminPanel} requiresRole="admin" />
      </AuthProvider>
    </QwickApp>
  );
}
```

### With Built-in Auth Routes

```tsx
<AuthProvider 
  router={<BrowserRouter />} 
  user={currentUser}
  authConfig={{ 
    enableBuiltInRoutes: true,
    authBasePath: '/auth'
  }}
>
  <Route path="/dashboard" requiresAuth />
  <Route path="/admin" requiresRole="admin" />
  <Route path="/moderator" requiresRoles={["admin", "moderator"]} />
</AuthProvider>
```

## Usage Patterns

### 1. Auto-Routing Pattern

AuthProvider automatically wraps Route components with protection:

```tsx
<AuthProvider router={<BrowserRouter />} user={user}>
  <NavigationBar />  {/* Renders outside Routes */}
  <Route path="/public" component={PublicPage} />
  <Route path="/private" component={PrivatePage} requiresAuth />
  <Route path="/admin" component={AdminPage} requiresRole="admin" />
</AuthProvider>
```

**Features:**
- Routes with auth requirements automatically get RouteGuard protection
- Non-Route components render outside the Routes wrapper
- Zero configuration for basic protection

### 2. Custom Routing Pattern

Full control with manual RouteGuard usage:

```tsx
<AuthProvider user={user}>
  <MyCustomRouter>
    <Route path="/dashboard" element={
      <RouteGuard authState={authState} requiredRoles={["user"]}>
        <Dashboard />
      </RouteGuard>
    } />
  </MyCustomRouter>
</AuthProvider>
```

## Components API

### AuthProvider

Central authentication provider with routing integration.

```tsx
interface AuthProviderProps {
  user?: User | null;
  authConfig?: AuthConfig;
  router?: React.ReactElement;  // Optional auto-routing
  onAccessDenied?: (reason: string, user: User | null, path: string) => void;
  children: React.ReactNode;
}
```

**AuthConfig Options:**
- `enableBuiltInRoutes` - Auto-generate `/auth/*` routes
- `authBasePath` - Custom base path (default: `/auth`)
- `loginComponent` - Custom login page component
- `registerComponent` - Custom register page component

### RouteGuard

Full authentication flow for route protection.

```tsx
interface RouteGuardProps {
  authState: AuthState;
  children: React.ReactNode;
  requiredRoles?: string[];  // OR logic - user needs ANY role
  onRedirectToLogin?: () => void;
  fallback?: React.ReactNode;
  loadingComponent?: React.ReactNode;
  errorComponent?: React.ReactNode;
}
```

**Use Cases:**
- Protecting entire pages/routes
- Full authentication workflow with redirects
- Loading states during auth checks
- Error handling for auth failures

### AccessGuard

Lightweight component-level access control.

```tsx
interface AccessGuardProps {
  user?: User | null;
  requiresRole?: string;
  requiresRoles?: string[];      // OR logic - user needs ANY role  
  requiresAuth?: boolean;
  onAccessDenied?: 'hide' | 'message' | React.ReactNode;
  accessDeniedMessage?: string;
  children?: React.ReactNode;
}
```

**Use Cases:**
- Hiding/showing UI elements based on roles
- Component-level access control
- Inline content protection

### useAuth Hook

Access authentication state and utilities.

```tsx
const auth = useAuth();

// Properties
auth.user              // Current user object
auth.isAuthenticated   // Boolean auth status
auth.authConfig        // Auth configuration
auth.navigate          // Navigation function (when router provided)
auth.currentPath       // Current route path

// Methods  
auth.hasRole('admin')                    // Check single role
auth.hasAnyRole(['admin', 'moderator'])  // Check multiple roles (OR)
```

## Route-Level Protection

### Basic Authentication

```tsx
<Route path="/dashboard" component={Dashboard} requiresAuth />
```

### Single Role Requirement

```tsx
<Route path="/admin" component={AdminPanel} requiresRole="admin" />
```

### Multiple Role Requirements (OR Logic)

```tsx
<Route path="/moderator" component={ModeratorPanel} requiresRoles={["admin", "moderator"]} />
```

User needs **ANY** of the specified roles to access the route.

## Component-Level Protection

### Hide Content Based on Role

```tsx
<AccessGuard requiresRole="admin" user={user} onAccessDenied="hide">
  <AdminOnlyButton />
</AccessGuard>
```

### Show Access Denied Message

```tsx
<AccessGuard requiresRole="admin" user={user} onAccessDenied="message">
  <SensitiveContent />
</AccessGuard>
```

### Conditional Rendering in Navigation

```tsx
const Navigation = () => {
  const auth = useAuth();
  
  return (
    <nav>
      <Link to="/">Home</Link>
      {auth.isAuthenticated && (
        <Link to="/dashboard">Dashboard</Link>
      )}
      {auth.hasAnyRole(['admin', 'moderator']) && (
        <Link to="/moderator">Moderate</Link>
      )}
      {auth.hasRole('admin') && (
        <Link to="/admin">Admin</Link>
      )}
    </nav>
  );
};
```

## Built-in Auth Routes

Enable zero-configuration authentication pages:

```tsx
<AuthProvider 
  authConfig={{ 
    enableBuiltInRoutes: true,
    authBasePath: '/auth'
  }}
>
```

**Auto-generated routes:**
- `/auth/login` - Login page
- `/auth/register` - Registration page  
- `/auth/password-reset` - Password reset request
- `/auth/password-reset-confirm` - Password reset confirmation

### Custom Auth Components

```tsx
<AuthProvider 
  authConfig={{
    enableBuiltInRoutes: true,
    loginComponent: MyCustomLoginPage,
    registerComponent: MyCustomRegisterPage,
  }}
>
```

## User Object Structure

```tsx
interface User {
  id?: string;
  roles?: string[];
  [key: string]: any;  // Additional user properties
}
```

**Example:**
```tsx
const user = {
  id: "user123",
  email: "user@example.com", 
  roles: ["user", "moderator"],
  profile: { name: "John Doe" }
};
```

## Role-Based Access Patterns

### Common Role Hierarchies

```tsx
// Basic roles
const roles = ["guest", "user", "moderator", "admin"];

// Feature-based roles
const roles = ["viewer", "editor", "publisher", "admin"];

// Department-based roles  
const roles = ["sales", "marketing", "engineering", "admin"];
```

### OR Logic Examples

```tsx
// Moderator access - admin OR moderator
<Route requiresRoles={["admin", "moderator"]} />

// Content management - editor OR admin
<AccessGuard requiresRoles={["editor", "admin"]}>
  <EditButton />
</AccessGuard>

// Department access - sales OR marketing OR admin
auth.hasAnyRole(["sales", "marketing", "admin"])
```

## Security Best Practices

### Client-Side Security

✅ **Do:**
- Use explicit role requirements via props
- Rely on hide/message actions for UX
- Implement proper loading states
- Show clear access denied messaging

❌ **Don't:**
- Use component static properties (removable via console)
- Rely on disable actions for security (bypassable)
- Store sensitive data in client state
- Trust client-side auth for real security

### Backend Integration

The authentication system is designed as the **first line of defense** for UX. Real security must be enforced by:

1. **Backend API** - Verify user roles on every request
2. **Database RLS** - Row Level Security policies
3. **Server-side validation** - Never trust client data

```tsx
// Client-side (UX only)
<AccessGuard requiresRole="admin">
  <DeleteButton />
</AccessGuard>

// Server-side (real security)
app.delete('/api/users/:id', requireRole('admin'), (req, res) => {
  // Verify admin role on server
  // Implement actual deletion
});
```

## Advanced Patterns

### Custom Access Denied Components

```tsx
const CustomDenied = ({ reason, requiredRoles }) => (
  <Alert severity="warning">
    Access denied. Required roles: {requiredRoles.join(' or ')}
    <Button onClick={requestAccess}>Request Access</Button>
  </Alert>
);

<AccessGuard requiresRole="admin" onAccessDenied={<CustomDenied />}>
  <AdminContent />
</AccessGuard>
```

### Dynamic Role Checking

```tsx
const DynamicContent = () => {
  const auth = useAuth();
  
  if (auth.hasRole('admin')) {
    return <AdminDashboard />;
  } else if (auth.hasAnyRole(['moderator', 'editor'])) {
    return <ModeratorDashboard />;
  } else if (auth.isAuthenticated) {
    return <UserDashboard />;
  } else {
    return <PublicLanding />;
  }
};
```

### Nested Route Protection

```tsx
<AuthProvider router={<BrowserRouter />} user={user}>
  <Route path="/app" element={<AppLayout />}>
    {/* Nested routes inherit parent auth context */}
    <Route path="dashboard" requiresAuth />
    <Route path="settings" requiresAuth />
    <Route path="admin" requiresRole="admin">
      <Route path="users" />
      <Route path="system" />
    </Route>
  </Route>
</AuthProvider>
```

## Migration Guide

### From Component Static Properties

❌ **Old (Insecure):**
```tsx
const AdminButton = () => <Button>Delete All</Button>;
AdminButton.requiresRole = "admin";  // Manipulatable via console

<AccessGuard component={AdminButton} />
```

✅ **New (Secure):**
```tsx
const AdminButton = () => <Button>Delete All</Button>;

<AccessGuard requiresRole="admin">
  <AdminButton />
</AccessGuard>
```

### From QwickApp Routing

❌ **Old (Bloated):**
```tsx
<QwickApp 
  router={<BrowserRouter />}
  routes={routes}
  user={user}
  enableAuthRoutes
/>
```

✅ **New (Clean):**
```tsx
<QwickApp appName="My App">
  <AuthProvider router={<BrowserRouter />} user={user}>
    <Route path="/dashboard" requiresAuth />
  </AuthProvider>
</QwickApp>
```

## Troubleshooting

### Common Issues

**1. "All children of Routes must be Route components"**
- Solution: Non-Route components (like navigation) render outside Routes automatically
- The AuthProvider separates Route vs non-Route children

**2. "Access denied for moderator on moderator page"**
- Solution: Ensure using OR logic (`requiresRoles`) not AND logic
- Check user roles array format: `["user", "moderator"]`

**3. "useAuth must be used within AuthProvider"**
- Solution: Wrap components with AuthProvider before using useAuth hook

**4. "Navigation not working in Storybook"**
- Solution: Use `auth.navigate()` instead of `window.location`

### Debug Logging

```tsx
<AuthProvider 
  onAccessDenied={(reason, user, path) => {
    console.log(`Access denied: ${reason} for user ${user?.roles?.join(', ')} on ${path}`);
  }}
>
```

## Performance Considerations

- **Minimal Re-renders**: AuthProvider uses context efficiently
- **Route Splitting**: Built-in auth routes are lazily loaded
- **Memory Usage**: User object shared across all auth components
- **Bundle Size**: Tree-shakeable - unused auth components excluded

---

**Copyright (c) 2025 QwickApps.com. All rights reserved.**

For support and additional documentation, visit the internal QwickApps documentation portal.
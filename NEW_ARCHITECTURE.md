# QwickApps Auth Client - New Architecture (v2)

## 🎯 **Overview**

The QwickApps Auth Client has been refactored to support a flexible, client-only configuration architecture with dependency injection capabilities. This eliminates the need to expose service secrets on the client side while providing extensibility for custom auth implementations.

## 🔧 **Key Changes**

### **1. Client-Only Configuration**
No more service secrets in client config! Only client-relevant settings:

```typescript
// NEW: Client-only config (recommended)
const config: AuthClientConfig = {
  serviceEndpoint: "https://api.myapp.com/auth",
  supportedAuthTypes: ['email-password', 'social-google'],
  defaultAuthType: 'email-password',
  appName: 'My App',
}

// LEGACY: Still supported for backward compatibility
const legacyConfig: ClientAuthConfig = {
  supabaseUrl: "...",
  supabaseKey: "...",
  // ... other legacy options
}
```

### **2. Hybrid Dependency Injection**
Progressive complexity - simple by default, powerful when needed:

```typescript
// Simple case - uses default QwickAuth service
<AuthProvider config={config}>
  <App />
</AuthProvider>

// Advanced case - custom service injection
const customClient = new BrainQuisAuthServiceClient("https://api.brainquis.com/auth");

<AuthProvider 
  config={config}
  serviceClient={customClient}
>
  <App />
</AuthProvider>

// Legacy case - backward compatible
<AuthProvider legacyConfig={legacyConfig}>
  <App />
</AuthProvider>
```

### **3. Service Client Abstraction**
Clean interface for different auth backends:

```typescript
interface AuthServiceClient {
  getCurrentSession(): Promise<AuthSession | null>;
  signIn(credentials: SignInCredentials): Promise<AuthResult<AuthSession>>;
  signUp(credentials: SignUpCredentials): Promise<AuthResult<AuthUser>>;
  signOut(): Promise<AuthResult<null>>;
  // ... other auth methods
}
```

## 🚀 **Usage Examples**

### **Basic App (Default QwickAuth)**
```typescript
import { AuthProvider, createAuthConfig } from '@qwickapps/auth-client';

const config = createAuthConfig({
  serviceEndpoint: "https://api.myapp.com/auth",
  supportedAuthTypes: ['email-password', 'social-google'],
  defaultAuthType: 'email-password'
});

function App() {
  return (
    <AuthProvider config={config}>
      <MyAppContent />
    </AuthProvider>
  );
}
```

### **Custom App (BrainQuis Example)**
```typescript
import { 
  AuthProvider, 
  createAuthConfig,
  BrainQuisAuthServiceClient 
} from '@qwickapps/auth-client';

const config = createAuthConfig({
  serviceEndpoint: "https://api.brainquis.com/auth",
  supportedAuthTypes: ['email-password', 'social-google', 'anonymous'],
  defaultAuthType: 'anonymous' // Guest learning
});

const brainQuisAuth = new BrainQuisAuthServiceClient(config.serviceEndpoint);

function BrainQuisApp() {
  return (
    <AuthProvider 
      config={config}
      serviceClient={brainQuisAuth}
    >
      <BrainQuisContent />
    </AuthProvider>
  );
}
```

### **Legacy App (Backward Compatible)**
```typescript
import { AuthProvider, createAuthProviderConfig } from '@qwickapps/auth-client';

// Still works exactly as before!
const legacyConfig = createAuthProviderConfig({
  supabaseUrl: process.env.REACT_APP_SUPABASE_URL!,
  supabaseKey: process.env.REACT_APP_SUPABASE_ANON_KEY!,
  appName: 'Legacy App'
});

function LegacyApp() {
  return (
    <AuthProvider legacyConfig={legacyConfig}>
      <LegacyAppContent />
    </AuthProvider>
  );
}
```

## 🛠 **Creating Custom Service Clients**

### **1. Basic Custom Client**
```typescript
import { AuthServiceClient } from '@qwickapps/auth-client';

class MyCustomAuthClient implements AuthServiceClient {
  constructor(private apiEndpoint: string) {}

  async signIn(credentials: SignInCredentials) {
    // Custom sign-in logic
    const response = await fetch(`${this.apiEndpoint}/login`, {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
    
    return response.ok 
      ? createAuthSuccess(await response.json())
      : createAuthFailure(await response.json());
  }

  // Implement other required methods...
}
```

### **2. Extending Default Client**
```typescript
import { QwickAuthServiceClient } from '@qwickapps/auth-client';

class EnhancedAuthClient extends QwickAuthServiceClient {
  constructor(endpoint: string) {
    super(endpoint);
  }

  // Add custom methods
  async signInWithMagicLink(email: string) {
    // Custom magic link implementation
  }

  // Override existing methods if needed
  async signIn(credentials: SignInCredentials) {
    // Custom pre-processing
    await this.trackSignInAttempt(credentials.email);
    
    // Use base implementation
    return super.signIn(credentials);
  }
}
```

## 📦 **Available Service Clients**

### **QwickAuthServiceClient** (Default)
- HTTP-based communication with QwickApps Auth Service
- Session ID management with cookies
- Automatic token refresh
- Social provider redirects

### **SupabaseAuthProvider** (Legacy)
- Direct Supabase integration
- Real-time auth state changes
- Built-in social providers
- Local session storage

### **BrainQuisAuthServiceClient** (Example)
- Extends QwickAuthServiceClient
- Anonymous/guest sessions
- Learning progress tracking
- Study analytics integration

## 🔒 **Security Benefits**

### **Before (v1)**
```typescript
// ❌ Service secrets exposed to client
const config = {
  supabaseUrl: "https://abc.supabase.co", 
  supabaseKey: "eyJhbGc..." // Secret on client!
}
```

### **After (v2)**
```typescript
// ✅ Only client-safe configuration
const config = {
  serviceEndpoint: "https://api.myapp.com/auth", // Public endpoint only
  supportedAuthTypes: ['email-password'],        // UI configuration
  defaultAuthType: 'email-password'              // UX preference
}
```

## 🎨 **Authentication Types & UI Control**

The `supportedAuthTypes` array controls which UI components are shown:

```typescript
const config = createAuthConfig({
  serviceEndpoint: "https://api.myapp.com/auth",
  supportedAuthTypes: [
    'email-password',    // Shows email/password form
    'social-google',     // Shows "Sign in with Google" button
    'social-twitter',    // Shows "Sign in with Twitter" button  
    'magic-link',        // Shows "Send magic link" option
    'anonymous'          // Shows "Continue as guest" option
  ],
  defaultAuthType: 'email-password', // Shows this first
  socialProviders: [
    { id: 'google', name: 'Google', enabled: true },
    { id: 'twitter', name: 'Twitter', enabled: true }
  ]
});
```

## 🔄 **Migration Guide**

### **For Simple Apps**
1. Replace `ClientAuthConfig` with `AuthClientConfig`
2. Update service URLs to public endpoints only
3. Remove any service secrets from client config

```typescript
// Before
<AuthProvider config={{
  supabaseUrl: "...",
  supabaseKey: "...",
  appName: "My App"
}}>

// After
<AuthProvider config={{
  serviceEndpoint: "https://api.myapp.com/auth",
  supportedAuthTypes: ['email-password'],
  defaultAuthType: 'email-password',
  appName: "My App"
}}>
```

### **For Advanced Apps**
1. Create custom `AuthServiceClient` implementation
2. Inject via `serviceClient` prop
3. Maintain all existing auth logic

```typescript
// Before
<AuthProvider config={supabaseConfig}>

// After  
const customClient = new MyAuthClient("https://api.myapp.com/auth");
<AuthProvider config={clientConfig} serviceClient={customClient}>
```

## 🧪 **Testing**

### **Unit Testing Service Clients**
```typescript
import { BrainQuisAuthServiceClient } from '@qwickapps/auth-client';

describe('BrainQuisAuthServiceClient', () => {
  it('should create guest session', async () => {
    const client = new BrainQuisAuthServiceClient('http://test-api.com');
    const result = await client.createGuestSession();
    
    expect(result.data).toBeDefined();
    expect(result.error).toBeNull();
  });
});
```

### **Integration Testing**
```typescript
import { render } from '@testing-library/react';
import { AuthProvider } from '@qwickapps/auth-client';

const mockServiceClient = {
  getCurrentSession: jest.fn(),
  signIn: jest.fn(),
  // ... other mocked methods
};

test('AuthProvider with custom client', () => {
  render(
    <AuthProvider 
      config={testConfig} 
      serviceClient={mockServiceClient}
    >
      <TestComponent />
    </AuthProvider>
  );
  
  // Assert behavior...
});
```

## 🎯 **Next Steps**

1. **Migrate existing apps** to use new `AuthClientConfig`
2. **Create custom service clients** for specific backends
3. **Remove service secrets** from client-side config
4. **Test authentication flows** with new architecture
5. **Update documentation** for your specific implementation

---

## 📚 **API Reference**

### **Types**
- `AuthClientConfig` - New client-only configuration
- `AuthServiceClient` - Service abstraction interface
- `AuthenticationType` - Supported authentication methods
- `ClientAuthConfig` - Legacy configuration (deprecated)

### **Components**
- `AuthProvider` - Main provider with hybrid DI support
- All existing auth UI components (unchanged)

### **Service Clients**
- `QwickAuthServiceClient` - Default HTTP-based client
- `SupabaseAuthProvider` - Legacy Supabase client
- `BrainQuisAuthServiceClient` - Example custom client

### **Utilities**
- `createAuthConfig()` - Create client-only config
- `createAuthProviderConfig()` - Create legacy config (deprecated)

The new architecture provides flexibility, security, and extensibility while maintaining full backward compatibility! 🚀
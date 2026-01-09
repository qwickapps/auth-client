/**
 * LoginPage Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { LoginPage } from '../../components/auth/LoginPage';

const meta: Meta<typeof LoginPage> = {
  title: 'Auth/Pages/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `LoginPage provides a complete, modern login experience with card-based layout and branding.

**Key Features:**
- **Modern Design**: Card-based layout with consistent spacing and typography
- **Responsive**: Adapts beautifully to mobile, tablet, and desktop screens  
- **Customizable Branding**: Optional logo/branding area with gradient effects
- **Background Options**: Default, gradient, or custom image backgrounds
- **Form Integration**: Seamlessly wraps LoginForm with proper styling
- **Accessibility**: Full ARIA support and keyboard navigation
- **Theme Aware**: Automatically adapts to light/dark themes

**Perfect for:**
- Authentication pages requiring professional appearance
- Multi-tenant applications needing custom branding
- Mobile-responsive login experiences  
- Modern web applications and dashboards
- Single-page applications with routing
- Progressive web apps (PWAs)

**Suggested route:** \`/auth/login\``,
      },
    },
  },
  argTypes: {
    
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // onLogin: () => { alert('Logging in...'); },
  },
};

export const WithGradientBackground: Story = {
  args: {
    // onLogin: () => { alert('Logging in...'); },
    // background: 'gradient',
  },
};

export const WithImageBackground: Story = {
  args: {
    // onLogin: () => { alert('Logging in...'); },
    // background: 'image',
    // backgroundImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
};

export const WithSocialLogin: Story = {
  render: () => (
    <LoginPage
      // onLogin={() => { alert('Logging in...'); }}
      // onSocialLogin={() => { alert('Social login...'); }}
      // showSocialLogin={true},
      // socialProviders={[
      //   {
      //     id: 'google',
      //     name: 'Google',
      //     icon: <GoogleIcon />,
      //   },
      //   {
      //     id: 'github',
      //     name: 'GitHub',
      //     icon: <GitHubIcon />,
      //   },
      // ]}
    />
  ),
};

export const CustomBranding: Story = {
  args: {
    // onLogin: () => { alert('Logging in...'); },
    title: 'Welcome to Acme Corp',
    subtitle: 'Sign in to access your dashboard',
    // background: 'gradient',
  },
};

export const WithError: Story = {
  args: {
    // onLogin: () => { alert('Logging in...'); },
    // error: 'Invalid email or password. Please try again.',
    // background: 'gradient',
  },
};

export const Complete: Story = {
  render: () => (
    <LoginPage
      // onLogin={() => { alert('Logging in...'); }}
      // onForgotPassword={() => { alert('Forgot password...'); }}
      // onSocialLogin={() => { alert('Social login...'); }}
      // signUpUrl="/auth/register"
      // showSocialLogin={true}
      // socialProviders={[
      //   {
      //     id: 'google',
      //     name: 'Google',
      //     icon: <GoogleIcon />,
      //   },
      //   {
      //     id: 'github',
      //     name: 'GitHub', 
      //     icon: <GitHubIcon />,
      //   },
      // ]}
      title="Welcome to QwickApps"
      subtitle="Build amazing applications with our framework"
      // background="gradient"
    />
  ),
};
/**
 * RegisterPage Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { RegisterPage } from '../../components/auth/RegisterPage';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const meta: Meta<typeof RegisterPage> = {
  title: 'Auth/Pages/RegisterPage',
  component: RegisterPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `RegisterPage provides a complete, modern registration experience with card-based layout and branding.

**Key Features:**
- **Modern Design**: Card-based layout with consistent spacing and typography
- **Password Strength**: Built-in password strength validation and visual feedback
- **Responsive**: Adapts beautifully to mobile, tablet, and desktop screens
- **Customizable Branding**: Optional logo/branding area with gradient effects
- **Background Options**: Default, gradient, or custom image backgrounds
- **Form Integration**: Seamlessly wraps RegisterForm with proper styling
- **Terms & Privacy**: Built-in support for terms of service and privacy policy links
- **Social Registration**: Optional social provider registration buttons

**Perfect for:**
- User onboarding and account creation flows
- Multi-tenant applications needing custom branding
- Mobile-responsive registration experiences
- Modern web applications and dashboards
- SaaS platforms and subscription services
- Community platforms and social applications

**Suggested route:** \`/auth/register\``,
      },
    },
  },
  argTypes: {
    background: {
      control: 'select',
      options: ['default', 'gradient', 'image'],
    },
    requireName: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock password strength validator
const mockPasswordStrength = (password: string) => {
  const score = Math.min(password.length / 2, 4);
  return {
    score: Math.floor(score),
    feedback: score < 2 ? ['Use at least 8 characters', 'Include uppercase and lowercase letters'] : [],
    isValid: password.length >= 8,
  };
};

export const Default: Story = {
  args: {
    onRegister: () => { alert('Registering...'); },
    validatePasswordStrength: mockPasswordStrength,
  },
};

export const WithName: Story = {
  args: {
    onRegister: () => { alert('Registering...'); },
    validatePasswordStrength: mockPasswordStrength,
    requireName: true,
  },
};

export const WithGradientBackground: Story = {
  args: {
    onRegister: () => { alert('Registering...'); },
    validatePasswordStrength: mockPasswordStrength,
    background: 'gradient',
  },
};

export const WithImageBackground: Story = {
  args: {
    onRegister: () => { alert('Registering...'); },
    validatePasswordStrength: mockPasswordStrength,
    background: 'image',
    backgroundImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
};

export const WithSocialRegister: Story = {
  render: () => (
    <RegisterPage
      onRegister={() => { alert('Registering...'); }}
      onSocialRegister={() => { alert('Social register...'); }}
      validatePasswordStrength={mockPasswordStrength}
      showSocialRegister={true}
      socialProviders={[
        {
          id: 'google',
          name: 'Google',
          icon: <GoogleIcon />,
        },
        {
          id: 'github',
          name: 'GitHub',
          icon: <GitHubIcon />,
        },
      ]}
    />
  ),
};

export const WithTermsAndPrivacy: Story = {
  args: {
    onRegister: () => { alert('Registering...'); },
    validatePasswordStrength: mockPasswordStrength,
    termsUrl: 'https://example.com/terms',
    privacyUrl: 'https://example.com/privacy',
    background: 'gradient',
  },
};

export const WithError: Story = {
  args: {
    onRegister: () => { alert('Registering...'); },
    validatePasswordStrength: mockPasswordStrength,
    error: 'An account with this email already exists.',
  },
};

export const Complete: Story = {
  render: () => (
    <RegisterPage
      onRegister={() => { alert('Registering...'); }}
      onSocialRegister={() => { alert('Social register...'); }}
      validatePasswordStrength={mockPasswordStrength}
      requireName={true}
      signInUrl="/auth/login"
      termsUrl="https://example.com/terms"
      privacyUrl="https://example.com/privacy"
      showSocialRegister={true}
      socialProviders={[
        {
          id: 'google',
          name: 'Google',
          icon: <GoogleIcon />,
        },
        {
          id: 'github',
          name: 'GitHub',
          icon: <GitHubIcon />,
        },
      ]}
      title="Join QwickApps"
      subtitle="Create your account and start building amazing applications"
      background="gradient"
    />
  ),
};
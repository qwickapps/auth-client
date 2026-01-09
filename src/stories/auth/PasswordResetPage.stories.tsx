/**
 * PasswordResetPage Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { PasswordResetPage } from '../../components/auth/PasswordResetPage';

const meta: Meta<typeof PasswordResetPage> = {
  title: 'Auth/Pages/PasswordResetPage',
  component: PasswordResetPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `PasswordResetPage provides a complete, modern password reset experience with card-based layout and branding.

**Key Features:**
- **Modern Design**: Card-based layout with consistent spacing and typography
- **Clear Messaging**: Helpful instructions and feedback for users
- **Responsive**: Adapts beautifully to mobile, tablet, and desktop screens
- **Customizable Branding**: Optional logo/branding area with gradient effects
- **Background Options**: Default, gradient, or custom image backgrounds
- **Form Integration**: Seamlessly wraps PasswordResetForm with proper styling
- **Success States**: Built-in support for success messaging and next steps
- **Back to Login**: Easy navigation back to login page

**Perfect for:**
- Password recovery flows and account security
- Self-service account management features
- Mobile-responsive password reset experiences
- Modern web applications requiring password reset
- Customer support reduction through self-service
- Security-conscious applications with password policies

**Suggested route:** \`/auth/reset-password\``,
      },
    },
  },
  argTypes: {
    background: {
      control: 'select', 
      options: ['default', 'gradient', 'image'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onPasswordReset: () => { alert('Password reset requested'); },
  },
};

export const WithGradientBackground: Story = {
  args: {
    onPasswordReset: () => { alert('Password reset requested'); },
    background: 'gradient',
  },
};

export const WithImageBackground: Story = {
  args: {
    onPasswordReset: () => { alert('Password reset requested'); },
    background: 'image',
    backgroundImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
};

export const Loading: Story = {
  args: {
    onPasswordReset: () => { alert('Password reset requested'); },
    loading: true,
    background: 'gradient',
  },
};

export const WithError: Story = {
  args: {
    onPasswordReset: () => { alert('Password reset requested'); },
    error: 'No account found with this email address.',
    background: 'gradient',
  },
};

export const WithSuccess: Story = {
  args: {
    onPasswordReset: () => { alert('Password reset requested'); },
    background: 'gradient',
  },
};

export const WithSignInLink: Story = {
  args: {
    onPasswordReset: () => { alert('Password reset requested'); },
    signInUrl: '/auth/login',
  },
};

export const CustomMessages: Story = {
  args: {
    onPasswordReset: () => { alert('Password reset requested'); },
    title: 'Forgot Your Password?',
    subtitle: 'No worries! We\'ll help you reset it quickly and securely.',
    signInUrl: '/auth/login',
    background: 'gradient',
  },
};
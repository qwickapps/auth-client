/**
 * PasswordResetConfirmPage Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { PasswordResetConfirmPage } from '../../components/auth/PasswordResetConfirmPage';

const meta: Meta<typeof PasswordResetConfirmPage> = {
  title: 'Auth/Pages/PasswordResetConfirmPage',
  component: PasswordResetConfirmPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `PasswordResetConfirmPage provides a complete, modern password reset confirmation experience with card-based layout and branding.

**Key Features:**
- **Modern Design**: Card-based layout with consistent spacing and typography
- **Password Strength**: Built-in password strength validation and visual feedback
- **Security Focus**: Secure password creation with confirmation matching
- **Responsive**: Adapts beautifully to mobile, tablet, and desktop screens
- **Customizable Branding**: Optional logo/branding area with gradient effects
- **Background Options**: Default, gradient, or custom image backgrounds
- **Form Integration**: Seamlessly wraps PasswordResetConfirmForm with proper styling
- **Token Handling**: Supports password reset token validation

**Perfect for:**
- Password reset completion flows
- Account security and password policy enforcement
- Mobile-responsive password reset experiences
- Modern web applications requiring secure password reset
- Token-based authentication systems
- Security-conscious applications with strong password requirements

**Suggested route:** \`/auth/reset-password/confirm\``,
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
    onPasswordResetConfirm: () => { alert('Password reset confirmed'); },
    validatePasswordStrength: mockPasswordStrength,
  },
};

export const WithGradientBackground: Story = {
  args: {
    onPasswordResetConfirm: () => { alert('Password reset confirmed'); },
    validatePasswordStrength: mockPasswordStrength,
    background: 'gradient',
  },
};

export const WithImageBackground: Story = {
  args: {
    onPasswordResetConfirm: () => { alert('Password reset confirmed'); },
    validatePasswordStrength: mockPasswordStrength,
    background: 'image',
    backgroundImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
};

export const Loading: Story = {
  args: {
    onPasswordResetConfirm: () => { alert('Password reset confirmed'); },
    validatePasswordStrength: mockPasswordStrength,
    loading: true,
    background: 'gradient',
  },
};

export const WithError: Story = {
  args: {
    onPasswordResetConfirm: () => { alert('Password reset confirmed'); },
    validatePasswordStrength: mockPasswordStrength,
    error: 'Reset token has expired. Please request a new password reset.',
    background: 'gradient',
  },
};

export const WithSignInLink: Story = {
  args: {
    onPasswordResetConfirm: () => { alert('Password reset confirmed'); },
    validatePasswordStrength: mockPasswordStrength,
    signInUrl: '/auth/login',
  },
};

export const CustomMessages: Story = {
  args: {
    onPasswordResetConfirm: () => { alert('Password reset confirmed'); },
    validatePasswordStrength: mockPasswordStrength,
    title: 'Create New Password',
    subtitle: 'Your new password should be strong and unique to protect your account.',
    signInUrl: '/auth/login',
    background: 'gradient',
  },
};
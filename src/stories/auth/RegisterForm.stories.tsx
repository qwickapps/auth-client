/**
 * RegisterForm Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { RegisterForm } from '../../components/auth/RegisterForm';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const meta: Meta<typeof RegisterForm> = {
  title: 'Auth/Forms/RegisterForm',
  component: RegisterForm,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    loading: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    onRegister: {
      action: 'register',
      description: 'Function called when the form is submitted',
    },
    onSocialRegister: {
      action: 'social_register',
      description: 'Function called when a social login is attempted',
    },
    showSocialRegister: {
      control: 'boolean',
    },
    requireName: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock password strength validator for stories
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
    onRegister: () => {alert('Registering...'); },
    validatePasswordStrength: mockPasswordStrength,
  },
};

export const WithName: Story = {
  args: {
    onRegister: () => {alert('Registering...'); },
    validatePasswordStrength: mockPasswordStrength,
    requireName: true,
  },
};

export const Loading: Story = {
  args: {
    onRegister: () => {alert('Registering...'); },
    validatePasswordStrength: mockPasswordStrength,
    loading: true,
  },
};

export const WithError: Story = {
  args: {
    onRegister: () => {alert('Registering...'); },
    validatePasswordStrength: mockPasswordStrength,
    error: 'An account with this email already exists.',
  },
};

export const WithSuccess: Story = {
  args: {
    onRegister: () => {alert('Registering...'); },
    validatePasswordStrength: mockPasswordStrength,
    onSocialRegister: () => {alert('Registering with social provider...'); },
  },
};

export const WithSocialRegister: Story = {
  render: () => (
    <RegisterForm
      onRegister={() => {alert('Registering...'); }}
      onSocialRegister={() => {alert('Registering with social provider...'); }}
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
    onRegister: () => {alert('Registering...'); },
    validatePasswordStrength: mockPasswordStrength,
    termsUrl: 'https://example.com/terms',
    privacyUrl: 'https://example.com/privacy',
  },
};

export const Complete: Story = {
  render: () => (
    <RegisterForm
      onRegister={() => {alert('Registering...'); }}
      onSocialRegister={() => {alert('Registering with social provider...'); }}
      validatePasswordStrength={mockPasswordStrength}
      requireName={true}
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
    />
  ),
};
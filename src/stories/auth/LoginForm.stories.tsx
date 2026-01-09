/**
 * LoginForm Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from '../../components/auth/LoginForm';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const meta: Meta<typeof LoginForm> = {
  title: 'Auth/Forms/LoginForm',
  component: LoginForm,
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
    showSocialLogin: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onLogin: () => {alert('Logging in...'); },
  },
};

export const Loading: Story = {
  args: {
    onLogin: () => {alert('Logging in...'); },
    loading: true,
  },
};

export const WithError: Story = {
  args: {
    onLogin: () => {alert('Logging in...'); },
    error: 'Invalid email or password. Please try again.',
  },
};

export const WithSocialLogin: Story = {
  render: () => (
    <LoginForm
      onLogin={() => {alert('Logging in...'); }}
      onSocialLogin={() => {alert('Logging in with social provider...'); }}
      showSocialLogin={true}
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

export const WithForgotPassword: Story = {
  args: {
    onLogin: () => {alert('Logging in...'); },
    onForgotPassword: () => {alert('Forgot password clicked'); },
  },
};

export const WithSignUpLink: Story = {
  args: {
    onLogin: () => {alert('Logging in...'); },
    signUpUrl: '/register',
  },
};

export const Complete: Story = {
  render: () => (
    <LoginForm
      onLogin={() => {alert('Logging in...'); }}
      onForgotPassword={() => {alert('Forgot password clicked'); }}
      onSocialLogin={() => {alert('Logging in with social provider...'); }}
      signUpUrl="/register"
      showSocialLogin={true}
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
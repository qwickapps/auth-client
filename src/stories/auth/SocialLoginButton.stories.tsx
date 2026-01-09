/**
 * SocialLoginButton Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { SocialLoginButton } from '../../index';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';

const meta: Meta<typeof SocialLoginButton> = {
  title: 'Auth/Forms/SocialLoginButton',
  component: SocialLoginButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    provider: {
      control: 'select',
      options: ['google', 'github', 'facebook', 'twitter', 'apple', 'microsoft', 'linkedin'],
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Google: Story = {
  render: () => (
    <SocialLoginButton
      provider="google"
      onClick={() => {alert('Google login clicked'); }}
      icon={<GoogleIcon />}
    />
  ),
};

export const GitHub: Story = {
  render: () => (
    <SocialLoginButton
      provider="github"
      onClick={() => {alert('GitHub login clicked'); }}
      icon={<GitHubIcon />}
    />
  ),
};

export const Facebook: Story = {
  render: () => (
    <SocialLoginButton
      provider="facebook"
      onClick={() => {alert('Facebook login clicked'); }}
      icon={<FacebookIcon />}
    />
  ),
};

export const Apple: Story = {
  render: () => (
    <SocialLoginButton
      provider="apple"
      onClick={() => {alert('Apple login clicked'); }}
      icon={<AppleIcon />}
      variant="contained"
    />
  ),
};

export const Loading: Story = {
  render: () => (
    <SocialLoginButton
      provider="google"
      onClick={() => {alert('Google login clicked'); }}
      icon={<GoogleIcon />}
      loading={true}
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <SocialLoginButton
      provider="google"
      onClick={() => {alert('Google login clicked'); }}
      icon={<GoogleIcon />}
      disabled={true}
    />
  ),
};

export const CustomProvider: Story = {
  args: {
    provider: 'custom',
    onClick: () => {alert('Custom provider login clicked'); },
    children: 'Sign in with Custom Provider',
    customColors: {
      backgroundColor: '#6f42c1',
      textColor: '#ffffff',
      borderColor: '#6f42c1',
    },
    variant: 'contained',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <SocialLoginButton
        provider="google"
        onClick={() => {alert('Google login clicked'); }}
        icon={<GoogleIcon />}
        size="small"
      />
      <SocialLoginButton
        provider="google"
        onClick={() => {alert('Google login clicked'); }}
        icon={<GoogleIcon />}
        size="medium"
      />
      <SocialLoginButton
        provider="google"
        onClick={() => {alert('Google login clicked'); }}
        icon={<GoogleIcon />}
        size="large"
      />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <SocialLoginButton
        provider="google"
        onClick={() => {alert('Google login clicked'); }}
        icon={<GoogleIcon />}
        variant="outlined"
      />
      <SocialLoginButton
        provider="google"
        onClick={() => {alert('Google login clicked'); }}
        icon={<GoogleIcon />}
        variant="contained"
      />
      <SocialLoginButton
        provider="google"
        onClick={() => {alert('Google login clicked'); }}
        icon={<GoogleIcon />}
        variant="text"
      />
    </div>
  ),
};
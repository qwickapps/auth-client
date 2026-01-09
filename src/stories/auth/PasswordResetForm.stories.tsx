/**
 * PasswordResetForm Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { PasswordResetForm } from '../../components/auth/PasswordResetForm';

const meta: Meta<typeof PasswordResetForm> = {
  title: 'Auth/Forms/PasswordResetForm',
  component: PasswordResetForm,
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onPasswordReset: () => {alert('Password reset requested'); },
  },
};

export const Loading: Story = {
  args: {
    onPasswordReset: () => {alert('Password reset requested'); },
    loading: true,
  },
};

export const WithError: Story = {
  args: {
    onPasswordReset: () => {alert('Password reset requested'); },
    error: 'No account found with this email address.',
  },
};

export const WithSuccess: Story = {
  args: {
    onPasswordReset: () => {alert('Password reset requested'); },
  },
};

export const WithSignInLink: Story = {
  args: {
    onPasswordReset: () => {alert('Password reset requested'); },
    backToLoginLink: '/auth/login',
  },
};
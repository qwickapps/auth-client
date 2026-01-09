/**
 * LoginForm Stories
 */
import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from '../../components/auth/LoginForm';
declare const meta: Meta<typeof LoginForm>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Loading: Story;
export declare const WithError: Story;
export declare const WithSocialLogin: Story;
export declare const WithForgotPassword: Story;
export declare const WithSignUpLink: Story;
export declare const Complete: Story;

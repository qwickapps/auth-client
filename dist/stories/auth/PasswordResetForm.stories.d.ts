/**
 * PasswordResetForm Stories
 */
import type { Meta, StoryObj } from '@storybook/react';
import { PasswordResetForm } from '../../components/auth/PasswordResetForm';
declare const meta: Meta<typeof PasswordResetForm>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Loading: Story;
export declare const WithError: Story;
export declare const WithSuccess: Story;
export declare const WithSignInLink: Story;

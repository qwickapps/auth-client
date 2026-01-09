/**
 * PasswordResetPage Stories
 */
import type { Meta, StoryObj } from '@storybook/react';
import { PasswordResetPage } from '../../components/auth/PasswordResetPage';
declare const meta: Meta<typeof PasswordResetPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithGradientBackground: Story;
export declare const WithImageBackground: Story;
export declare const Loading: Story;
export declare const WithError: Story;
export declare const WithSuccess: Story;
export declare const WithSignInLink: Story;
export declare const CustomMessages: Story;

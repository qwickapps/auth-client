/**
 * LoginPage Stories
 */
import type { Meta, StoryObj } from '@storybook/react';
import { LoginPage } from '../../components/auth/LoginPage';
declare const meta: Meta<typeof LoginPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithGradientBackground: Story;
export declare const WithImageBackground: Story;
export declare const WithSocialLogin: Story;
export declare const CustomBranding: Story;
export declare const WithError: Story;
export declare const Complete: Story;

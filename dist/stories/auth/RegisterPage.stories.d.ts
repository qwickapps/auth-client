/**
 * RegisterPage Stories
 */
import type { Meta, StoryObj } from '@storybook/react';
import { RegisterPage } from '../../components/auth/RegisterPage';
declare const meta: Meta<typeof RegisterPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithName: Story;
export declare const WithGradientBackground: Story;
export declare const WithImageBackground: Story;
export declare const WithSocialRegister: Story;
export declare const WithTermsAndPrivacy: Story;
export declare const WithError: Story;
export declare const Complete: Story;

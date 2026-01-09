/**
 * RegisterForm Stories
 */
import type { Meta, StoryObj } from '@storybook/react';
import { RegisterForm } from '../../components/auth/RegisterForm';
declare const meta: Meta<typeof RegisterForm>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithName: Story;
export declare const Loading: Story;
export declare const WithError: Story;
export declare const WithSuccess: Story;
export declare const WithSocialRegister: Story;
export declare const WithTermsAndPrivacy: Story;
export declare const Complete: Story;

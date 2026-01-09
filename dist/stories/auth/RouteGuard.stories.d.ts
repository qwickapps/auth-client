/**
 * RouteGuard Stories
 */
import type { Meta, StoryObj } from '@storybook/react';
import { RouteGuard } from '../../components/auth/RouteGuard';
declare const meta: Meta<typeof RouteGuard>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Loading: Story;
export declare const Unauthenticated: Story;
export declare const Authenticated: Story;
export declare const WithError: Story;
export declare const RoleBasedAccess: Story;
export declare const RoleBasedAccessGranted: Story;
export declare const CustomFallback: Story;
export declare const NoLoginButton: Story;
export declare const CustomMessages: Story;

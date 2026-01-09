/**
 * AccessGuard Storybook Stories
 *
 * Interactive demonstrations of component-level authentication and role protection
 *
 * Copyright (c) 2025 QwickApps.com. All rights reserved.
 */
import type { Meta, StoryObj } from '@storybook/react';
import { AccessGuard } from '../../components/auth';
declare const meta: Meta<typeof AccessGuard>;
export default meta;
type Story = StoryObj<typeof AccessGuard>;
/**
 * Basic component protection with role requirements
 * Shows how AccessGuard uses explicit role requirements (secure)
 */
export declare const BasicRoleProtection: Story;
/**
 * Demonstrates different access denied actions
 * Shows the three built-in ways to handle access denial
 */
export declare const AccessDeniedActions: Story;
/**
 * Authentication checking (logged in vs guest)
 * Basic auth requirement without specific roles
 */
export declare const AuthenticationCheck: Story;
/**
 * Focused demo of disabled action with click alerts
 * Shows how disabled components prevent interactions while maintaining visual feedback
 */
export declare const SecureActionsShowcase: Story;
/**
 * Multiple role options (OR logic)
 */
export declare const MultipleRoleOptions: Story;
/**
 * Protecting arbitrary JSX elements
 */
export declare const ProtectAnyElement: Story;
/**
 * Interactive demo with user switching
 * Live demonstration showing how different user roles affect access
 */
export declare const InteractiveDemo: Story;

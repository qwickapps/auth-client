/**
 * AuthProvider Stories
 *
 * Demonstrates basic authentication provider functionality
 */
import type { Meta, StoryObj } from '@storybook/react';
import { AuthProvider } from '../../index';
declare const meta: Meta<typeof AuthProvider>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithErrorHandling: Story;

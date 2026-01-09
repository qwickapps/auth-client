/**
 * SuperTokensAuthProvider Tests
 *
 * Copyright © 2025 QwickApps.com. All rights reserved.
 */

import { SuperTokensAuthProvider } from '../supertokens-auth-provider';

// Mock supertokens-web-js
const mockInit = jest.fn();
const mockSignIn = jest.fn();
const mockSignUp = jest.fn();
const mockSignOut = jest.fn();
const mockSendPasswordResetEmail = jest.fn();
const mockDoesSessionExist = jest.fn();
const mockGetUserId = jest.fn();
const mockGetAccessToken = jest.fn();

jest.mock('supertokens-web-js', () => ({
  default: {
    init: (...args: any[]) => mockInit(...args),
  },
}));

jest.mock('supertokens-web-js/recipe/session', () => ({
  default: {
    init: () => ({}),
    doesSessionExist: () => mockDoesSessionExist(),
    getUserId: () => mockGetUserId(),
    getAccessToken: () => mockGetAccessToken(),
    signOut: () => mockSignOut(),
  },
}));

jest.mock('supertokens-web-js/recipe/emailpassword', () => ({
  default: {
    init: () => ({}),
    signIn: (data: any) => mockSignIn(data),
    signUp: (data: any) => mockSignUp(data),
    sendPasswordResetEmail: (data: any) => mockSendPasswordResetEmail(data),
  },
}));

// Mock fetch
global.fetch = jest.fn();

describe('SuperTokensAuthProvider', () => {
  let provider: SuperTokensAuthProvider;
  const config = {
    appName: 'TestApp',
    apiDomain: 'http://localhost:3000',
    apiBasePath: '/api/auth',
    websiteDomain: 'http://localhost:3001',
  };

  beforeEach(() => {
    jest.clearAllMocks();
    provider = new SuperTokensAuthProvider(config);
  });

  describe('initialization', () => {
    it('initializes SuperTokens with correct config', async () => {
      await provider.signIn({ email: 'test@example.com', password: 'password123' });

      expect(mockInit).toHaveBeenCalledWith({
        appInfo: {
          appName: 'TestApp',
          apiDomain: 'http://localhost:3000',
          apiBasePath: '/api/auth',
          websiteDomain: 'http://localhost:3001',
        },
        recipeList: expect.arrayContaining([expect.any(Object)]),
      });
    });

    it('only initializes once', async () => {
      await provider.signIn({ email: 'test@example.com', password: 'password123' });
      await provider.signUp({ email: 'test2@example.com', password: 'password456' });

      expect(mockInit).toHaveBeenCalledTimes(1);
    });

    it('uses default apiBasePath if not provided', async () => {
      const providerWithDefaults = new SuperTokensAuthProvider({
        appName: 'TestApp',
        apiDomain: 'http://localhost:3000',
      });

      await providerWithDefaults.signIn({ email: 'test@example.com', password: 'password123' });

      expect(mockInit).toHaveBeenCalledWith(
        expect.objectContaining({
          appInfo: expect.objectContaining({
            apiBasePath: '/api/auth',
            websiteDomain: 'http://localhost:3000',
          }),
        })
      );
    });
  });

  describe('signIn', () => {
    it('signs in successfully with valid credentials', async () => {
      mockSignIn.mockResolvedValue({ status: 'OK' });
      mockDoesSessionExist.mockResolvedValue(true);
      mockGetUserId.mockResolvedValue('user-123');
      mockGetAccessToken.mockResolvedValue('access-token');
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => ({ id: 'user-123', email: 'test@example.com' }),
      });

      const result = await provider.signIn({
        email: 'test@example.com',
        password: 'password123',
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual({
        user: { id: 'user-123', email: 'test@example.com' },
        accessToken: 'access-token',
        refreshToken: '',
        expiresAt: expect.any(Number),
      });
    });

    it('returns error for invalid credentials', async () => {
      mockSignIn.mockResolvedValue({ status: 'WRONG_CREDENTIALS_ERROR' });

      const result = await provider.signIn({
        email: 'test@example.com',
        password: 'wrong-password',
      });

      expect(result.success).toBe(false);
      expect(result.error).toEqual({
        code: 'INVALID_CREDENTIALS',
        message: 'Invalid email or password',
      });
    });

    it('handles sign in failures', async () => {
      mockSignIn.mockResolvedValue({ status: 'GENERAL_ERROR' });

      const result = await provider.signIn({
        email: 'test@example.com',
        password: 'password123',
      });

      expect(result.success).toBe(false);
      expect(result.error?.code).toBe('SIGN_IN_FAILED');
    });

    it('handles exceptions during sign in', async () => {
      mockSignIn.mockRejectedValue(new Error('Network error'));

      const result = await provider.signIn({
        email: 'test@example.com',
        password: 'password123',
      });

      expect(result.success).toBe(false);
      expect(result.error?.message).toBe('Network error');
    });

    it('notifies auth state listeners on successful sign in', async () => {
      const listener = jest.fn();
      provider.onAuthStateChange(listener);

      mockSignIn.mockResolvedValue({ status: 'OK' });
      mockDoesSessionExist.mockResolvedValue(true);
      mockGetUserId.mockResolvedValue('user-123');
      mockGetAccessToken.mockResolvedValue('access-token');
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => ({ id: 'user-123', email: 'test@example.com' }),
      });

      await provider.signIn({ email: 'test@example.com', password: 'password123' });

      expect(listener).toHaveBeenCalledWith(
        expect.objectContaining({
          user: expect.any(Object),
          accessToken: 'access-token',
        })
      );
    });
  });

  describe('signUp', () => {
    it('signs up successfully with valid data', async () => {
      mockSignUp.mockResolvedValue({ status: 'OK' });
      mockDoesSessionExist.mockResolvedValue(true);
      mockGetUserId.mockResolvedValue('user-123');
      mockGetAccessToken.mockResolvedValue('access-token');
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => ({ id: 'user-123', email: 'new@example.com' }),
      });

      const result = await provider.signUp({
        email: 'new@example.com',
        password: 'password123',
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual({ id: 'user-123', email: 'new@example.com' });
    });

    it('returns error for field validation errors', async () => {
      mockSignUp.mockResolvedValue({ status: 'FIELD_ERROR' });

      const result = await provider.signUp({
        email: 'invalid-email',
        password: '123',
      });

      expect(result.success).toBe(false);
      expect(result.error?.code).toBe('VALIDATION_ERROR');
    });

    it('handles sign up failures', async () => {
      mockSignUp.mockRejectedValue(new Error('Email already exists'));

      const result = await provider.signUp({
        email: 'existing@example.com',
        password: 'password123',
      });

      expect(result.success).toBe(false);
      expect(result.error?.message).toBe('Email already exists');
    });
  });

  describe('signOut', () => {
    it('signs out successfully', async () => {
      mockSignOut.mockResolvedValue(undefined);

      const result = await provider.signOut();

      expect(result.success).toBe(true);
      expect(mockSignOut).toHaveBeenCalled();
    });

    it('notifies auth state listeners with null on sign out', async () => {
      const listener = jest.fn();
      provider.onAuthStateChange(listener);

      mockSignOut.mockResolvedValue(undefined);

      await provider.signOut();

      expect(listener).toHaveBeenCalledWith(null);
    });

    it('handles sign out errors', async () => {
      mockSignOut.mockRejectedValue(new Error('Sign out failed'));

      const result = await provider.signOut();

      expect(result.success).toBe(false);
      expect(result.error?.message).toBe('Sign out failed');
    });
  });

  describe('resetPassword', () => {
    it('sends password reset email successfully', async () => {
      mockSendPasswordResetEmail.mockResolvedValue({ status: 'OK' });

      const result = await provider.resetPassword({ email: 'user@example.com' });

      expect(result.success).toBe(true);
      expect(mockSendPasswordResetEmail).toHaveBeenCalledWith({
        formFields: [{ id: 'email', value: 'user@example.com' }],
      });
    });

    it('handles password reset failures', async () => {
      mockSendPasswordResetEmail.mockResolvedValue({ status: 'GENERAL_ERROR' });

      const result = await provider.resetPassword({ email: 'user@example.com' });

      expect(result.success).toBe(false);
      expect(result.error?.code).toBe('PASSWORD_RESET_ERROR');
    });
  });

  describe('getCurrentSession', () => {
    it('returns session when session exists', async () => {
      mockDoesSessionExist.mockResolvedValue(true);
      mockGetUserId.mockResolvedValue('user-123');
      mockGetAccessToken.mockResolvedValue('access-token');
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => ({ id: 'user-123', email: 'test@example.com' }),
      });

      const session = await provider.getCurrentSession();

      expect(session).toEqual({
        user: { id: 'user-123', email: 'test@example.com' },
        accessToken: 'access-token',
        refreshToken: '',
        expiresAt: expect.any(Number),
      });
    });

    it('returns null when no session exists', async () => {
      mockDoesSessionExist.mockResolvedValue(false);

      const session = await provider.getCurrentSession();

      expect(session).toBeNull();
    });

    it('returns null when user API call fails', async () => {
      mockDoesSessionExist.mockResolvedValue(true);
      mockGetUserId.mockResolvedValue('user-123');
      mockGetAccessToken.mockResolvedValue('access-token');
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: false,
      });

      const session = await provider.getCurrentSession();

      expect(session).toBeNull();
    });
  });

  describe('onAuthStateChange', () => {
    it('allows subscribing to auth state changes', () => {
      const listener = jest.fn();

      const unsubscribe = provider.onAuthStateChange(listener);

      expect(unsubscribe).toBeInstanceOf(Function);
    });

    it('allows unsubscribing from auth state changes', async () => {
      const listener = jest.fn();
      const unsubscribe = provider.onAuthStateChange(listener);

      mockSignOut.mockResolvedValue(undefined);
      await provider.signOut();

      expect(listener).toHaveBeenCalledTimes(1);

      listener.mockClear();
      unsubscribe();

      await provider.signOut();

      expect(listener).not.toHaveBeenCalled();
    });
  });

  describe('getHeaders', () => {
    it('returns empty headers (SuperTokens manages headers automatically)', () => {
      const headers = provider.getHeaders();

      expect(headers).toEqual({});
    });
  });

  describe('signInWithProvider', () => {
    it('returns not implemented error', async () => {
      const result = await provider.signInWithProvider({
        provider: 'google',
        redirectUrl: 'http://localhost:3001/callback',
      });

      expect(result.success).toBe(false);
      expect(result.error?.code).toBe('NOT_IMPLEMENTED');
    });
  });
});

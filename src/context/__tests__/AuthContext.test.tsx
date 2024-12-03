import { act, renderHook } from '@testing-library/react';
import { loginRequest } from '../../api/authentication.api';
import { storageUtils } from '../../utils/storageUtils';
import { AuthProvider, useAuth } from '../AuthContext';

jest.mock('../../api/authentication.api', () => ({
	loginRequest: jest.fn()
}));

jest.mock('../../utils/storageUtils', () => ({
	storageUtils: {
		getUser: jest.fn(),
		setUser: jest.fn(),
		clearUser: jest.fn()
	}
}));

describe('AuthContext', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const wrapper = ({ children }: { children: React.ReactNode }) => (
		<AuthProvider>{children}</AuthProvider>
	);

	test('should initialize with default values', () => {
		(storageUtils.getUser as jest.Mock).mockReturnValue(null);

		const { result } = renderHook(() => useAuth(), { wrapper });

		expect(result.current.isAuthenticated).toBe(false);
		expect(result.current.user).toBeNull();
		expect(result.current.isLoading).toBe(false);
	});

	test('should load user from localStorage on initialization', () => {
		(storageUtils.getUser as jest.Mock).mockReturnValue('TestUser');

		const { result } = renderHook(() => useAuth(), { wrapper });

		expect(result.current.isAuthenticated).toBe(true);
		expect(result.current.user).toBe('TestUser');
		expect(result.current.isLoading).toBe(false);
	});

	test('should handle login successfully', async () => {
		(loginRequest as jest.Mock).mockResolvedValue({
			username: 'TestUser',
			token: 'test-token'
		});

		const { result } = renderHook(() => useAuth(), { wrapper });

		await act(async () => {
			await result.current.login('testuser', 'password');
		});

		expect(result.current.isAuthenticated).toBe(true);
		expect(result.current.user).toBe('TestUser');
		expect(storageUtils.setUser).toHaveBeenCalledWith('TestUser');
	});

	test('should handle login failure', async () => {
		(loginRequest as jest.Mock).mockRejectedValue(
			new Error('Error login, Invalid credentials')
		);

		const { result } = renderHook(() => useAuth(), { wrapper });

		await act(async () => {
			await expect(
				result.current.login('wronguser', 'wrongpassword')
			).rejects.toThrow('Error login, Invalid credentials');
		});

		expect(result.current.isAuthenticated).toBe(false);
		expect(result.current.user).toBeNull();
		expect(storageUtils.setUser).not.toHaveBeenCalled();
	});

	test('should handle logout', () => {
		(storageUtils.getUser as jest.Mock).mockReturnValue('TestUser');

		const { result } = renderHook(() => useAuth(), { wrapper });

		act(() => {
			result.current.logout();
		});

		expect(result.current.isAuthenticated).toBe(false);
		expect(result.current.user).toBeNull();
		expect(storageUtils.clearUser).toHaveBeenCalled();
	});
});

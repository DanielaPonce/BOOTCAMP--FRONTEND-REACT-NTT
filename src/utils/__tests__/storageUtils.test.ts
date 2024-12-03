import { storageUtils } from '../storageUtils';

describe('storageUtils', () => {
	const USER_KEY = 'user';

	beforeEach(() => {
		localStorage.clear();
		jest.clearAllMocks();
	});

	test('should get user from localStorage', () => {
		localStorage.setItem(USER_KEY, 'TestUser');

		const user = storageUtils.getUser();

		expect(user).toBe('TestUser');
	});

	test('should return null if no user is found in localStorage', () => {
		const user = storageUtils.getUser();

		expect(user).toBeNull();
	});

	test('should set user in localStorage', () => {
		storageUtils.setUser('NewUser');

		const user = localStorage.getItem(USER_KEY);

		expect(user).toBe('NewUser');
	});

	test('should clear user from localStorage', () => {
		localStorage.setItem(USER_KEY, 'TestUser');

		storageUtils.clearUser();

		const user = localStorage.getItem(USER_KEY);

		expect(user).toBeNull();
	});
});

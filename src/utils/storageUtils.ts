const USER_KEY = 'user';

export const storageUtils = {
	getUser: (): string | null => {
		return localStorage.getItem(USER_KEY);
	},
	setUser: (username: string): void => {
		localStorage.setItem(USER_KEY, username);
	},
	clearUser: (): void => {
		localStorage.removeItem(USER_KEY);
	}
};

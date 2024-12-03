import { loginRequest } from '../authentication.api';
import { APIConstants } from '../../utils/APIConstants';
import fetchMock from 'jest-fetch-mock';

describe('loginRequest', () => {
	beforeEach(() => {
		fetchMock.resetMocks();
	});

	const mockResponse = {
		token: 'testToken',
		expiresIn: 1800,
		user: {
			id: 1,
			name: 'Test User',
			username: 'testuser'
		}
	};

	test('should make a POST request with the correct body and headers', async () => {
		fetchMock.mockResponseOnce(JSON.stringify(mockResponse), {
			status: 200
		});

		const result = await loginRequest('testuser', 'testpassword');

		expect(fetch).toHaveBeenCalledWith(
			`${APIConstants.API_BASE_URL}/auth/login`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					username: 'testuser',
					password: 'testpassword',
					expiresInMins: 30
				})
			}
		);

		expect(result).toEqual(mockResponse);
	});

	test('should throw an error if the response is not ok', async () => {
		const errorResponse = { message: 'Invalid credentials' };

		fetchMock.mockResponseOnce(JSON.stringify(errorResponse), {
			status: 401
		});

		await expect(
			loginRequest('wronguser', 'wrongpassword')
		).rejects.toThrow('Error login, Invalid credentials');

		expect(fetchMock).toHaveBeenCalledWith(
			`${APIConstants.API_BASE_URL}/auth/login`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					username: 'wronguser',
					password: 'wrongpassword',
					expiresInMins: 30
				})
			}
		);
	});

	test('should throw an error if fetch fails', async () => {
		fetchMock.mockRejectOnce(new Error('Network Error'));

		await expect(loginRequest('testuser', 'testpassword')).rejects.toThrow(
			'Network Error'
		);

		expect(fetchMock).toHaveBeenCalledWith(
			`${APIConstants.API_BASE_URL}/auth/login`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					username: 'testuser',
					password: 'testpassword',
					expiresInMins: 30
				})
			}
		);
	});
});

import { Login } from '../models/login.types';
import { APIConstants } from '../utils/APIConstants';

export async function loginRequest(
	username: string,
	password: string
): Promise<Login> {
	const requestBody = JSON.stringify({
		username: username,
		password: password,
		expiresInMins: 30
	});
	const response = await fetch(`${APIConstants.API_BASE_URL}/auth/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: requestBody
	});
	const data = await response.json();
	if (!response.ok) {
		throw new Error(`Error login, ${data.message}`);
	}
	return data;
}

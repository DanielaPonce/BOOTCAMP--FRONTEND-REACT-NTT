import { renderHook, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { useDistricts } from '../useDistricts';

describe('useDistricts Hook', () => {
	const mockDistricts = [
		{ id: 1, name: 'San Isidro' },
		{ id: 2, name: 'Miraflores' }
	];

	beforeEach(() => {
		fetchMock.resetMocks();
	});

	test('fetches districts and updates state', async () => {
		fetchMock.mockResponseOnce(JSON.stringify(mockDistricts));

		const { result } = renderHook(() => useDistricts());

		expect(result.current).toEqual([]);

		await waitFor(() => {
			expect(result.current).toEqual(mockDistricts);
		});

		expect(fetchMock).toHaveBeenCalledTimes(1);
		expect(fetchMock).toHaveBeenCalledWith(
			'/src/assets/mock/districts.json'
		);
	});
});

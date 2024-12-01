import { mapCategories } from '../../mappers/category.mapper';
import { Category, CategoryAPIResponse } from '../../models/category.types';
import { APIConstants } from '../../utils/APIConstants';
import { fetchAllCategories } from '../category.api';
import fetchMock from 'jest-fetch-mock';

jest.mock('../../mappers/category.mapper');

describe('fetchAllCategories', () => {
	const mockApiResponse: CategoryAPIResponse[] = [
		{
			slug: 'category-1',
			name: 'Category 1',
			url: 'http://example.com/category-1'
		},
		{
			slug: 'category-2',
			name: 'Category 2',
			url: 'http://example.com/category-2'
		}
	];

	const mockMappedCategories: Category[] = [
		{ slug: 'category-1', name: 'Category 1' },
		{ slug: 'category-2', name: 'Category 2' }
	];

	beforeEach(() => {
		jest.clearAllMocks();
		fetchMock.resetMocks();
	});

	test('fetches categories and maps them correctly', async () => {
		fetchMock.mockResponseOnce(JSON.stringify(mockApiResponse));
		(mapCategories as jest.Mock).mockReturnValue(mockMappedCategories);

		const result = await fetchAllCategories();

		expect(result).toEqual(mockMappedCategories);

		expect(fetchMock).toHaveBeenCalledTimes(1);
		expect(fetchMock).toHaveBeenCalledWith(
			`${APIConstants.API_BASE_URL}/products/categories`
		);

		expect(mapCategories).toHaveBeenCalledTimes(1);
		expect(mapCategories).toHaveBeenCalledWith(mockApiResponse);
	});

	test('throws an error if the API response is not ok', async () => {
		fetchMock.mockResponseOnce('', { status: 500 });

		await expect(fetchAllCategories()).rejects.toThrow(
			'Error fetching categories, 500'
		);

		expect(fetchMock).toHaveBeenCalledTimes(1);
		expect(fetchMock).toHaveBeenCalledWith(
			`${APIConstants.API_BASE_URL}/products/categories`
		);

		expect(mapCategories).not.toHaveBeenCalled();
	});
});

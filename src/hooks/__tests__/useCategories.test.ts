import { renderHook, waitFor } from '@testing-library/react';
import { fetchAllCategories } from '../../api/category.api';
import { Category } from '../../models/category.types';
import { useCategories } from '../useCategories';

jest.mock('../../api/category.api');

describe('useCategories Hook', () => {
	const mockCategories: Category[] = [
		{ name: 'Electronics', slug: 'electronics' },
		{ name: 'Books', slug: 'books' }
	];

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('fetches categories and updates state', async () => {
		(fetchAllCategories as jest.Mock).mockResolvedValue(mockCategories);

		const { result } = renderHook(() => useCategories());

		expect(result.current.categories).toEqual([]);

		await waitFor(() => {
			expect(result.current.categories).toEqual(mockCategories);
		});

		expect(fetchAllCategories).toHaveBeenCalledTimes(1);
	});
});

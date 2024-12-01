import { act, renderHook, waitFor } from '@testing-library/react';
import {
	fetchAllProducts,
	fetchProductsByCategory
} from '../../api/product.api';
import { Product } from '../../models/product.types';
import { StaticTexts } from '../../utils/staticTexts';
import { StaticValues } from '../../utils/staticValues';
import { useProducts } from '../useProducts';

jest.mock('../../api/product.api');

describe('useProducts Hook', () => {
	const mockProducts: Product[] = [
		{
			id: 1,
			title: 'Product 1',
			description: '',
			price: 10,
			thumbnail: '',
			category: 'category1'
		},
		{
			id: 2,
			title: 'Product 2',
			description: '',
			price: 20,
			thumbnail: '',
			category: 'category1'
		},
		{
			id: 3,
			title: 'Product 3',
			description: '',
			price: 30,
			thumbnail: '',
			category: 'category2'
		}
	];

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('fetches all products when category is default', async () => {
		(fetchAllProducts as jest.Mock).mockResolvedValue(mockProducts);

		const { result } = renderHook(() =>
			useProducts(StaticTexts.DefaultSelectValue, '')
		);

		expect(result.current.isLoading).toBe(true);
		expect(result.current.products).toEqual([]);

		await waitFor(() => {
			expect(result.current.isLoading).toBe(false);
		});

		expect(result.current.products).toEqual(
			mockProducts.slice(0, StaticValues.ItemsPerPage)
		);
		expect(result.current.totalPages).toBe(
			Math.ceil(mockProducts.length / StaticValues.ItemsPerPage)
		);
		expect(fetchAllProducts).toHaveBeenCalledTimes(1);
		expect(fetchProductsByCategory).not.toHaveBeenCalled();
	});

	test('fetches products by category', async () => {
		const category = 'category1';
		const filteredProducts = mockProducts.filter(
			(product) => product.category === category
		);
		(fetchProductsByCategory as jest.Mock).mockResolvedValue(
			filteredProducts
		);

		const { result } = renderHook(() => useProducts(category, ''));

		expect(result.current.isLoading).toBe(true);
		expect(result.current.products).toEqual([]);

		await waitFor(() => {
			expect(result.current.isLoading).toBe(false);
		});

		expect(result.current.products).toEqual(
			filteredProducts.slice(0, StaticValues.ItemsPerPage)
		);
		expect(result.current.totalPages).toBe(
			Math.ceil(filteredProducts.length / StaticValues.ItemsPerPage)
		);
		expect(fetchAllProducts).not.toHaveBeenCalled();
		expect(fetchProductsByCategory).toHaveBeenCalledTimes(1);
		expect(fetchProductsByCategory).toHaveBeenCalledWith(category);
	});

	test('filters products by search query', async () => {
		(fetchAllProducts as jest.Mock).mockResolvedValue(mockProducts);

		const { result } = renderHook(() =>
			useProducts(StaticTexts.DefaultSelectValue, '')
		);

		await waitFor(() => {
			expect(result.current.isLoading).toBe(false);
		});

		act(() => {
			result.current.setCurrentPage(1);
		});

		act(() => {
			result.current.setCurrentPage(1);
		});

		await waitFor(() => {
			expect(result.current.products).toEqual(
				mockProducts.filter((product) =>
					product.title
						.toLowerCase()
						.includes('Product'.toLowerCase())
				)
			);
		});
	});

	test('handles pagination', async () => {
		(fetchAllProducts as jest.Mock).mockResolvedValue(mockProducts);

		const { result } = renderHook(() =>
			useProducts(StaticTexts.DefaultSelectValue, '')
		);

		await waitFor(() => {
			expect(result.current.isLoading).toBe(false);
		});

		expect(result.current.currentPage).toBe(1);
		expect(result.current.products).toEqual(
			mockProducts.slice(0, StaticValues.ItemsPerPage)
		);

		act(() => {
			result.current.setCurrentPage(2);
		});

		expect(result.current.currentPage).toBe(2);
		expect(result.current.products).toEqual(
			mockProducts.slice(
				StaticValues.ItemsPerPage,
				StaticValues.ItemsPerPage * 2
			)
		);
	});
});

import fetchMock from 'jest-fetch-mock';
import { mapProducts } from '../../mappers/product.mapper';
import {
	AvailabilityStatus,
	Product,
	ProductAPIResponse,
	ReturnPolicy
} from '../../models/product.types';
import { APIConstants } from '../../utils/APIConstants';
import { fetchAllProducts, fetchProductsByCategory } from '../product.api';

jest.mock('../../mappers/product.mapper');

describe('Product API Methods', () => {
	const mockApiResponse: ProductAPIResponse = {
		products: [
			{
				id: 1,
				title: 'Product 1',
				description: 'Description for product 1',
				category: 'category1',
				price: 100,
				thumbnail: 'http://example.com/product1.jpg',
				discountPercentage: 10,
				rating: 4.5,
				stock: 50,
				tags: ['tag1', 'tag2'],
				brand: 'Brand 1',
				sku: 'SKU1',
				weight: 1.5,
				dimensions: { width: 10, height: 5, depth: 2 },
				warrantyInformation: '1 year warranty',
				shippingInformation: 'Ships in 24 hours',
				availabilityStatus: AvailabilityStatus.InStock,
				reviews: [],
				returnPolicy: ReturnPolicy.The30DaysReturnPolicy,
				minimumOrderQuantity: 1,
				meta: {
					createdAt: '2024-12-01T02:31:10.100Z',
					updatedAt: '2024-12-01T02:31:10.100Z',
					barcode: '12345',
					qrCode: 'QR1'
				},
				images: ['http://example.com/image1.jpg']
			}
		],
		total: 1,
		skip: 0,
		limit: 10
	};

	const mockMappedProducts: Product[] = [
		{
			id: 1,
			title: 'Product 1',
			description: 'Description for product 1',
			category: 'category1',
			price: 100,
			thumbnail: 'http://example.com/product1.jpg'
		}
	];

	beforeEach(() => {
		jest.clearAllMocks();
		fetchMock.resetMocks();
	});

	describe('fetchAllProducts', () => {
		test('fetches all products and maps them correctly', async () => {
			fetchMock.mockResponseOnce(JSON.stringify(mockApiResponse));
			(mapProducts as jest.Mock).mockReturnValue(mockMappedProducts);

			const result = await fetchAllProducts();

			expect(result).toEqual(mockMappedProducts);

			expect(fetchMock).toHaveBeenCalledTimes(1);
			expect(fetchMock).toHaveBeenCalledWith(
				`${APIConstants.API_BASE_URL}/products`
			);

			expect(mapProducts).toHaveBeenCalledTimes(1);
			expect(mapProducts).toHaveBeenCalledWith(mockApiResponse);
		});

		test('throws an error if the API response is not ok', async () => {
			fetchMock.mockResponseOnce('', { status: 500 });

			await expect(fetchAllProducts()).rejects.toThrow(
				'Error fetching products, 500'
			);

			expect(fetchMock).toHaveBeenCalledTimes(1);
			expect(fetchMock).toHaveBeenCalledWith(
				`${APIConstants.API_BASE_URL}/products`
			);

			expect(mapProducts).not.toHaveBeenCalled();
		});
	});

	describe('fetchProductsByCategory', () => {
		const category = 'category1';

		test('fetches products by category and maps them correctly', async () => {
			fetchMock.mockResponseOnce(JSON.stringify(mockApiResponse));
			(mapProducts as jest.Mock).mockReturnValue(mockMappedProducts);

			const result = await fetchProductsByCategory(category);

			expect(result).toEqual(mockMappedProducts);

			expect(fetchMock).toHaveBeenCalledTimes(1);
			expect(fetchMock).toHaveBeenCalledWith(
				`${APIConstants.API_BASE_URL}/products/category/${category}`
			);

			expect(mapProducts).toHaveBeenCalledTimes(1);
			expect(mapProducts).toHaveBeenCalledWith(mockApiResponse);
		});

		test('throws an error if the API response is not ok', async () => {
			fetchMock.mockResponseOnce('', { status: 404 });

			await expect(fetchProductsByCategory(category)).rejects.toThrow(
				'Error fetching products by category, 404'
			);

			expect(fetchMock).toHaveBeenCalledTimes(1);
			expect(fetchMock).toHaveBeenCalledWith(
				`${APIConstants.API_BASE_URL}/products/category/${category}`
			);

			expect(mapProducts).not.toHaveBeenCalled();
		});
	});
});

import {
	AvailabilityStatus,
	Product,
	ProductAPIResponse,
	ProductElement,
	ReturnPolicy
} from '../../models/product.types';
import { mapProduct, mapProducts } from '../product.mapper';

describe('Product Mappers', () => {
	const mockApiProduct: ProductElement = {
		id: 1,
		title: 'Test Product',
		description: 'A product for testing',
		category: 'test-category',
		price: 100,
		discountPercentage: 10,
		rating: 4.5,
		stock: 50,
		tags: ['test', 'product'],
		brand: 'TestBrand',
		sku: 'TEST123',
		weight: 1.5,
		dimensions: { width: 10, height: 5, depth: 2 },
		warrantyInformation: '2 years warranty',
		shippingInformation: 'Ships in 24 hours',
		availabilityStatus: AvailabilityStatus.InStock,
		reviews: [],
		returnPolicy: ReturnPolicy.The30DaysReturnPolicy,
		minimumOrderQuantity: 1,
		meta: {
			createdAt: '2024-12-01T02:31:10.100Z',
			updatedAt: '2024-12-01T02:31:10.100Z',
			barcode: '123456789',
			qrCode: 'QR123'
		},
		images: ['http://example.com/image1.jpg'],
		thumbnail: 'http://example.com/thumbnail.jpg'
	};

	const mockApiProducts: ProductAPIResponse = {
		products: [
			{
				id: 1,
				title: 'Test Product 1',
				description: 'A product for testing 1',
				category: 'category1',
				price: 50,
				discountPercentage: 5,
				rating: 4.0,
				stock: 100,
				tags: ['test', 'product1'],
				brand: 'Brand1',
				sku: 'SKU123',
				weight: 2.0,
				dimensions: { width: 12, height: 6, depth: 3 },
				warrantyInformation: '1 year warranty',
				shippingInformation: 'Ships in 48 hours',
				availabilityStatus: AvailabilityStatus.LowStock,
				reviews: [],
				returnPolicy: ReturnPolicy.The7DaysReturnPolicy,
				minimumOrderQuantity: 1,
				meta: {
					createdAt: '2024-12-01T02:31:10.100Z',
					updatedAt: '2024-12-01T02:31:10.100Z',
					barcode: '987654321',
					qrCode: 'QR456'
				},
				images: ['http://example.com/image2.jpg'],
				thumbnail: 'http://example.com/thumbnail2.jpg'
			},
			{
				id: 2,
				title: 'Test Product 2',
				description: 'A product for testing 2',
				category: 'category2',
				price: 75,
				discountPercentage: 7,
				rating: 4.2,
				stock: 150,
				tags: ['test', 'product2'],
				brand: 'Brand2',
				sku: 'SKU456',
				weight: 3.0,
				dimensions: { width: 15, height: 8, depth: 4 },
				warrantyInformation: '2 years warranty',
				shippingInformation: 'Ships in 24 hours',
				availabilityStatus: AvailabilityStatus.InStock,
				reviews: [],
				returnPolicy: ReturnPolicy.The7DaysReturnPolicy,
				minimumOrderQuantity: 1,
				meta: {
					createdAt: '2024-12-01T02:31:10.100Z',
					updatedAt: '2024-12-01T02:31:10.100Z',
					barcode: '654321789',
					qrCode: 'QR789'
				},
				images: ['http://example.com/image3.jpg'],
				thumbnail: 'http://example.com/thumbnail3.jpg'
			}
		],
		total: 2,
		skip: 0,
		limit: 10
	};

	const expectedMappedProduct: Product = {
		id: 1,
		title: 'Test Product',
		description: 'A product for testing',
		category: 'test-category',
		price: 100,
		thumbnail: 'http://example.com/thumbnail.jpg'
	};

	const expectedMappedProducts: Product[] = [
		{
			id: 1,
			title: 'Test Product 1',
			description: 'A product for testing 1',
			category: 'category1',
			price: 50,
			thumbnail: 'http://example.com/thumbnail2.jpg'
		},
		{
			id: 2,
			title: 'Test Product 2',
			description: 'A product for testing 2',
			category: 'category2',
			price: 75,
			thumbnail: 'http://example.com/thumbnail3.jpg'
		}
	];

	test('mapProduct correctly maps a single product', () => {
		const result = mapProduct(mockApiProduct);
		expect(result).toEqual(expectedMappedProduct);
	});

	test('mapProducts correctly maps an array of products', () => {
		const result = mapProducts(mockApiProducts);
		expect(result).toEqual(expectedMappedProducts);
	});

	test('mapProducts returns an empty array when input is empty', () => {
		const emptyApiProducts: ProductAPIResponse = {
			products: [],
			total: 0,
			skip: 0,
			limit: 10
		};
		const result = mapProducts(emptyApiProducts);
		expect(result).toEqual([]);
	});
});

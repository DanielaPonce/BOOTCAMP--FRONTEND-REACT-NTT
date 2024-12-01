import { Category, CategoryAPIResponse } from '../../models/category.types';
import { mapCategories, mapCategory } from '../category.mapper';

describe('Category Mappers', () => {
	const mockApiCategory: CategoryAPIResponse = {
		slug: 'test-category',
		name: 'Test Category',
		url: 'http://example.com/test-category'
	};

	const mockApiCategories: CategoryAPIResponse[] = [
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

	const expectedMappedCategory: Category = {
		slug: 'test-category',
		name: 'Test Category'
	};

	const expectedMappedCategories: Category[] = [
		{
			slug: 'category-1',
			name: 'Category 1'
		},
		{
			slug: 'category-2',
			name: 'Category 2'
		}
	];

	test('mapCategory correctly maps a single category', () => {
		const result = mapCategory(mockApiCategory);
		expect(result).toEqual(expectedMappedCategory);
	});

	test('mapCategories correctly maps an array of categories', () => {
		const result = mapCategories(mockApiCategories);
		expect(result).toEqual(expectedMappedCategories);
	});

	test('mapCategories returns an empty array when input is empty', () => {
		const result = mapCategories([]);
		expect(result).toEqual([]);
	});
});

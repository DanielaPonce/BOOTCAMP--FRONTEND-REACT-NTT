import { Category, CategoryAPIResponse } from '../models/category.types';

export function mapCategory(category: CategoryAPIResponse): Category {
	return {
		slug: category.slug,
		name: category.name
	};
}

export function mapCategories(categories: CategoryAPIResponse[]): Category[] {
	return categories.map(mapCategory);
}

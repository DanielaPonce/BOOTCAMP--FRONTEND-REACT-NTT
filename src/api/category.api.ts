import { mapCategories } from '../mappers/category.mapper';
import { Category } from '../models/category.types';
import { APIConstants } from '../utils/APIConstants';

export async function fetchAllCategories(): Promise<Category[]> {
	const response = await fetch(
		`${APIConstants.API_BASE_URL}/products/categories`
	);
	if (!response.ok) {
		throw new Error(`Error fetching categories, ${response.status}`);
	}
	const data = await response.json();
	return mapCategories(data);
}

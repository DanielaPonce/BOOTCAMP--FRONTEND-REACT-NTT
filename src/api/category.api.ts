import { mapCategories } from '../mappers/category.mapper';
import { Category } from '../models/category.types';

const API_BASE_URL = 'https://dummyjson.com';

export async function fetchAllCategories(): Promise<Category[]> {
	const response = await fetch(`${API_BASE_URL}/products/categories`);
	if (!response.ok) {
		throw new Error(`Error fetching categories, ${response.status}`);
	}
	const data = await response.json();
	return mapCategories(data);
}

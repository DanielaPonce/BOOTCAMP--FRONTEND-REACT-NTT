import { mapProducts } from '../mappers/product.mapper';
import { Product } from '../models/product.types';

const API_BASE_URL = 'https://dummyjson.com';

export async function fetchAllProducts(): Promise<Product[]> {
	const response = await fetch(`${API_BASE_URL}/products`);
	if (!response.ok) {
		throw new Error(`Error fetching products, ${response.status}`);
	}
	const data = await response.json();
	return mapProducts(data);
}

export async function fetchProductsByCategory(
	category: string
): Promise<Product[]> {
	const response = await fetch(
		`${API_BASE_URL}/products/category/${category}`
	);
	if (!response.ok) {
		throw new Error(
			`Error fetching products by category, ${response.status}`
		);
	}
	const data = await response.json();
	return mapProducts(data);
}

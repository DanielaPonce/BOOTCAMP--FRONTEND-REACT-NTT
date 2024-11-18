import {
	Product,
	ProductAPIResponse,
	ProductElement
} from '../models/product.types';

export function mapProduct(apiProduct: ProductElement): Product {
	return {
		id: apiProduct.id,
		title: apiProduct.title,
		description: apiProduct.description,
		category: apiProduct.category,
		price: apiProduct.price,
		thumbnail: apiProduct.thumbnail
	};
}

export function mapProducts(apiProducts: ProductAPIResponse): Product[] {
	return apiProducts.products.map(mapProduct);
}

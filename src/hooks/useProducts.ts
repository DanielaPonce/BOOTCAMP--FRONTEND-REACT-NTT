import { useEffect, useState } from 'react';
import { fetchAllProducts, fetchProductsByCategory } from '../api/product.api';
import { Product } from '../models/product.types';
import { Constants } from '../utils/constants';

export const useProducts = (category: string, search: string) => {
	const [allProducts, setAllProducts] = useState<Product[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 8;

	const loadProducts = async () => {
		setIsLoading(true);
		try {
			let products: Product[] = [];
			if (category === Constants.defaultSelectValue) {
				products = await fetchAllProducts();
			} else {
				products = await fetchProductsByCategory(category);
			}
			setAllProducts(products);
			setFilteredProducts(products);
			setCurrentPage(1);
		} catch (error) {
			console.log('Error al cargar los productos:', error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		loadProducts();
	}, [category]);

	useEffect(() => {
		const filtered = allProducts.filter((product) =>
			product.title.toLowerCase().includes(search.toLowerCase())
		);
		setFilteredProducts(filtered);
		setCurrentPage(1);
	}, [search, allProducts]);

	const paginatedProducts = filteredProducts.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

	return {
		products: paginatedProducts,
		isLoading,
		totalPages,
		currentPage,
		setCurrentPage,
		showPagination: totalPages !== 1
	};
};

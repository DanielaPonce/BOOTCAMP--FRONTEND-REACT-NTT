import { useEffect, useState } from 'react';
import { fetchAllProducts, fetchProductsByCategory } from '../api/product.api';
import { Product } from '../models/product.types';
import { StaticTexts } from '../utils/staticTexts';
import { StaticValues } from '../utils/staticValues';

export const useProducts = (category: string, search: string) => {
	const [allProducts, setAllProducts] = useState<Product[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);

	const loadProducts = async () => {
		setIsLoading(true);
		try {
			let products: Product[] = [];
			if (category === StaticTexts.DefaultSelectValue) {
				products = await fetchAllProducts();
			} else {
				products = await fetchProductsByCategory(category);
			}
			setAllProducts(products);
			setFilteredProducts(products);
			setCurrentPage(StaticValues.FirstPaginatorPage);
		} catch (error) {
			// falta cubrir este caso
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
		(currentPage - 1) * StaticValues.ItemsPerPage,
		currentPage * StaticValues.ItemsPerPage
	);

	const totalPages = Math.ceil(
		filteredProducts.length / StaticValues.ItemsPerPage
	);

	return {
		products: paginatedProducts,
		isLoading,
		totalPages,
		currentPage,
		setCurrentPage,
		showPagination: totalPages !== 1
	};
};

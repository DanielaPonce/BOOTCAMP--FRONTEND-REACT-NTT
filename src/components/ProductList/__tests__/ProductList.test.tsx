import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../ProductList';
import ProductCard from '../ProductCard';
import { Product } from '../../../models/product.types';

jest.mock('../ProductCard', () =>
	jest.fn(() => <div data-testid="product-card"></div>)
);

describe('ProductList Component', () => {
	const mockProducts: Product[] = [
		{
			id: 1,
			title: 'Producto 1',
			description: 'Descripción 1',
			price: 10.0,
			thumbnail: 'https://via.placeholder.com/150',
			category: 'Categoría 1'
		},
		{
			id: 2,
			title: 'Producto 2',
			description: 'Descripción 2',
			price: 20.0,
			thumbnail: 'https://via.placeholder.com/150',
			category: 'Categoría 2'
		}
	];

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('renders the correct number of ProductCard components', () => {
		render(<ProductList products={mockProducts} />);

		const productCards = screen.getAllByTestId('product-card');
		expect(productCards).toHaveLength(mockProducts.length);
	});

	test('renders no ProductCard components when product list is empty', () => {
		render(<ProductList products={[]} />);

		const productCards = screen.queryByTestId('product-card');
		expect(productCards).toBeNull();
	});

	test('passes correct props to ProductCard', () => {
		render(<ProductList products={mockProducts} />);

		mockProducts.forEach((product, index) => {
			expect(ProductCard).toHaveBeenNthCalledWith(
				index + 1,
				{ ...product },
				{}
			);
		});
	});

	test('matches snapshot', () => {
		const { asFragment } = render(<ProductList products={mockProducts} />);
		expect(asFragment()).toMatchSnapshot();
	});
});

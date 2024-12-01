import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { jest } from '@jest/globals';
import ProductCard from '../ProductCard';
import { useCart } from '../../../hooks/useCart';

jest.mock('../../../hooks/useCart');

describe('ProductCard Component', () => {
	const mockAddToCart = jest.fn();
	const mockProduct = {
		id: 1,
		title: 'Producto de prueba',
		description: 'Descripción del producto de prueba',
		price: 99.99,
		thumbnail: 'https://via.placeholder.com/150',
		category: 'Categoría de prueba'
	};

	beforeEach(() => {
		jest.clearAllMocks();
		(useCart as jest.Mock).mockReturnValue({ addToCart: mockAddToCart });
	});

	test('renders correctly', () => {
		render(<ProductCard {...mockProduct} />);

		const image = screen.getByAltText(mockProduct.title);
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute('src', mockProduct.thumbnail);

		expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
		expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
		expect(
			screen.getByText(`Precio: S/ ${mockProduct.price}`)
		).toBeInTheDocument();
		expect(screen.getByText(mockProduct.category)).toBeInTheDocument();

		const button = screen.getByRole('button', {
			name: /Agregar al carrito/i
		});
		expect(button).toBeInTheDocument();
	});

	test('calls addToCart with correct product when button is clicked', () => {
		render(<ProductCard {...mockProduct} />);

		const button = screen.getByRole('button', {
			name: /Agregar al carrito/i
		});
		fireEvent.click(button);

		expect(mockAddToCart).toHaveBeenCalledTimes(1);
		expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
	});

	test('matches snapshot', () => {
		const { asFragment } = render(<ProductCard {...mockProduct} />);
		expect(asFragment()).toMatchSnapshot();
	});
});

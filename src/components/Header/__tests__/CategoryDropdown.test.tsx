import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryDropdown from '../CategoryDropdown';
import { Category } from '../../../models/category.types';

describe('CategoryDropdown Component', () => {
	const mockCategories: Category[] = [
		{ name: 'Electronics', slug: 'electronics' },
		{ name: 'Books', slug: 'books' },
		{ name: 'Clothing', slug: 'clothing' }
	];

	const mockOnSelectCategory = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('renders correctly', () => {
		render(
			<CategoryDropdown
				categories={mockCategories}
				onSelectCategory={mockOnSelectCategory}
			/>
		);

		const dropdown = screen.getByRole('combobox');
		expect(dropdown).toBeInTheDocument();

		const defaultOption = screen.getByText('Todas las categorias');
		expect(defaultOption).toBeInTheDocument();

		mockCategories.forEach(({ name }) => {
			expect(screen.getByText(name)).toBeInTheDocument();
		});
	});

	test('calls onSelectCategory with the correct value when a category is selected', () => {
		render(
			<CategoryDropdown
				categories={mockCategories}
				onSelectCategory={mockOnSelectCategory}
			/>
		);

		const dropdown = screen.getByRole('combobox');

		// Simula seleccionar la categoría "Books"
		fireEvent.change(dropdown, { target: { value: 'books' } });

		expect(mockOnSelectCategory).toHaveBeenCalledTimes(1);
		expect(mockOnSelectCategory).toHaveBeenCalledWith('books');
	});

	test('matches snapshot', () => {
		const { asFragment } = render(
			<CategoryDropdown
				categories={mockCategories}
				onSelectCategory={mockOnSelectCategory}
			/>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

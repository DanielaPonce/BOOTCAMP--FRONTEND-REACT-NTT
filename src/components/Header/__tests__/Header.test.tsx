import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { useCategories } from '../../../hooks/useCategories';
import { RoutesConstants } from '../../../utils/routes';
import Header from '../Header';
import { Category } from '../../../models/category.types';

jest.mock('../../../hooks/useCategories', () => ({
	__esModule: true,
	useCategories: jest.fn()
}));

jest.mock('../CartCounter', () => ({
	__esModule: true,
	default: jest.fn(() => <div data-testid="cart-counter">CartCounter</div>)
}));

jest.mock('../SearchBar', () => ({
	__esModule: true,
	default: jest.fn(({ onInputSearch }) => (
		<input
			data-testid="search-bar"
			type="search"
			onChange={(e) => onInputSearch(e.target.value)}
			placeholder="Search"
		/>
	))
}));

jest.mock('../CategoryDropdown', () => ({
	__esModule: true,
	default: jest.fn(({ categories, onSelectCategory }) => (
		<select
			data-testid="category-dropdown"
			onChange={(e) => onSelectCategory(e.target.value)}
		>
			{categories.map((category: Category) => (
				<option key={category.slug} value={category.slug}>
					{category.name}
				</option>
			))}
		</select>
	))
}));

describe('Header Component', () => {
	const mockCategories = [
		{ slug: 'category1', name: 'Category 1' },
		{ slug: 'category2', name: 'Category 2' }
	];

	beforeEach(() => {
		jest.clearAllMocks();
		(useCategories as jest.Mock).mockReturnValue({
			categories: mockCategories
		});
	});

	test('renders Header with logo, search bar, category dropdown, and cart counter', () => {
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		);

		expect(screen.getByAltText('Logo')).toBeInTheDocument();

		expect(screen.getByTestId('search-bar')).toBeInTheDocument();

		expect(screen.getByTestId('category-dropdown')).toBeInTheDocument();

		expect(screen.getByTestId('cart-counter')).toBeInTheDocument();
	});

	test('hides search bar and dropdown on /summary route', () => {
		render(
			<MemoryRouter initialEntries={[RoutesConstants.Summary]}>
				<Header />
			</MemoryRouter>
		);

		expect(screen.queryByTestId('search-bar')).not.toBeInTheDocument();
		expect(
			screen.queryByTestId('category-dropdown')
		).not.toBeInTheDocument();

		expect(screen.getByTestId('cart-counter')).toBeInTheDocument();
	});

	test('calls onSearch when typing in the search bar', () => {
		const mockOnSearch = jest.fn();
		render(
			<MemoryRouter>
				<Header onSearch={mockOnSearch} />
			</MemoryRouter>
		);

		const searchBar = screen.getByTestId('search-bar');
		fireEvent.change(searchBar, { target: { value: 'query' } });

		expect(mockOnSearch).toHaveBeenCalledWith('query');
	});

	test('calls onFilterCategory when selecting a category', () => {
		const mockOnFilterCategory = jest.fn();
		render(
			<MemoryRouter>
				<Header onFilterCategory={mockOnFilterCategory} />
			</MemoryRouter>
		);

		const dropdown = screen.getByTestId('category-dropdown');
		fireEvent.change(dropdown, { target: { value: 'category1' } });

		expect(mockOnFilterCategory).toHaveBeenCalledWith('category1');
	});

	test('matches snapshot', () => {
		const { asFragment } = render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

import { jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Paginator from '../../components/ProductList/Paginator';
import ProductList from '../../components/ProductList/ProductList';
import Spinner from '../../components/Spinner/Spinner';
import { useProducts } from '../../hooks/useProducts';
import HomePage from '../HomePage';

jest.mock('../../hooks/useProducts');

jest.mock('../../components/Header/Header', () => ({
	__esModule: true,
	default: jest.fn(
		(props: {
			onSearch: (value: string) => void;
			onFilterCategory: (value: string) => void;
		}) => {
			const { onSearch, onFilterCategory } = props;
			return (
				<div>
					<input
						data-testid="search-input"
						onChange={(e) => onSearch(e.target.value)}
					/>
					<select
						data-testid="category-select"
						onChange={(e) => onFilterCategory(e.target.value)}
					>
						<option value="all">All</option>
						<option value="category1">Category 1</option>
					</select>
				</div>
			);
		}
	)
}));

jest.mock('../../components/Footer/Footer', () => ({
	__esModule: true,
	default: jest.fn(() => <footer>Footer</footer>)
}));

jest.mock('../../components/Spinner/Spinner', () => ({
	__esModule: true,
	default: jest.fn(() => <div>Loading...</div>)
}));

jest.mock('../../components/ProductList/ProductList', () => ({
	__esModule: true,
	default: jest.fn((props: { products: any[] }) => {
		const { products } = props;
		return (
			<div>
				{products.map((product) => (
					<div key={product.id}>{product.title}</div>
				))}
			</div>
		);
	})
}));

jest.mock('../../components/ProductList/Paginator', () => ({
	__esModule: true,
	default: jest.fn(
		(props: {
			currentPage: number;
			totalPages: number;
			onPageChange: (page: number) => void;
		}) => {
			const { currentPage, totalPages, onPageChange } = props;
			return (
				<div>
					<button
						data-testid="prev-page"
						onClick={() => onPageChange(currentPage - 1)}
						disabled={currentPage === 1}
					>
						Previous
					</button>
					<span>{`Page ${currentPage} of ${totalPages}`}</span>
					<button
						data-testid="next-page"
						onClick={() => onPageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
					>
						Next
					</button>
				</div>
			);
		}
	)
}));

describe('HomePage Component', () => {
	const mockProducts = [
		{
			id: 1,
			title: 'Product 1',
			description: 'Description for product 1',
			category: 'category1',
			price: 100,
			thumbnail: 'http://example.com/product1.jpg'
		}
	];

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('renders Header, Footer, and Spinner when loading', () => {
		(useProducts as jest.Mock).mockReturnValue({
			products: [],
			isLoading: true,
			totalPages: 1,
			currentPage: 1,
			setCurrentPage: jest.fn(),
			showPagination: false
		});

		render(<HomePage />);

		expect(Header).toHaveBeenCalled();
		expect(Spinner).toHaveBeenCalled();
		expect(Footer).toHaveBeenCalled();
		expect(ProductList).not.toHaveBeenCalled();
		expect(Paginator).not.toHaveBeenCalled();
	});

	test('renders ProductList and Paginator when not loading', () => {
		const mockSetCurrentPage = jest.fn();

		(useProducts as jest.Mock).mockReturnValue({
			products: mockProducts,
			isLoading: false,
			totalPages: 2,
			currentPage: 1,
			setCurrentPage: mockSetCurrentPage,
			showPagination: true
		});

		render(<HomePage />);

		expect(ProductList).toHaveBeenCalledWith(
			{ products: mockProducts },
			expect.anything()
		);
		expect(Paginator).toHaveBeenCalledWith(
			{
				currentPage: 1,
				totalPages: 2,
				onPageChange: mockSetCurrentPage
			},
			expect.anything()
		);
	});

	test('updates search and category filters', () => {
		const mockSetCurrentPage = jest.fn();

		(useProducts as jest.Mock).mockReturnValue({
			products: mockProducts,
			isLoading: false,
			totalPages: 1,
			currentPage: 1,
			setCurrentPage: mockSetCurrentPage,
			showPagination: false
		});

		render(<HomePage />);

		const searchInput = screen.getByTestId('search-input');
		const categorySelect = screen.getByTestId('category-select');

		fireEvent.change(searchInput, { target: { value: 'Product' } });
		fireEvent.change(categorySelect, { target: { value: 'category1' } });

		expect(Header).toHaveBeenCalled();
	});

	test('paginates correctly', () => {
		const mockSetCurrentPage = jest.fn();

		(useProducts as jest.Mock).mockReturnValue({
			products: mockProducts,
			isLoading: false,
			totalPages: 2,
			currentPage: 1,
			setCurrentPage: mockSetCurrentPage,
			showPagination: true
		});

		render(<HomePage />);

		const nextPageButton = screen.getByTestId('next-page');

		fireEvent.click(nextPageButton);

		expect(mockSetCurrentPage).toHaveBeenCalledWith(2);
	});

	test('matches snapshot', () => {
		(useProducts as jest.Mock).mockReturnValue({
			products: mockProducts,
			isLoading: false,
			totalPages: 1,
			currentPage: 1,
			setCurrentPage: jest.fn(),
			showPagination: false
		});

		const { asFragment } = render(<HomePage />);
		expect(asFragment()).toMatchSnapshot();
	});
});

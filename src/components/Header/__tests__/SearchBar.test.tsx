import { jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { StaticTexts } from '../../../utils/staticTexts';
import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {
	const mockOnInputSearch = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('renders correctly', () => {
		render(<SearchBar onInputSearch={mockOnInputSearch} />);

		const input = screen.getByRole('searchbox');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('type', 'search');
		expect(input).toHaveAttribute(
			'placeholder',
			StaticTexts.SearchBarPlaceholder
		);
	});

	test('calls onInputSearch when typing in the search input', () => {
		render(<SearchBar onInputSearch={mockOnInputSearch} />);

		const input = screen.getByRole('searchbox');
		fireEvent.input(input, { target: { value: 'test query' } });

		expect(mockOnInputSearch).toHaveBeenCalledTimes(1);
		expect(mockOnInputSearch).toHaveBeenCalledWith('test query');
	});

	test('matches snapshot', () => {
		const { asFragment } = render(
			<SearchBar onInputSearch={mockOnInputSearch} />
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

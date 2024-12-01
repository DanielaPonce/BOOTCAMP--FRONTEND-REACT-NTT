import { fireEvent, render, screen } from '@testing-library/react';
import Paginator from '../Paginator';

describe('Paginator Component', () => {
	const mockOnPageChange = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('renders correctly', () => {
		render(
			<Paginator
				currentPage={1}
				totalPages={5}
				onPageChange={mockOnPageChange}
			/>
		);

		const prevButton = screen.getByRole('button', { name: '<' });
		const nextButton = screen.getByRole('button', { name: '>' });
		const pageInfo = screen.getByText('Page 1 of 5');

		expect(prevButton).toBeInTheDocument();
		expect(nextButton).toBeInTheDocument();
		expect(pageInfo).toBeInTheDocument();
	});

	test('disables the previous button on the first page', () => {
		render(
			<Paginator
				currentPage={1}
				totalPages={5}
				onPageChange={mockOnPageChange}
			/>
		);

		const prevButton = screen.getByRole('button', { name: '<' });
		expect(prevButton).toBeDisabled();
	});

	test('disables the next button on the last page', () => {
		render(
			<Paginator
				currentPage={5}
				totalPages={5}
				onPageChange={mockOnPageChange}
			/>
		);

		const nextButton = screen.getByRole('button', { name: '>' });
		expect(nextButton).toBeDisabled();
	});

	test('calls onPageChange with the correct value when navigating', () => {
		render(
			<Paginator
				currentPage={3}
				totalPages={5}
				onPageChange={mockOnPageChange}
			/>
		);

		const prevButton = screen.getByRole('button', { name: '<' });
		const nextButton = screen.getByRole('button', { name: '>' });

		fireEvent.click(prevButton);
		expect(mockOnPageChange).toHaveBeenCalledTimes(1);
		expect(mockOnPageChange).toHaveBeenCalledWith(2);

		fireEvent.click(nextButton);
		expect(mockOnPageChange).toHaveBeenCalledTimes(2);
		expect(mockOnPageChange).toHaveBeenCalledWith(4);
	});

	test('matches snapshot', () => {
		const { asFragment } = render(
			<Paginator
				currentPage={3}
				totalPages={5}
				onPageChange={mockOnPageChange}
			/>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

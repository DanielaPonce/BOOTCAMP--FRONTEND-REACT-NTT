import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { useCart } from '../../../hooks/useCart';
import { RoutesConstants } from '../../../utils/routes';
import CartCounter from '../CartCounter';

jest.mock('../../../hooks/useCart');

describe('CartCounter Component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('renders correctly', () => {
		(useCart as jest.Mock).mockReturnValue({ itemCount: 0 });

		render(
			<MemoryRouter>
				<CartCounter />
			</MemoryRouter>
		);

		const cartIcon = screen.getByRole('img', { name: /cart icon/i });
		expect(cartIcon).toBeInTheDocument();
		expect(cartIcon).toHaveAttribute(
			'src',
			'/src/assets/icons/cart-icon.svg'
		);

		const link = screen.getByRole('link');
		expect(link).toHaveAttribute('href', RoutesConstants.Summary);
	});

	test('shows the item count when itemCount > 0', () => {
		(useCart as jest.Mock).mockReturnValue({ itemCount: 5 });

		render(
			<MemoryRouter>
				<CartCounter />
			</MemoryRouter>
		);

		const cartCount = screen.getByText('5');
		expect(cartCount).toBeInTheDocument();
		expect(cartCount).toHaveClass('cart-count');
	});

	test('hides the item count when itemCount is 0', () => {
		(useCart as jest.Mock).mockReturnValue({ itemCount: 0 });

		render(
			<MemoryRouter>
				<CartCounter />
			</MemoryRouter>
		);

		const cartCount = screen.queryByText('0');
		expect(cartCount).toBeNull();
	});

	test('matches snapshot', () => {
		(useCart as jest.Mock).mockReturnValue({ itemCount: 3 });

		const { asFragment } = render(
			<MemoryRouter>
				<CartCounter />
			</MemoryRouter>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

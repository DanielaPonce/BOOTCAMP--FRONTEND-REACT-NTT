import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { useCart } from '../../../hooks/useCart';
import CartItem from '../CartItem';
import CartTable from '../CartTable';

jest.mock('../../../hooks/useCart');
jest.mock('../CartItem', () => jest.fn(() => <tr data-testid="cart-item" />));

describe('CartTable Component', () => {
	const mockCart = [
		{ id: 1, name: 'Producto 1', price: 10.5, quantity: 2 },
		{ id: 2, name: 'Producto 2', price: 20.0, quantity: 1 }
	];

	beforeEach(() => {
		(useCart as jest.Mock).mockReturnValue({ cart: mockCart });
		(CartItem as jest.Mock).mockClear();
	});

	test('renders correctly', () => {
		render(<CartTable />);

		const table = screen.getByRole('table');
		expect(table).toBeInTheDocument();

		const columnHeaders = [
			'Producto',
			'Nombre',
			'Precio',
			'Cantidad',
			'Eliminar'
		];
		columnHeaders.forEach((header) => {
			expect(screen.getByText(header)).toBeInTheDocument();
		});
	});

	test('renders the correct number of CartItem components', () => {
		render(<CartTable />);

		const cartItems = screen.getAllByTestId('cart-item');
		expect(cartItems.length).toBe(mockCart.length);
		expect(CartItem).toHaveBeenCalledTimes(mockCart.length);

		mockCart.forEach((item, index) => {
			expect(CartItem).toHaveBeenNthCalledWith(index + 1, { item }, {});
		});
	});

	test('renders an empty table when the cart is empty', () => {
		(useCart as jest.Mock).mockReturnValue({ cart: [] });

		render(<CartTable />);

		const table = screen.getByRole('table');
		expect(table).toBeInTheDocument();

		const cartItems = screen.queryByTestId('cart-item');
		expect(cartItems).toBeNull();
	});

	test('matches snapshot', () => {
		const { asFragment } = render(<CartTable />);
		expect(asFragment()).toMatchSnapshot();
	});
});

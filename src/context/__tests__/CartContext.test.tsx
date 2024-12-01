import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { CartProvider, useCartContext } from '../CartContext';
import { Actions } from '../../utils/actions';
import { LocalStorageConstants } from '../../utils/localStorageConstants';

describe('CartContext', () => {
	const product = {
		id: 1,
		title: 'Test Product',
		description: 'A product for testing',
		price: 100,
		thumbnail: 'test.jpg',
		category: 'test'
	};

	beforeEach(() => {
		localStorage.clear();
		jest.spyOn(global.localStorage.__proto__, 'getItem').mockImplementation(
			(key) => {
				if (key === LocalStorageConstants.CartKey) {
					return JSON.stringify({ cart: [], total: 0, itemCount: 0 });
				}
				return null;
			}
		);
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	test('initializes with default state', () => {
		const TestComponent = () => {
			const { state } = useCartContext();
			return (
				<>
					<div data-testid="total">{state.total}</div>
					<div data-testid="itemCount">{state.itemCount}</div>
					<div data-testid="cartLength">{state.cart.length}</div>
				</>
			);
		};

		act(() => {
			render(
				<CartProvider>
					<TestComponent />
				</CartProvider>
			);
		});

		expect(screen.getByTestId('total').textContent).toBe('0');
		expect(screen.getByTestId('itemCount').textContent).toBe('0');
		expect(screen.getByTestId('cartLength').textContent).toBe('0');
	});

	test('initializes with data from localStorage', () => {
		const storedState = {
			cart: [{ ...product, quantity: 2 }],
			total: 200,
			itemCount: 2
		};
		jest.spyOn(global.localStorage.__proto__, 'getItem').mockImplementation(
			(key) => {
				if (key === LocalStorageConstants.CartKey) {
					return JSON.stringify(storedState);
				}
				return null;
			}
		);

		const TestComponent = () => {
			const { state } = useCartContext();
			return (
				<>
					<div data-testid="total">{state.total}</div>
					<div data-testid="itemCount">{state.itemCount}</div>
					<div data-testid="cartLength">{state.cart.length}</div>
				</>
			);
		};

		act(() => {
			render(
				<CartProvider>
					<TestComponent />
				</CartProvider>
			);
		});

		expect(screen.getByTestId('total').textContent).toBe('200');
		expect(screen.getByTestId('itemCount').textContent).toBe('2');
		expect(screen.getByTestId('cartLength').textContent).toBe('1');
	});

	test('adds item to cart with ADD_TO_CART action', () => {
		const TestComponent = () => {
			const { state, dispatch } = useCartContext();

			return (
				<>
					<button
						onClick={() =>
							dispatch({
								type: Actions.ADD_TO_CART_TYPE,
								payload: product
							})
						}
					>
						Add to Cart
					</button>
					<div data-testid="total">{state.total}</div>
					<div data-testid="itemCount">{state.itemCount}</div>
					<div data-testid="cartLength">{state.cart.length}</div>
				</>
			);
		};

		render(
			<CartProvider>
				<TestComponent />
			</CartProvider>
		);

		const button = screen.getByRole('button', { name: /Add to Cart/i });

		act(() => {
			button.click();
		});

		expect(screen.getByTestId('total').textContent).toBe('100');
		expect(screen.getByTestId('itemCount').textContent).toBe('1');
		expect(screen.getByTestId('cartLength').textContent).toBe('1');
	});

	test('removes item from cart with REMOVE_FROM_CART action', () => {
		const initialState = {
			cart: [{ ...product, quantity: 1 }],
			total: 100,
			itemCount: 1
		};
		localStorage.setItem(
			LocalStorageConstants.CartKey,
			JSON.stringify(initialState)
		);

		const TestComponent = () => {
			const { state, dispatch } = useCartContext();

			return (
				<>
					<button
						onClick={() =>
							dispatch({
								type: Actions.REMOVE_FROM_CART_TYPE,
								payload: product.id
							})
						}
					>
						Remove from Cart
					</button>
					<div data-testid="cartLength">{state.cart.length}</div>
				</>
			);
		};

		render(
			<CartProvider>
				<TestComponent />
			</CartProvider>
		);

		const button = screen.getByRole('button', {
			name: /Remove from Cart/i
		});

		act(() => {
			button.click();
		});

		expect(screen.getByTestId('cartLength').textContent).toBe('0');
	});

	test('updates item quantity with UPDATE_QUANTITY action', () => {
		const initialState = {
			cart: [{ ...product, quantity: 1 }],
			total: 100,
			itemCount: 1
		};
		jest.spyOn(global.localStorage.__proto__, 'getItem').mockImplementation(
			(key) => {
				if (key === LocalStorageConstants.CartKey) {
					return JSON.stringify(initialState);
				}
				return null;
			}
		);

		const TestComponent = () => {
			const { state, dispatch } = useCartContext();

			return (
				<>
					<button
						onClick={() =>
							dispatch({
								type: Actions.UPDATE_QUANTITY_TYPE,
								payload: { id: product.id, quantity: 3 }
							})
						}
					>
						Update Quantity
					</button>
					<div data-testid="itemCount">{state.itemCount}</div>
					<div data-testid="total">{state.total}</div>
				</>
			);
		};

		render(
			<CartProvider>
				<TestComponent />
			</CartProvider>
		);

		const button = screen.getByRole('button', { name: /Update Quantity/i });

		act(() => {
			button.click();
		});

		expect(screen.getByTestId('itemCount').textContent).toBe('3');
		expect(screen.getByTestId('total').textContent).toBe('300');
	});

	test('clears the cart with CLEAR_CART action', () => {
		const initialState = {
			cart: [{ ...product, quantity: 1 }],
			total: 100,
			itemCount: 1
		};
		localStorage.setItem(
			LocalStorageConstants.CartKey,
			JSON.stringify(initialState)
		);

		const TestComponent = () => {
			const { state, dispatch } = useCartContext();

			return (
				<>
					<button
						onClick={() =>
							dispatch({ type: Actions.CLEAR_CART_TYPE })
						}
					>
						Clear Cart
					</button>
					<div data-testid="cartLength">{state.cart.length}</div>
				</>
			);
		};

		render(
			<CartProvider>
				<TestComponent />
			</CartProvider>
		);

		const button = screen.getByRole('button', { name: /Clear Cart/i });

		act(() => {
			button.click();
		});

		expect(screen.getByTestId('cartLength').textContent).toBe('0');
	});

	test('throws an error when useCartContext is used outside of CartProvider', () => {
		const TestComponent = () => {
			try {
				useCartContext();
			} catch (error: any) {
				return <div data-testid="error">{error.message}</div>;
			}
			return null;
		};

		render(<TestComponent />);

		expect(screen.getByTestId('error').textContent).toBe(
			'useCartContext debe usarse dentro de un CartProvider'
		);
	});
});

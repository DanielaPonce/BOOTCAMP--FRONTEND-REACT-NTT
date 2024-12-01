import { act, renderHook } from '@testing-library/react';
import { CartProvider } from '../../context/CartContext';
import { LocalStorageConstants } from '../../utils/localStorageConstants';
import { useCart } from '../useCart';

describe('useCart Hook', () => {
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
		jest.spyOn(global.localStorage.__proto__, 'setItem');
		jest.spyOn(global.localStorage.__proto__, 'getItem').mockImplementation(
			(key) => {
				if (key === LocalStorageConstants.CartKey) {
					return JSON.stringify({
						cart: [],
						total: 0,
						itemCount: 0
					});
				}
				return null;
			}
		);
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	test('initializes with default state', () => {
		const { result } = renderHook(() => useCart(), {
			wrapper: CartProvider
		});

		expect(result.current.cart).toEqual([]);
		expect(result.current.total).toBe(0);
		expect(result.current.itemCount).toBe(0);
	});

	test('adds a product to the cart', () => {
		const { result } = renderHook(() => useCart(), {
			wrapper: CartProvider
		});

		act(() => {
			result.current.addToCart(product);
		});

		expect(result.current.cart).toHaveLength(1);
		expect(result.current.cart[0]).toMatchObject({
			...product,
			quantity: 1
		});
		expect(result.current.total).toBe(100);
		expect(result.current.itemCount).toBe(1);
		expect(localStorage.setItem).toHaveBeenCalledWith(
			LocalStorageConstants.CartKey,
			expect.any(String)
		);
	});

	test('removes a product from the cart', () => {
		const { result } = renderHook(() => useCart(), {
			wrapper: CartProvider
		});

		act(() => {
			result.current.addToCart(product);
		});

		act(() => {
			result.current.removeFromCart(product.id);
		});

		expect(result.current.cart).toHaveLength(0);
		expect(result.current.total).toBe(0);
		expect(result.current.itemCount).toBe(0);
	});

	test('updates the quantity of a product in the cart', () => {
		const { result } = renderHook(() => useCart(), {
			wrapper: CartProvider
		});

		act(() => {
			result.current.addToCart(product);
		});

		act(() => {
			result.current.updateQuantity(product.id, 3);
		});

		expect(result.current.cart[0].quantity).toBe(3);
		expect(result.current.total).toBe(300);
		expect(result.current.itemCount).toBe(3);
	});

	test('clears the cart', () => {
		const { result } = renderHook(() => useCart(), {
			wrapper: CartProvider
		});

		act(() => {
			result.current.addToCart(product);
			result.current.addToCart(product);
		});

		act(() => {
			result.current.clearCart();
		});

		expect(result.current.cart).toEqual([]);
		expect(result.current.total).toBe(0);
		expect(result.current.itemCount).toBe(0);
	});

	test('syncs state with localStorage on changes', () => {
		const { result } = renderHook(() => useCart(), {
			wrapper: CartProvider
		});

		act(() => {
			result.current.addToCart(product);
		});

		expect(localStorage.setItem).toHaveBeenLastCalledWith(
			LocalStorageConstants.CartKey,
			JSON.stringify({
				cart: [{ ...product, quantity: 1 }],
				total: 100,
				itemCount: 1
			})
		);
	});
});

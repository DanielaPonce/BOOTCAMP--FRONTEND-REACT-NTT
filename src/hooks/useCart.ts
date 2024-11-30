import { useEffect } from 'react';
import { useCartContext } from '../context/CartContext';
import { Product } from '../models/product.types';
import { Actions } from '../utils/actions';
import { LocalStorageConstants } from '../utils/localStorageConstants';

export const useCart = () => {
	const { state, dispatch } = useCartContext();

	useEffect(() => {
		localStorage.setItem(
			LocalStorageConstants.CartKey,
			JSON.stringify(state)
		);
	}, [state]);

	const addToCart = (product: Product) =>
		dispatch({ type: Actions.ADD_TO_CART_TYPE, payload: product });

	const removeFromCart = (id: number) =>
		dispatch({ type: Actions.REMOVE_FROM_CART_TYPE, payload: id });

	const updateQuantity = (id: number, quantity: number) =>
		dispatch({
			type: Actions.UPDATE_QUANTITY_TYPE,
			payload: { id, quantity }
		});

	const clearCart = () => dispatch({ type: Actions.CLEAR_CART_TYPE });

	return {
		cart: state.cart,
		total: state.total,
		itemCount: state.itemCount,
		addToCart,
		removeFromCart,
		updateQuantity,
		clearCart
	};
};

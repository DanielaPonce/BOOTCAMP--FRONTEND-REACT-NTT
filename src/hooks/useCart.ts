import { useCartContext } from '../context/CartContext';
import { Constants } from '../utils/constants';

export const useCart = () => {
	const { state, dispatch } = useCartContext();

	const addToCart = () => dispatch({ type: Constants.ADD_TO_CART_TYPE });

	return {
		itemCount: state.itemCount,
		addToCart
	};
};

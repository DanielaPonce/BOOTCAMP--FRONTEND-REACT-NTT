import {
	createContext,
	Dispatch,
	FC,
	ReactNode,
	useContext,
	useEffect,
	useReducer
} from 'react';
import { Product } from '../models/product.types';
import { Actions } from '../utils/actions';
import { Constants } from '../utils/constants';

type CartAction =
	| { type: Actions.ADD_TO_CART_TYPE; payload: Product }
	| { type: Actions.REMOVE_FROM_CART_TYPE; payload: number }
	| {
			type: Actions.UPDATE_QUANTITY_TYPE;
			payload: { id: number; quantity: number };
	  }
	| { type: Actions.CLEAR_CART_TYPE };

export interface CartItemType extends Product {
	quantity: number;
}

interface CartState {
	cart: CartItemType[];
	total: number;
	itemCount: number;
}

const initialState: CartState = {
	cart: [],
	total: 0,
	itemCount: 0
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
	switch (action.type) {
		case Actions.ADD_TO_CART_TYPE: {
			const existingItem = state.cart.find(
				(item) => item.id === action.payload.id
			);
			if (existingItem) {
				const updatedCart = state.cart.map((item) =>
					item.id === action.payload.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
				const updatedTotal = updatedCart.reduce(
					(sum, item) => sum + item.price * item.quantity,
					0
				);
				const updatedItemCount = updatedCart.reduce(
					(sum, item) => sum + item.quantity,
					0
				);

				return {
					...state,
					cart: updatedCart,
					total: updatedTotal,
					itemCount: updatedItemCount
				};
			}

			const newCartItem: CartItemType = {
				...action.payload,
				quantity: 1
			};
			return {
				...state,
				cart: [...state.cart, newCartItem],
				total: state.total + action.payload.price,
				itemCount: state.itemCount + 1
			};
		}
		case Actions.REMOVE_FROM_CART_TYPE: {
			const filteredCart = state.cart.filter(
				(item) => item.id !== action.payload
			);
			const updatedTotal = filteredCart.reduce(
				(sum, item) => sum + item.price * item.quantity,
				0
			);
			const updatedItemCount = filteredCart.reduce(
				(sum, item) => sum + item.quantity,
				0
			);

			return {
				...state,
				cart: filteredCart,
				total: updatedTotal,
				itemCount: updatedItemCount
			};
		}
		case Actions.UPDATE_QUANTITY_TYPE: {
			const updatedCart = state.cart.map((item) =>
				item.id === action.payload.id
					? { ...item, quantity: action.payload.quantity }
					: item
			);
			const updatedTotal = updatedCart.reduce(
				(sum, item) => sum + item.price * item.quantity,
				0
			);
			const updatedItemCount = updatedCart.reduce(
				(sum, item) => sum + item.quantity,
				0
			);

			return {
				...state,
				cart: updatedCart,
				total: updatedTotal,
				itemCount: updatedItemCount
			};
		}
		case Actions.CLEAR_CART_TYPE:
			return initialState;
		default:
			throw new Error(`Acción desconocida: ${action}`);
	}
};

interface CartContextProps {
	state: CartState;
	dispatch: Dispatch<CartAction>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
	// el provider solo deber'ia brindar los datos del storage y funci'on de actualizaci'on no deber'ia manipular el storage, esto deber'ia estar en otro archivo
	const storedCart = localStorage.getItem(Constants.localStorageCartKey);
	const initialCartState: CartState = storedCart
		? JSON.parse(storedCart)
		: initialState;

	const [state, dispatch] = useReducer(cartReducer, initialCartState);

	useEffect(() => {
		localStorage.setItem(
			Constants.localStorageCartKey,
			JSON.stringify(state)
		);
	}, [state]);

	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = (): CartContextProps => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error('useCartContext debe usarse dentro de un CartProvider');
	}
	return context;
};

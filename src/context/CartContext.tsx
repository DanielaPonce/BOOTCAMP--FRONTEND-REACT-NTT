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
import { LocalStorageConstants } from '../utils/localStorageConstants';

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
			// falta cubrir este caso
			const updatedTotal = filteredCart.reduce(
				(sum, item) => sum + item.price * item.quantity,
				0
			);
			// falta cubrir este caso
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
					// falta cubrir este caso
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
		// falta cubrir este caso
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
	const storedCart = localStorage.getItem(LocalStorageConstants.CartKey);
	const initialCartState: CartState = storedCart
		? JSON.parse(storedCart)
		: initialState;

	const [state, dispatch] = useReducer(cartReducer, initialCartState);

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

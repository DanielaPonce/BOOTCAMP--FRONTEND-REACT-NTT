import {
	createContext,
	Dispatch,
	FC,
	ReactNode,
	useContext,
	useReducer
} from 'react';
import { Constants } from '../utils/constants';

type CartAction = { type: Constants.ADD_TO_CART_TYPE };

interface CartState {
	itemCount: number;
}

const initialState: CartState = {
	itemCount: 0
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
	switch (action.type) {
		case Constants.ADD_TO_CART_TYPE:
			return { ...state, itemCount: state.itemCount + 1 };
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
	const [state, dispatch] = useReducer(cartReducer, initialState);

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

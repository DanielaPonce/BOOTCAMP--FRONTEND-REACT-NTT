import { FC } from 'react';
import { useCart } from '../../hooks/useCart';

const CartSummary: FC = () => {
	const { total } = useCart();

	return (
		<div className="cart-summary">
			<h3>Total a pagar: S/ {total.toFixed(2)}</h3>
		</div>
	);
};

export default CartSummary;

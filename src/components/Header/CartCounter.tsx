import { FC } from 'react';
import { useCart } from '../../hooks/useCart';

const CartCounter: FC = () => {
	const { itemCount } = useCart();

	return (
		<div className="cart-icon">
			<img src="/assets/cart-icon.svg" alt="cart icon" />

			{itemCount > 0 ? (
				<span id="cardCounter" className="cart-count">
					{itemCount}
				</span>
			) : (
				<></>
			)}
		</div>
	);
};

export default CartCounter;

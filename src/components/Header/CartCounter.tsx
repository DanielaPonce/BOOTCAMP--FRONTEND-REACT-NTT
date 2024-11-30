import { FC } from 'react';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router';
import { RoutesConstants } from '../../utils/routes';
import './CartCounter.css';

const CartCounter: FC = () => {
	const { itemCount } = useCart();

	return (
		<div className="cart-icon">
			<Link to={RoutesConstants.Summary}>
				<img src="/src/assets/icons/cart-icon.svg" alt="cart icon" />
			</Link>

			{itemCount > 0 && (
				<span id="cardCounter" className="cart-count">
					{itemCount}
				</span>
			)}
		</div>
	);
};

export default CartCounter;

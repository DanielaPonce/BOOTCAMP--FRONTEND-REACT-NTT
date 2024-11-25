import { FC } from 'react';
import { Product } from '../../models/product.types';
import { CartItemType } from '../../context/CartContext';
import { useCart } from '../../hooks/useCart';

interface CartItemProps {
	item: CartItemType;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
	const { removeFromCart, updateQuantity } = useCart();

	const handleIncrease = () => {
		updateQuantity(item.id, item.quantity + 1);
	};

	const handleDecrease = () => {
		if (item.quantity > 1) {
			updateQuantity(item.id, item.quantity - 1);
		} else {
			removeFromCart(item.id);
		}
	};

	return (
		<tr>
			<td>
				<img
					src={item.thumbnail}
					alt={item.title}
					className="product-image"
				/>
			</td>
			<td>{item.title}</td>
			<td> s/. {item.price.toFixed(2)}</td>
			<td>
				<div className='quantity-content'>
					<button onClick={handleDecrease}>-</button>
					<span>{item.quantity}</span>
					<button onClick={handleIncrease}>+</button>
				</div>
			</td>
			<td>
				<div className='remove-button-content'>
					<button
						onClick={() => removeFromCart(item.id)}
						className="remove-button"
					>
						Eliminar
					</button>
				</div>
			</td>
		</tr>
	);
};

export default CartItem;

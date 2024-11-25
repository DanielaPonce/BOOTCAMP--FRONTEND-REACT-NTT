import { useCart } from '../../hooks/useCart';
import { FC } from 'react';
import CartItem from './CartItem';

const CartTable: FC = () => {
	const { cart } = useCart();

	return (
		<table className="cart-table">
			<thead>
				<tr>
					<th>Producto</th>
					<th>Nombre</th>
					<th>Cantidad</th>
					<th>Eliminar</th>
				</tr>
			</thead>
			<tbody>
				{cart.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</tbody>
		</table>
	);
};

export default CartTable;

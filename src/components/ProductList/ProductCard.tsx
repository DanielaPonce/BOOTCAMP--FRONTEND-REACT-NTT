import { FC } from 'react';
import { Product } from '../../models/product.types';
import { useCart } from '../../hooks/useCart';

const ProductCard: FC<Product> = (props) => {
	const { id, title, description, price, thumbnail, category } = props;

	const { addToCart } = useCart();

	const handleAddToCart = () => {
		addToCart(props);
	};

	return (
		<div className="product-card">
			<img src={thumbnail} alt={title} />
			<div className="product-details">
				<h3>{title}</h3>
				<p>{description}</p>
				<span className="category">{category}</span>
				<div className="price">Precio: S/ {price}</div>
				<button onClick={handleAddToCart}>Agregar al carrito</button>
			</div>
		</div>
	);
};

export default ProductCard;

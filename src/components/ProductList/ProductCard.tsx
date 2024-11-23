import { FC } from 'react';
import { Product } from '../../models/product.types';
import { useCart } from '../../hooks/useCart';

interface ProductCardProps extends Product {}

const ProductCard: FC<ProductCardProps> = ({
	id,
	title,
	description,
	price,
	thumbnail,
	category
}) => {
	const { addToCart } = useCart();

	return (
		<div className="product-card">
			<img src={thumbnail} alt={title} />
			<div className="product-details">
				<h3>{title}</h3>
				<p>{description}</p>
				<span className="category">{category}</span>
				<div className="price">Precio: S/ {price}</div>
				<button onClick={addToCart}>Agregar al carrito</button>
			</div>
		</div>
	);
};

export default ProductCard;

import { FC } from 'react';
import { Product } from '../../models/product.types';
import ProductCard from './ProductCard';

type ProductListProps = {
	products: Product[];
};

const ProductList: FC<ProductListProps> = ({ products }) => {
	return (
		<div id="productContainer" className="product-container">
			{products.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	);
};

export default ProductList;

import { FC, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Paginator from '../components/ProductList/Paginator';
import ProductList from '../components/ProductList/ProductList';
import Spinner from '../components/Spinner/Spinner';
// no se usa este import
import { CartProvider } from '../context/CartContext';
import { useProducts } from '../hooks/useProducts';
// no se usa este import
import { Constants } from '../utils/constants';
import { StaticTexts } from '../utils/staticTexts';

const HomePage: FC = () => {
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState(
		StaticTexts.defaultSelectValue.valueOf()
	);

	const {
		products,
		isLoading,
		totalPages,
		currentPage,
		setCurrentPage,
		showPagination
	} = useProducts(category, search);

	return (
		<>
			<Header onSearch={setSearch} onFilterCategory={setCategory} />
			{isLoading ? (
				<Spinner />
			) : (
				<div className="body-content">
					<ProductList products={products} />
					{showPagination && (
						<Paginator
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={setCurrentPage}
						/>
					)}
				</div>
			)}
			<Footer />
		</>
	);
};

export default HomePage;

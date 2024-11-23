import { FC, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Paginator from '../components/ProductList/Paginator';
import ProductList from '../components/ProductList/ProductList';
import Spinner from '../components/Spinner/Spinner';
import { CartProvider } from '../context/CartContext';
import { useProducts } from '../hooks/useProducts';
import { Constants } from '../utils/constants';

const HomePage: FC = () => {
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState(
		Constants.defaultSelectValue.valueOf()
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
		<CartProvider>
			<Header onSearch={setSearch} onFilterCategory={setCategory} />
			{isLoading ? (
				<Spinner />
			) : (
				<div className="body-content">
					<ProductList products={products} />
					{showPagination ? (
						<Paginator
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={setCurrentPage}
						/>
					) : (
						<></>
					)}
				</div>
			)}
			<Footer />
		</CartProvider>
	);
};

export default HomePage;

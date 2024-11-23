import { FC } from 'react';
import { useCategories } from '../../hooks/useCategories';
import CartCounter from './CartCounter';
import CategoryDropdown from './CategoryDropdown';
import SearchBar from './SearchBar';
import { Constants } from '../../utils/constants';

type HeaderProps = {
	onSearch: (query: string) => void;
	onFilterCategory: (category: string) => void;
};

const Header: FC<HeaderProps> = ({ onSearch, onFilterCategory }) => {
	const { categories } = useCategories();

	return (
		<div className="header-container">
			<header>
				<div className="logo">
					<img src="https://via.placeholder.com/40" alt="Logo" />
					<h1>{Constants.appTitle}</h1>
				</div>

				<div className="search-container">
					<SearchBar onInputSearch={onSearch} />
					<CategoryDropdown
						categories={categories}
						onSelectCategory={onFilterCategory}
					/>
					<CartCounter counter={0} />
				</div>
			</header>
		</div>
	);
};

export default Header;

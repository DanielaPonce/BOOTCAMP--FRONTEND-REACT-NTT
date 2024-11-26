import { FC } from 'react';
import { Link, useLocation } from 'react-router';
import { useCategories } from '../../hooks/useCategories';
import { StaticTexts } from '../../utils/staticTexts';
import CartCounter from './CartCounter';
import CategoryDropdown from './CategoryDropdown';
import SearchBar from './SearchBar';
import { RoutesConstants } from '../../utils/routes';

type HeaderProps = {
	onSearch?: (query: string) => void;
	onFilterCategory?: (category: string) => void;
};

const Header: FC<HeaderProps> = ({ onSearch, onFilterCategory }) => {
	const location = useLocation();

	const { categories } = useCategories();

	const hideSearchAndDropdown = location.pathname === '/summary';

	return (
		<div className="header-container">
			<header>
				<Link to={RoutesConstants.home} className="logo" >
					{/* // no usemos links externos porque pueden eliminar su contenido */}
					<img src="https://tofuu.getjusto.com/orioneat-local/resized2/FJjr9oorgze8bFTvY-200-x.webp" alt="Logo" width={45} height={45}/>
					<h1>{StaticTexts.appTitle}</h1>
				</Link>

				<div className="search-container">
					{hideSearchAndDropdown ? (
						<></>
					) : (
						<>
							<SearchBar onInputSearch={onSearch!} />
							<CategoryDropdown
								categories={categories}
								onSelectCategory={onFilterCategory!}
							/>
						</>
					)}
					<CartCounter />
				</div>
			</header>
		</div>
	);
};

export default Header;

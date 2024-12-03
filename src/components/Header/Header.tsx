import { FC } from 'react';
import { Link, useLocation } from 'react-router';
import { useCategories } from '../../hooks/useCategories';
import { StaticTexts } from '../../utils/staticTexts';
import CartCounter from './CartCounter';
import CategoryDropdown from './CategoryDropdown';
import SearchBar from './SearchBar';
import { RoutesConstants } from '../../utils/routes';
import { Images } from '../../utils/images';
import './Header.css';
import { useAuth } from '../../context/AuthContext';
import Button from '../Button/Button';

type HeaderProps = {
	onSearch?: (query: string) => void;
	onFilterCategory?: (category: string) => void;
};

const Header: FC<HeaderProps> = ({ onSearch, onFilterCategory }) => {
	const { user, logout } = useAuth();
	const location = useLocation();

	const { categories } = useCategories();

	const hideSearchAndDropdown = location.pathname === '/summary';

	return (
		<div className="header-container">
			<header>
				<div className="left-side">
					<Link to={RoutesConstants.Home} className="logo">
						<img
							src={Images.Logo}
							alt="Logo"
							width={45}
							height={45}
						/>
						<h1>{StaticTexts.AppTitle}</h1>
					</Link>
					{user && <span>Bienvenido: {user}</span>}
				</div>

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
					<Button
						type="button"
						className="logout-button"
						onClick={logout}
					>
						Cerrar Sesión
					</Button>
				</div>
			</header>
		</div>
	);
};

export default Header;

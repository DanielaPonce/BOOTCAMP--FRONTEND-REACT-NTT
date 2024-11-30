import { FC } from 'react';
import { StaticTexts } from '../../utils/staticTexts';
import './SearchBar.css';

type Props = {
	onInputSearch: (search: string) => void;
};

const SearchBar: FC<Props> = ({ onInputSearch }) => {
	return (
		<div className="search-bar">
			<input
				type="search"
				placeholder={StaticTexts.SearchBarPlaceholder}
				onInput={(e) =>
					onInputSearch((e.target as HTMLInputElement).value)
				}
			/>
		</div>
	);
};

export default SearchBar;

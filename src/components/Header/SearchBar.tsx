import { FC } from 'react';
import { Constants } from '../../utils/constants';

type Props = {
	onInputSearch: (search: string) => void;
};

const SearchBar: FC<Props> = ({ onInputSearch }) => {
	return (
		<div className="search-bar">
			<input
				type="search"
				placeholder={Constants.searchBarPlaceholder}
				onInput={(e) =>
					onInputSearch((e.target as HTMLInputElement).value)
				}
			/>
		</div>
	);
};

export default SearchBar;

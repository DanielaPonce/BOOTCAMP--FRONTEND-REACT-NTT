import { FC } from 'react';
import { Category } from '../../models/category.types';

type Props = {
	categories: Category[];
	onSelectCategory: (category: string) => void;
};

const CategoryDropdown: FC<Props> = ({ categories, onSelectCategory }) => {
	return (
		<select
			onChange={(e) => onSelectCategory(e.target.value)}
			defaultValue="all"
		>
			<option value="all">Todas las categorias</option>

			{categories.map(({ name, slug }) => (
				<option key={slug} value={slug}>
					{name}
				</option>
			))}
		</select>
	);
};

export default CategoryDropdown;

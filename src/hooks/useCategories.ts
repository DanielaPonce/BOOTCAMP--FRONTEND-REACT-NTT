import { useEffect, useState } from 'react';
import { fetchAllCategories } from '../api/category.api';
import { Category } from '../models/category.types';

export const useCategories = () => {
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		fetchAllCategories().then((data) => setCategories(data));
	}, []);

	return { categories };
};

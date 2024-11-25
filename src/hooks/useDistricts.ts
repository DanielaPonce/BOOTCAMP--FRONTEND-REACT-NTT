import { useEffect, useState } from 'react';

interface District {
	id: number;
	name: string;
}

export const useDistricts = () => {
	const [districts, setDistricts] = useState<District[]>([]);

	useEffect(() => {
		const fetchDistricts = async () => {
			const response = await fetch('/src/assets/mock/districts.json');
			const data: District[] = await response.json();
			setDistricts(data);
		};

		fetchDistricts();
	}, []);

	return districts;
};

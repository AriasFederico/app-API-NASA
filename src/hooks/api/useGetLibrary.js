import { useEffect, useState } from 'react';
import { useApiRequest } from './useApiRequest';

// HOOK PARA LLAMAR A LA API

export const useGetLibrary = (query = '') => {
	const [page, setPage] = useState(1);
	const [allItems, setAllItems] = useState([]);

	const url = query
		? `https://images-api.nasa.gov/search?q=${query}&media_type=image&page=${page}`
		: `https://images-api.nasa.gov/search?media_type=image&page=${page}&page_size=15`;

	const { data, loading, error } = useApiRequest(url, { method: 'GET' });

	useEffect(() => {
		setPage(1);
		setAllItems([]);
	}, [query]);

	useEffect(() => {
		if (data?.collection?.items) {
			setAllItems((prevItems) => {
				if (page === 1 || query) {
					return data.collection.items;
				}
				return [...prevItems, ...data.collection.items];
			});
		}
	}, [data, query]);

	const loadMore = () => {
		setPage((prev) => prev + 1);
	};

	return {
		dataLibrary: allItems,
		loading,
		error,
		loadMore,
	};
};

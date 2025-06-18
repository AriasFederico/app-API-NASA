import { useEffect, useState } from 'react';
import { useApiRequest } from './useApiRequest';

// HOOK PARA LLAMAR A LA API

export const useGetLibrary = () => {
	const [page, setPage] = useState(1);
	const [allItems, setAllItems] = useState([]);
	const url = `https://images-api.nasa.gov/search?media_type=image&page=${page}&page_size=15`;

	// si existe un search

	const { data, loading, error } = useApiRequest(url, { method: 'GET' });

	useEffect(() => {
		setAllItems((prev) => [...prev, ...(data?.collection?.items || [])]);
	}, [data]);

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
export default useGetLibrary;

// quiero que cada vez que se llene el input y se busque onSubmit / icono de busqueda, se busque en la API con endpoint dentro de todo data, y con boton de cruz para limpiar la busqueda que se resetee [dataSize] = 15

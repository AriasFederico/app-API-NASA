import { useApiRequest } from './useApiRequest';
export const useGetApod = () => {
	const API_KEY = import.meta.env.VITE_APP_API_KEY;
	const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
	const { data, loading, error } = useApiRequest(url, { method: 'GET' });

	return {
		data,
		loading,
		error,
	};
};

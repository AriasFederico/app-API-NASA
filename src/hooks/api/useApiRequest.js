import { useEffect, useState, useMemo } from 'react';

export const useApiRequest = (url, options = {}) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const memoizedOptions = useMemo(() => options, [JSON.stringify(options)]);
	useEffect(() => {
		const controller = new AbortController();

		const fetchData = async () => {
			if (!url) return;
			try {
				const response = await fetch(url, {
					...memoizedOptions,
					signal: controller.signal,
				});
				if (!response.ok) throw new Error(response.statusText);
				const jsonData = await response.json();
				setData(jsonData);
			} catch (error) {
				if (error.name !== 'AbortError') {
					setError(error);
				}
			} finally {
				setLoading(false);
			}
		};

		fetchData();
		return () => controller.abort();
	}, [url, memoizedOptions]);

	return { data, loading, error };
};

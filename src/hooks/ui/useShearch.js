import { useState } from 'react';

export const useShearch = () => {
	const [searchParams, setSearchParams] = useState({
		query: '',
		inputValue: '',
	});

	const { query, inputValue } = searchParams;

	const handleChange = (e) => {
		setSearchParams((prev) => ({ ...prev, inputValue: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchParams((prev) => ({ ...prev, query: inputValue }));
	};

	const resetSeatch = () => {
		setSearchParams({ query: '', inputValue: '' });
	};

	return {
		inputValue,
		query,
		handleChange,
		handleSubmit,
		resetSeatch,
	};
};

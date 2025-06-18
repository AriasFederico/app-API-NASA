import { useState } from 'react';

export const useShearch = () => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	return {
		handleChange,
		inputValue,
	};
};

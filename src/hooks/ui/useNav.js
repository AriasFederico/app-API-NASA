import { useState } from 'react';

export const useNav = () => {
	const [active, setActive] = useState(false);

	const handleMenu = () => {
		setActive(!active);
	};

	return {
		active,
		handleMenu,
	};
};

import './BurgerMenu.scss';
export const BurgerMenu = ({ click }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 24 24'
			className='BurgerMenu'
			onClick={click}
		>
			<path
				fill='currentColor'
				d='M4 17.27v-1h16v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z'
			/>
		</svg>
	);
};

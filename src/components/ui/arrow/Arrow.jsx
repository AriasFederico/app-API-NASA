import './Arrow.scss';
export const Arrow = () => {
	return (
		<div className='Arrow'>
			<p className='Arrow-p'>EXPLORE</p>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='1em'
				height='1em'
				viewBox='0 0 24 24'
				className='Arrow-svg'
			>
				<path
					fill='currentColor'
					d='m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6zm0 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22'
				/>
			</svg>
		</div>
	);
};

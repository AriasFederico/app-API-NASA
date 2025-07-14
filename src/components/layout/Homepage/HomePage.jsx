import './HomePage.scss';
import { heroHeader } from '../../../context/layouts/StaticContent';
import svgHome from '../../ui/svgHome/undraw_launch-day_w9g1.svg';
import { Apod } from '../Apod/Apod';
import { LibrayNasa } from '../Library/LibrayNasa';

export const HomePage = () => {
	const { h2 } = heroHeader;
	return (
		<>
			<main className='HomePage'>
				<h2 className='HomePage-h2'>{h2}</h2>
				{/* <img
					src={svgHome}
					alt={'undraw_launch-day_w9g1'}
					className='HomePage-img'
				/> */}
			</main>

			{/* reemplazar main por un componente? */}

			<Apod />
			<LibrayNasa />
		</>
	);
};

export default HomePage;

import './HomePage.scss';
import { heroHeader } from '../../../context/layouts/StaticContent';
import svgHome from '../../ui/svgHome/undraw_launch-day_w9g1.svg';

export const HomePage = () => {
	const { h2 } = heroHeader;
	return (
		<main className='HomePage'>
			<h2 className='HomePage-h2'>{h2}</h2>
			<img
				src={svgHome}
				alt={'undraw_launch-day_w9g1'}
				className='HomePage-img'
			/>
		</main>
	);
};

export default HomePage;

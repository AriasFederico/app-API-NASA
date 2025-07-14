import { headerContent } from '../../../../context/layouts/StaticContent';
import { Link } from 'react-router-dom';
import './NavList.scss';
export const NavList = ({ styles }) => {
	const { navLinks } = headerContent;
	return (
		<nav className={styles}>
			<ol className={`${styles}-ol`}>
				{navLinks.map(({ id, text, href }) => (
					<li key={id} className={`${styles}-li`}>
						<a href={href} className={`${styles}-link`}>
							{text}
						</a>
					</li>
				))}
			</ol>
		</nav>
	);
};

export default NavList;

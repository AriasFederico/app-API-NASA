import { Logo } from '../../ui/logo/Logo';
import './Header.scss';
import { useNav } from '../../../hooks/ui/useNav';
import { BurgerMenu } from '../../ui/burger/BurgerMenu';
import { Close } from '../../ui/close/Close';
import { NavList } from '../Header/NavList/NavList';

export const Header = () => {
	const { active, handleMenu } = useNav();
	const MenuIcon = active ? Close : BurgerMenu;

	return (
		<header className='Header'>
			<Logo />
			<MenuIcon click={handleMenu} />
			{active && <NavList styles='NavList-mobile' />}
			<NavList styles={'NavList-desktop'} />
		</header>
	);
};

export default Header;

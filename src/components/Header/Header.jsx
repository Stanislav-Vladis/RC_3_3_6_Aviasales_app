import logo from '../../images/Logo.svg';

import style from './Header.module.scss';

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style['header__logo']}>
				<img src={logo} alt='' />
			</div>
		</header>
	);
};
export default Header;

import { useDispatch } from 'react-redux';

import { sortButtons } from '../../utils/localData';
import { setSort } from '../../store/slices/sort.slice';

import NavigationButton from './NavigationButton';
import './Navigation.scss';

const Navigation = () => {
	const dispatch = useDispatch();

	return (
		<div className='navigation'>
			<nav className='navigation__inner'>
				{sortButtons.map(btn => (
					<NavigationButton key={btn.sort} {...btn} onClick={() => dispatch(setSort(btn.sort))} />
				))}
			</nav>
		</div>
	);
};

export default Navigation;

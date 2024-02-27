import { useDispatch } from 'react-redux';

import { setFilter } from '../../store/slices/filters.slice';
import { filterCheckboxes } from '../../utils/localData';
import FiltersLabel from '../FiltersLabel/FiltersLabel';

import style from './Filters.module.scss';

const Filters = () => {
	const dispatch = useDispatch();

	return (
		<aside className={style.filters}>
			<form className={style['filters__form']}>
				<div className={style['filters__title']}>Количество пересадок</div>
				<div className={style['filters__content']}>
					{filterCheckboxes.map(checkbox => (
						<FiltersLabel key={checkbox.id} {...checkbox} handleChange={() => dispatch(setFilter({ id: checkbox.id }))} />
					))}
				</div>
			</form>
		</aside>
	);
};

export default Filters;

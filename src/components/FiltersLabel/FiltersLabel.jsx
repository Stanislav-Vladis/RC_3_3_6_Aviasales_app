import { useSelector } from 'react-redux';

import style from './FiltersLabel.module.scss';

const FiltersLabel = ({ id, name, handleChange }) => {
	const filterBy = useSelector(state => state.filter.filterBy);
	const check = filterBy.filter(item => item === id);

	return (
		<label className={style.label}>
			<input type='checkbox' checked={check.length} className={style.checkbox} name='filter' onChange={handleChange} />
			<div className={style['custom__checkbox']}></div>
			<span>{name}</span>
		</label>
	);
};

export default FiltersLabel;

import { useSelector } from 'react-redux';

const NavigationButton = ({ title, sort, onClick }) => {
	const sortBy = useSelector(state => state.sort.sortBy);

	let classes = 'navigation__btn';
	if (sort === sortBy) classes += ' active';

	return (
		<label className={classes}>
			<input type='radio' name='navigation' checked={sort === sortBy} onChange={onClick} />
			{title}
		</label>
	);
};

export default NavigationButton;

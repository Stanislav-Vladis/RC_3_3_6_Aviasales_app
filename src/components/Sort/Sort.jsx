import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { changeSortItem } from '../../actions';

import classes from './Sort.module.scss';

const Sort = ({ changeSortItem, sortItemChecked }) => {
	const sortItems = [
		{
			name: 'САМЫЙ ДЕШЕВЫЙ',
			id: 1,
		},
		{
			name: 'САМЫЙ БЫСТРЫЙ',
			id: 2,
		},
		{
			name: 'ОПТИМАЛЬНЫЙ',
			id: 3,
		},
	];

	const sortItemsList = sortItems.map((item) => {
		const { name, id } = item;
		const isItemChecked = id === sortItemChecked ? classes.sort__item_checked : null;

		return (
			<li
				className={`${classes.sort__item} ${isItemChecked}`}
				key={id}
				id={id}
				onClick={() => changeSortItem(id)}
				role="presentation"
			>
				{name}
			</li>
		);
	});

	return <ul className={classes.sort}>{sortItemsList}</ul>;
};

Sort.propTypes = {
	changeSortItem: PropTypes.func,
	sortItemChecked: PropTypes.number,
};

const mapStateToProps = ({ tickets }) => ({ sortItemChecked: tickets.sortID });

export default connect(mapStateToProps, { changeSortItem })(Sort);

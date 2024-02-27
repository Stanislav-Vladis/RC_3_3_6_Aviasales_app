import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { Alert, Button } from 'antd';

import sorter from '../../utils/sorter';
import Ticket from '../Ticket/Ticket';

import style from './TicketList.module.scss';

const TicketList = () => {
	const { items, status } = useSelector(state => state.tickets);
	const { sortBy } = useSelector(state => state.sort);
	const { filterBy } = useSelector(state => state.filter);

	const [count, setCount] = useState(5);
	const handleClick = () => setCount(prev => (prev += 5));

	const sortedTickets = useMemo(() => sorter(items, sortBy, filterBy), [items, sortBy, filterBy]);
	const elements = sortedTickets.slice(0, count).map((el, id) => {
		return <Ticket key={`${id}_${el.price}-${el.carrier}`} {...el} />;
	});
	const sortedList = elements.length > 0 && status !== 'error';
	const emptyMessage = status !== 'error' && status !== 'loading' ? <Alert message='Рейсов, подходящих под заданные фильтры, не найдено' type='info' showIcon /> : null;

	return (
		<div className={style['ticket-list-wrapper']}>
			{status === 'loading' ? <LoadingOutlined /> : null}
			{status === 'error' ? (
				<Alert
					message='Error'
					description='Something wrong, please reload page.'
					type='info'
					showIcon
					action={
						<Button size='large' onClick={() => window.location.reload()}>
							Reload
						</Button>
					}
				/>
			) : null}
			<ul className={style['ticket-list']}>{sortedList ? elements : emptyMessage}</ul>
			{sortedList && (
				<button className={style.more} onClick={handleClick}>
					Показать еще 5 билетов!
				</button>
			)}
		</div>
	);
};

export default TicketList;

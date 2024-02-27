import { formatMinutesToHoursAndMinutes, calculateArrivalTime } from '../../utils/format';

import style from './TicketInfoItem.module.scss';

const TicketInfoItem = props => {
	const { origin, destination, date, duration, stops } = props;
	return (
		<li>
			<ul className={style['ticket-info-item']}>
				<li className={style['ticket-info-item__item']}>
					<span>
						{origin} – {destination}
					</span>
					<strong>{calculateArrivalTime(date, duration)}</strong>
				</li>
				<li className={style['ticket-info-item__item']}>
					<span>В пути</span>
					<strong>{formatMinutesToHoursAndMinutes(duration)}</strong>
				</li>
				<li className={style['ticket-info-item__item']}>
					<span>{stops.length === 0 ? 'нет пересадок' : stops.length === 1 ? `${stops.length} пересадка` : `${stops.length} пересадки`}</span>
					<strong>{stops.join(', ')}</strong>
				</li>
			</ul>
		</li>
	);
};

export default TicketInfoItem;

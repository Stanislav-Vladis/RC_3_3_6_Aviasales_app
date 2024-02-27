import TicketInfoItem from '../TicketInfoItem/TicketInfoItem';

import style from './TicketInfo.module.scss';

const TicketInfo = ({ segments }) => {
	return (
		<ul className={style['ticket-info']}>
			{segments.map((el, id) => (
				<TicketInfoItem key={id} {...el} />
			))}
		</ul>
	);
};

export default TicketInfo;

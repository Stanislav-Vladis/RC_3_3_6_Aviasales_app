import { formatPrice } from '../../utils/format';
import TicketInfo from '../TicketInfo/TicketInfo';

import style from './Ticket.module.scss';

const Ticket = props => {
	const { price, carrier } = props;

	return (
		<li className={style.ticket}>
			<div className={style['ticket__wrapper']}>
				<div className={style['ticket__header']}>
					<div className={style['ticket__price']}>{formatPrice(price)}</div>
					<div className={style['ticket__logo']}>
						<img src={`https://pics.avs.io/99/36/${carrier}.png`} alt='' />
					</div>
				</div>
				<TicketInfo {...props} />
			</div>
		</li>
	);
};

export default Ticket;

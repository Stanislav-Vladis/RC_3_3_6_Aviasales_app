import Navigation from '../Navigation/Navigation';
import TicketList from '../TicketList/TicketList';

import style from './Content.module.scss';

const Content = () => {
	return (
		<section className={style.content}>
			<Navigation />
			<TicketList />
		</section>
	);
};

export default Content;

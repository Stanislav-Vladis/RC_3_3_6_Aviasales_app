import { Offline, Online } from 'react-detect-offline';
import { Alert } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../components/Header/Header';
import Filters from '../components/Filters/Filters';
import Content from '../components/Content/Content';
import fetchTickets from '../store/slices/ticketsSlice/asyncActions';

import style from './App.module.scss';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTickets());
	}, []);

	return (
		<div className={style.aviasales}>
			<div className='container'>
				<div className={style['aviasales__inner']}>
					<Header />
					<Online>
						<main className={style.main}>
							<Filters />
							<Content />
						</main>
					</Online>
					<Offline>
						<main>
							<div className={style.internet}>
								<Alert message='Something has gone terribly wrong' description='Check your internet connection' type='error' showIcon />
							</div>
						</main>
					</Offline>
				</div>
			</div>
		</div>
	);
};

export default App;

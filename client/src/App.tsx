import CardInfo from './componentns/CardInfo';
import exp from './componentns/CardInfo.PrimaryInformation';
import PersonItem from './componentns/CardInfo.PersonItem';
import { createUseStyles } from 'react-jss';
import { createClassName } from './modules/join';
import EventList from './componentns/EventsList';
let CardInfoPrimaryInformation = exp.CardInfoPrimaryInformation;

const style = createUseStyles({
	flex: {
		display: 'flex',
	},
	wrapper: {
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
});

function App() {
	let className = style();
	let join = createClassName(className);
	return (
		<>
			<CardInfo title={'Первый заказчик'}>
				<div className="hello">hello</div>
			</CardInfo>
			<CardInfo title={'Второй заказчик'}>
				<div className="hello">hello</div>
			</CardInfo>

			<CardInfoPrimaryInformation></CardInfoPrimaryInformation>
			<CardInfo title={'Проектировщик'}>
				<div className={join('flex', 'wrapper')}>
					<PersonItem></PersonItem>
					<PersonItem></PersonItem>
					<PersonItem></PersonItem>
				</div>
			</CardInfo>
			<EventList></EventList>
		</>
	);
}

export default App;

import CardInfo from './componentns/CardInfo';
import CardInfoPrimaryInformation from './componentns/CardInfo.PrimaryInformation';

function App() {
	return (
		<>
			<CardInfo title={'Первый заказчик'}>
				<div className="hello">hello</div>
			</CardInfo>
			<CardInfo title={'Второй заказчик'}>
				<div className="hello">hello</div>
			</CardInfo>

			<CardInfoPrimaryInformation></CardInfoPrimaryInformation>
		</>
	);
}

export default App;

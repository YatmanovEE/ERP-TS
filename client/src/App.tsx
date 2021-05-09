import CardInfo from './componentns/CardInfo';

function App() {
	return (
		<>
			<CardInfo title={'Первый заказчик'}>
				<div className="hello">hello</div>
			</CardInfo>
			<CardInfo title={'Второй заказчик'}>
				<div className="hello">hello</div>
			</CardInfo>
		</>
	);
}

export default App;

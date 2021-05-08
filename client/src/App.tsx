import React, { useState } from 'react';
import CardInfo from './componentns/CardInfo';

function App() {
	return (
		<>
			<CardInfo title={'Заказчик'}>
				<div className="hello">hello</div>
			</CardInfo>
			<CardInfo title={'Заказчик'}>
				<div className="hello">hello</div>
			</CardInfo>
		</>
	);
}

export default App;

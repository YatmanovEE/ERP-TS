import { globalStyle } from './App.global.styled';
import { registryGlobalName } from './modules/join';
import { CardObject } from './pages/static.CardObject';
import CreateModalForm from './componentns/Modal';

function App() {
	let className = globalStyle();
	registryGlobalName(className);
	return (
		<>
		<CardObject></CardObject>
		{/* // <CreateModalForm title={'Основная информация'} id={'0'}></CreateModalForm> */}
		{/* // <EventsList list={[]}></EventsList> */}
		<CreateModalForm></CreateModalForm>
		</>
	);
}

export default App;

import { globalStyle } from './App.global.styled';
import { registryGlobalName } from './modules/join';
import { CardObject } from './pages/static.CardObject';
import CreateModalForm from './componentns/Modal';
import { ModalTemplate } from './componentns/ModalTemplate';
import Modal from './componentns/Modal';
import { useDispatch } from 'react-redux';
import { openModal } from './redux/actions/modal';
function App() {
	let className = globalStyle();
	registryGlobalName(className);
	let dispatch = useDispatch();
	dispatch(
		openModal({
			id: 'id',
			component: (
				<ModalTemplate id={'id'} title="fromApp">
					FromApp
				</ModalTemplate>
			),
		})
	);
	return (
		<>
			{/* <CardObject></CardObject> */}
			{/* // <CreateModalForm title={'Основная информация'} id={'0'}></CreateModalForm> */}
			{/* // <EventsList list={[]}></EventsList> */}
			{/* <CreateModalForm></CreateModalForm> */}
			<Modal></Modal>
		</>
	);
}

export default App;

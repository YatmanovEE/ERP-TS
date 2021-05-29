import { globalStyle } from './App.global.styled';
import { registryGlobalName } from './modules/join';
import { ModalTemplate } from './componentns/ModalTemplate';
import Modal from './componentns/Modal';
import { useDispatch } from 'react-redux';
import { openModal } from './redux/actions/modal';
import { LocationMenu } from './componentns/CardInfo/LocationMenu';
function App() {
	let className = globalStyle();
	registryGlobalName(className);
	let dispatch = useDispatch();
	// dispatch(
	// 	openModal({
	// 		id: 'id',
	// 		component: (
	// 			<ModalTemplate id={'id'} title="fromApp">
	// 				FromApp
	// 			</ModalTemplate>
	// 		),
	// 	})
	// );
	return (
		<>
			<LocationMenu id={'id'}></LocationMenu>
			<Modal></Modal>
		</>
	);
}

export default App;

import { globalStyle } from './App.global.styled';
import { registryGlobalName } from './modules/join';
import Modal from './componentns/Modal';
import { GeneralInfoMenu } from './componentns/CardInfo/GeneralInfoMenu';
function App() {
	let className = globalStyle();
	registryGlobalName(className);
	return (
		<>
			<GeneralInfoMenu id="1"></GeneralInfoMenu>
			<Modal></Modal>
		</>
	);
}

export default App;

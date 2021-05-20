import { globalStyle } from './App.global.styled';
import { registryGlobalName } from './modules/join';
import CardObject from './pages/static.CardObject';

function App() {
	let className = globalStyle();
	registryGlobalName(className);
	return <CardObject></CardObject>;
}

export default App;

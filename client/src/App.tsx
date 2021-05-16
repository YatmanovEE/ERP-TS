import { createUseStyles } from 'react-jss';
import { ITheme } from '.';
import { registryGlobalName } from './modules/join';
import CardObject from './pages/CardObject';

const style = createUseStyles((theme: ITheme) => ({
	'@global': {
		a: {
			color: theme.linkColor,
			outline: 'none',
			textDecoration: 'none',
		},
	},

	wrapper: {
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
}));

const globalStyle = createUseStyles({
	flex: {
		display: 'flex',
	},
	container: {
		color: 'red',
	},
});

function App() {
	registryGlobalName(globalStyle());
	return <CardObject></CardObject>;
}

export default App;

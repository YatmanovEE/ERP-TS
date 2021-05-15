import { createUseStyles } from 'react-jss';
import { ITheme } from '.';
import { createClassName } from './modules/join';
import CardObject from './pages/CardObject';

const style = createUseStyles((theme: ITheme) => ({
	'@global': {
		a: {
			color: theme.linkColor,
			outline: 'none',
			textDecoration: 'none',
		},
	},
	flex: {
		display: 'flex',
	},
	wrapper: {
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
}));

function App() {
	let className = style();
	let join = createClassName(className);
	return <CardObject></CardObject>;
}

export default App;

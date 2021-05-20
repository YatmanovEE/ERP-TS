import { createUseStyles } from 'react-jss';
import { ITheme } from '.';

export const globalStyle = createUseStyles((theme: ITheme) => ({
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
	wrap: {
		flexWrap: 'wrap',
	},
}));

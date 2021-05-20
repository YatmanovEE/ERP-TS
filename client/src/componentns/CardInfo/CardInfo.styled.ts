import { ITheme } from '../..';
import { createUseStyles } from 'react-jss';
export const cardInfoTitle__style = createUseStyles((theme: ITheme) => ({
	payloadContainer: {
		padding: '16px',
	},
	titleContainer: {
		justifyContent: 'space-between',
		backgroundColor: theme.backgroundColor,
		borderBottom: theme.border,
		alignItems: 'center',
	},
	menu: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer',
		width: '24px',
		height: '24px',
		pointsEvents: 'none',
		'&>span': {
			pointsEvents: 'none',
			textAlign: 'center',
			borderRadius: '100%',
			width: '4px',
			height: '4px',
			backgroundColor: 'black',
			marginTop: '4px',
		},
	},
	btn: {
		outline: 'none',
		border: 'none',
		padding: '10px',
		backgroundColor: 'red',
	},
	title: {},
}));

export const cardInfo__style = createUseStyles((theme: ITheme) => ({
	wrapper: {
		border: theme.border,
		margin: '11px',
		minWidth: '300px',
	},
	payloadContainer: {
		padding: '16px',
	},

	flex: {
		justifyContent: 'space-between',
	},
}));

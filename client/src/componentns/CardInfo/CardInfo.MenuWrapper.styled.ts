import { ITheme } from '../..';
import { createUseStyles } from 'react-jss';
export const menuWrapper__style = createUseStyles((theme: ITheme) => ({
	menu: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer',
		width: '20px',
		height: '20px',
		pointsEvents: 'none',
		'&>span': {
			pointEvents: 'none',
			textAlign: 'center',
			borderRadius: '100%',
			width: '4px',
			height: '4px',
			backgroundColor: 'black',
			marginTop: '2px',
		},
	},
	btn: {
		outline: 'none',
		border: 'none',
		padding: '10px',
		backgroundColor: 'transparent',
	},
}));

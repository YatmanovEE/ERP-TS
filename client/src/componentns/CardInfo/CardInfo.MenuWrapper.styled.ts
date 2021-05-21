import { ITheme } from '../..';
import { createUseStyles } from 'react-jss';
export const cardMenuWrapper__style = createUseStyles((theme: ITheme) => ({
	menu: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '20px',
		height: '20px',
		'&>span': {
			textAlign: 'center',
			borderRadius: '100%',
			width: '4px',
			height: '4px',
			backgroundColor: 'black',
			marginTop: '2px',
		},
	},
}));

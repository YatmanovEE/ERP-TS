import { createUseStyles } from 'react-jss';
import { ITheme } from '../..';

export namespace MenuWrapperStyle {
	export const Style = createUseStyles((theme: ITheme) => ({
		wrapper: {
			display: 'flex',
			flexDirection: 'column',
			background: theme.backgroundColor,
			boxShadow: theme.boxShadow,
			'&>div': {
				whiteSpace: 'nowrap',
				padding: '10px',
				cursor: 'pointer',
				transition: 'background-color 0.5s ease',
				'&:hover': {
					backgroundColor: '#8a8787',
				},
			},
		},
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
}

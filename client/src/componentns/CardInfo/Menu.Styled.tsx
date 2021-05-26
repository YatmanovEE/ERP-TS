import { createUseStyles } from 'react-jss';
import { ITheme } from '../..';
export namespace MenuStyled {
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
	}));
}

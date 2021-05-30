import { createUseStyles } from 'react-jss';
import { ITheme } from '.';

export const globalStyle = createUseStyles(
	(theme: ITheme) => ({
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
		btn: {
			border: 'none',
			padding: '10px',
			backgroundColor: 'transparent',
			cursor: 'pointer',
		},
		none: {
			display: 'none',
		},
	}),
	{
		name: 'global',
	}
);

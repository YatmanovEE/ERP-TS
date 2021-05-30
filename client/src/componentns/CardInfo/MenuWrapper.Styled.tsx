import { createUseStyles } from 'react-jss';
import { ITheme } from '../..';
export namespace MenuStyled {
	export const Style = createUseStyles((theme: ITheme) => ({
		wrapper: {
			display: 'flex',
			flexDirection: 'column',
			background: theme.backgroundColor,
			boxShadow: theme.boxShadow,
		},
	}));
}

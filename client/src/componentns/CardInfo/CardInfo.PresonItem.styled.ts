import { createUseStyles } from 'react-jss';
import { ITheme } from '../..';

export namespace PersonItemStyle {
	export const Description = createUseStyles(
		(theme: ITheme) => ({
			avatar: {
				width: '64px',
				height: '64px',
				backgroundColor: 'black',
				marginRight: '10px',
			},
			personInfo: {
				display: 'flex',
				flexDirection: 'column',
				'&>span': {
					marginTop: '5px',
				},
				'&__position': {
					color: 'red',
				},
			},
			wrapperJustify: {
				justifyContent: 'space-between',
			},
			wrapper: {
				padding: '10px',
				alignItems: 'center',
			},
		}),
		{
			name: 'PersonItemDescription',
		}
	);

	export let Style = createUseStyles(
		(theme: ITheme) => ({
			wrapper: {
				flexDirection: 'column',
				border: theme.border,
				marginRight: '10px',
				flexGrow: '1',
			},
		}),
		{
			name: 'PersonItem',
		}
	);

	export const Comments = createUseStyles(
		(theme: ITheme) => ({
			comments: {
				borderTop: theme.border,
				padding: '10px',
			},
		}),
		{
			name: 'PersonItemComments',
		}
	);
}

import { createUseStyles } from 'react-jss';
import { ITheme } from '..';
export namespace IModalTemplateStyled {
	export const Style = createUseStyles(
		(theme: ITheme) => ({
			modal: {
				boxShadow: `${theme.shadowOffset} ${theme.shadowBlack}`,
				backgroundColor: 'white',
				maxWidth: '600px',
				minWidth: '400px',
				flexDirection: 'column',
			},
			container: {
				padding: '20px 30px',
			},
			modal__title: {
				justifyContent: 'space-between',
				justifyItems: 'center',
				alignItems: 'center',
			},
			btn: {
				padding: '7px 16px',
				backgroundColor: 'white',
				marginLeft: '10px',
			},
			modal__bottom: {
				backgroundColor: theme.grey,
				'&>:first-child': {
					marginLeft: '0px',
				},
			},
			bottom__btn: {
				border: theme.border,
			},
			btn__save: {
				backgroundColor: theme.linkColor,
				color: 'white',
			},
		}),
		{
			name: 'Modal-template',
		}
	);
}

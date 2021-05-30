import { createUseStyles } from 'react-jss';
import { ITheme } from '../..';

export namespace IKebubMenuStyled {
	export const Style = createUseStyles((theme: ITheme) => ({
		menu: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			width: '20px',
			'&>span': {
				textAlign: 'center',
				borderRadius: '100%',
				width: '4px',
				height: '4px',
				backgroundColor: 'black',
				marginTop: '4px',
			},
		},
	}));
}

import { createUseStyles } from 'react-jss';
import { ITheme } from '../..';

export namespace GeneralInformationStyled {
	export const Style = createUseStyles((theme: ITheme) => ({
		container__image: {
			margin: '-10px',
			overflowX: 'auto',
			'-ms-overflow-style': 'none' /* IE and Edge */,
			scrollbarWidth: 'none' /* Firefox */,

			'&::-webkit-scrollbar': {
				display: 'none' /* Chronium */,
			},
			'&>img': {
				margin: '10px',
			},
			'&>img:first-child': { marginLeft: '0px' },
		},
		link: {
			margin: '-10px',
		},
		link__a: {
			margin: '10px',
		},

		location: {
			'&>figure': {
				margin: '0px',
				'&>figCaption': {
					margin: '10px',
					'&>span': {
						margin: '-10px',
					},
				},
			},
		},
		location__image: {
			overflow: 'hidden',
			'&>img': {},
		},
		cardInfoWrapper: {
			display: 'flex',
			flexWrap: 'wrap',
			'&>:first-child': {
				flex: '2 2 300px',
			},
			'&>:last-child': {
				flex: '1 2 300px',
			},
		},
	}));
}

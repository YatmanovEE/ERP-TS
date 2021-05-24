import React, { FC } from 'react';
import MenuWrapper from '../MenuWrapper';
import { connect } from 'react-redux';
import CreateModal from '../CreateModal';

import { createUseStyles } from 'react-jss';
import { ITheme } from '../..';

namespace ICardMenuWrapper {
	export type Props = {
		children: React.ReactChild;
		id: string;
	};
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

const CardMenuWrapper: FC<ICardMenuWrapper.Props> = ({ children, id }) => {
	let className = ICardMenuWrapper.Style();
	return (
		<>
			<MenuWrapper component={children} modal={<CreateModal id={id} />}>
				<div className={className.menu}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</MenuWrapper>
		</>
	);
};

export default connect(null, null)(CardMenuWrapper);

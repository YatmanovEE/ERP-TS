import React, { FC } from 'react';
import MenuWrapper from '../MenuWrapper';
import { cardInfoMenu__style } from './CardInfo.Menu.styled';
import { connect } from 'react-redux';

namespace ICardMenuWrapper {
	export type Props = {
		children: React.ReactChild;
	};
}

const CardMenuWrapper: FC<ICardMenuWrapper.Props> = ({ children }) => {
	let className = cardInfoMenu__style();
	return (
		<>
			<MenuWrapper component={children}>
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

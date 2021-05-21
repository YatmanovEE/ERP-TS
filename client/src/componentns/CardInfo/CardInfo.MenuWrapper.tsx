import React, { FC } from 'react';
import MenuWrapper from '../MenuWrapper';
import { cardMenuWrapper__style } from './CardInfo.MenuWrapper.styled';

interface ICardMenuWrapper {
	children: React.ReactChild;
}

export const CardMenuWrapper: FC<ICardMenuWrapper> = ({
	children,
}: ICardMenuWrapper) => {
	let className = cardMenuWrapper__style();
	return (
		<MenuWrapper component={children}>
			<div className={className.menu}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</MenuWrapper>
	);
};

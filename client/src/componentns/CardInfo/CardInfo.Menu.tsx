import React, { FC } from 'react';
import { createClassName } from '../../modules/join';
import MenuWrapper from '../MenuWrapper';
import { cardInfoMenu__style } from './CardInfo.Menu.styled';

interface ICardMenuWrapper {
	children: React.ReactChild;
}

export const CardMenuWrapper: FC<ICardMenuWrapper> = ({
	children,
}: ICardMenuWrapper) => {
	let className = cardInfoMenu__style();
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

let cardInfoMenu: string[] = [
	'Изменить описание',
	'Добавить ссылки',
	'Добавить фотографии',
];

export const MenuPersonItem: FC = () => {
	return (
		<CardMenuWrapper>
			<CardInfoMenu></CardInfoMenu>
		</CardMenuWrapper>
	);
};

export const CardInfoMenu: FC = () => {
	let className = cardInfoMenu__style();
	let join = createClassName(className);
	return (
		<div className={join('wrapper')}>
			<div data-id="modalID" data-title={'modalTitle'}>
				Modal
			</div>
			{cardInfoMenu.map((menuItem, key) => (
				<div key={menuItem + key}>{menuItem}</div>
			))}
		</div>
	);
};

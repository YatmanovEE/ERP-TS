import { FC } from 'react';
import { connect } from 'react-redux';
import { createClassName } from '../../modules/join';
import { cardInfoMenu__style } from './CardInfo.Menu.styled';

let cardInfoMenu: string[] = [
	'Изменить описание',
	'Добавить ссылки',
	'Добавить фотографии',
];

const CardInfoMenu: FC = () => {
	let className = cardInfoMenu__style();
	let join = createClassName(className);

	return (
		<div className={join('wrapper')}>
			{cardInfoMenu.map((menuItem, key) => (
				<div key={menuItem + key}>{menuItem}</div>
			))}
		</div>
	);
};

export default connect(null, null)(CardInfoMenu);

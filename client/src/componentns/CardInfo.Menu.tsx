import { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { createClassName } from '../modules/join';
import { ITheme } from '..';

const style = createUseStyles((theme: ITheme) => ({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		background: theme.backgroundColor,
		boxShadow: theme.boxShadow,
		padding: '10px',
		'&>span': {
			whiteSpace: 'nowrap',
			padding: '5px',
			cursor: 'pointer',
		},
	},
}));

let cardInfoMenu: string[] = [
	'Изменить описание',
	'Добавить ссылки',
	'Добавить фотографии',
];

const CardInfoMenu: FunctionComponent = () => {
	let className = style();
	let join = createClassName(className);

	return (
		<div className={join('wrapper')}>
			{cardInfoMenu.map((menuItem, key) => (
				<span key={menuItem + key}>{menuItem}</span>
			))}
		</div>
	);
};

export default connect(null, null)(CardInfoMenu);

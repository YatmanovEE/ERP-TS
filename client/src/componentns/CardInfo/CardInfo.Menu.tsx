import { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { ITheme } from '../..';
import { createClassName } from '../../modules/join';

const style = createUseStyles((theme: ITheme) => ({
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
				<div key={menuItem + key}>{menuItem}</div>
			))}
		</div>
	);
};

export default connect(null, null)(CardInfoMenu);

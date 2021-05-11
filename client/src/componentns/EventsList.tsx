import { FC } from 'react';
import { connect } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { ITheme } from './../index';
import { createClassName } from '../modules/join';

const eventList__style = createUseStyles((theme: ITheme) => ({
	wrapper: {
		backgroundColor: theme.secondaryBackground,
		padding: '35px 25px',
	},
}));

const EventList: FC = () => {
	let className = eventList__style();
	let join = createClassName(className);
	return (
		<div className={className.wrapper}>
			<EventItem></EventItem>
			<EventItem></EventItem>
			<EventItem></EventItem>
		</div>
	);
};

const eventItem__style = createUseStyles((theme: ITheme) => ({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	flex: {
		display: 'flex',
	},
	icon: {
		width: '40px',
		height: '40px',
		marginRight: '15px',
	},
	eventItem: {
		boxShadow: theme.boxShadow,
		padding: '17px',
		width: '100%',
		backgroundColor: 'white',

		margin: ' 20px 0px',
	},
	eventItem__title: {
		alignItems: 'center',
		marginBottom: '10px',
		justifyContent: 'space-between',
		'&>h3': {
			flex: 'auto',
		},
	},
	title__date: {
		marginRight: '10px',
	},
	date_red: {
		color: 'red',
	},
	title__avatar: {
		width: '30px',
		height: '30px',
		borderRadius: '100%',
		backgroundColor: 'black',
		justifySelf: 'flex-end',
	},
}));

const EventItem: FC = () => {
	let className = eventItem__style();
	let join = createClassName(className);
	return (
		<div className={join('container', 'flex')}>
			<img src="#" alt="icon" className={className.icon}></img>
			<div className={className.eventItem}>
				<div className={join('eventItem__title', 'flex')}>
					<span className={join('title__date', 'date_red')}>до 10 мая</span>
					<h3>Запланирована задача</h3>
					<img src="#" alt="avatar" className={className.title__avatar}></img>
				</div>

				<EventComment></EventComment>
			</div>
		</div>
	);
};

const eventComment__style = createUseStyles((theme: ITheme) => ({
	comment: {
		border: theme.border,
		padding: '10px 15px',
	},
}));

const EventComment: FC = () => {
	let className = eventComment__style();
	let join = createClassName(className);
	return (
		<div className={join('comment')}>
			Узнать когда выйдет аукцион и на какой площадке! Позвонить Константину
			Слуцкому
		</div>
	);
};

export default connect(null, null)(EventList);

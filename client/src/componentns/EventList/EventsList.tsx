import { FC, ReactNode, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { ITheme } from '../../index';
import { createClassName } from '../../modules/join';
import { showEvent } from '../../redux/actions/eventList';
import { IRootReducer } from '../../redux/stores/rootStore';
import { IEventState } from './../../redux/reducers/eventList.reducer';

const eventList__style = createUseStyles((theme: ITheme) => ({
	wrapper: {
		backgroundColor: theme.secondaryBackground,
		padding: '35px 25px',
	},
}));

namespace IEventList {
	export interface Props {
		list: IEventState[];
	}
}
export enum eventItemType {
	calendar = 'calendar',
	addComment = 'addComment',
	createObject = 'createObject',
	call = 'call',
}
namespace IEventItemWrapper {
	export interface Props {
		type: eventItemType;
		children?: ReactNode;
	}
}

export const EventList: FC<IEventList.Props> = (props) => {
	let className = eventList__style();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			showEvent({ url: 'https://jsonplaceholder.typicode.com/todos/20' })
		);
	}, [dispatch]);

	return (
		<div className={className.wrapper}>
			<EventItemWrapper type={eventItemType.calendar}>hello</EventItemWrapper>
			<EventItemWrapper type={eventItemType.createObject}></EventItemWrapper>
			<EventItemWrapper type={eventItemType.calendar}></EventItemWrapper>
		</div>
	);
};

const eventItem__style = createUseStyles((theme: ITheme) => ({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
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
}));

const EventItemWrapper: FC<IEventItemWrapper.Props> = ({ type, children }) => {
	let className = eventItem__style();
	let join = createClassName(className);
	switch (type) {
		case eventItemType.calendar:
			return (
				<div className={join('container', 'flex')}>
					<img src="#" alt="icon" className={className.icon}></img>
					<div className={className.eventItem}>
						<EventTitleCalendar></EventTitleCalendar>
						<EventComment>{children}</EventComment>
					</div>
				</div>
			);
		case eventItemType.addComment:
			return (
				<div className={join('container', 'flex')}>
					<img src="#" alt="icon" className={className.icon}></img>
					<div className={className.eventItem}>
						<EventTitleCalendar></EventTitleCalendar>
						<EventComment></EventComment>
					</div>
				</div>
			);
		case eventItemType.createObject:
			return (
				<div className={join('container', 'flex')}>
					<img src="#" alt="icon" className={className.icon}></img>
					<div className={className.eventItem}>
						<EventTitle></EventTitle>
					</div>
				</div>
			);
		default:
			return (
				<div className={join('container', 'flex')}>
					<img src="#" alt="icon" className={className.icon}></img>
					<div className={className.eventItem}>
						<EventTitle></EventTitle>
						<EventComment></EventComment>
					</div>
				</div>
			);
	}
};

const eventTitleCalendar__style = createUseStyles((theme: ITheme) => ({
	eventItem__title: {
		alignItems: 'center',
		marginBottom: '10px',
		justifyContent: 'space-between',
		'&>h3': {
			flex: 'auto',
		},
	},
	title__date: ({ color }: IEventTitleCalendar.Style) => ({
		marginRight: '10px',
		color: color,
	}),
	title__avatar: {
		width: '30px',
		height: '30px',
		borderRadius: '100%',
		backgroundColor: 'black',
		justifySelf: 'flex-end',
	},
}));

function dateFromFuture(date: string): boolean {
	let future = Date.parse(date);
	let now = Date.now();
	return future > now ? false : true;
}

let monthEnum: string[] = [
	'????????????',
	'??????????????',
	'??????????',
	'????????????',
	'??????	',
	'????????',
	'????????',
	'??????????????',
	'????????????????',
	'??????????????',
	'????????????',
	'??????????????',
];

namespace IEventTitleCalendar {
	export interface Style {
		color: string;
	}
}

const EventTitleCalendar: FC = () => {
	let date = '05-12-2021';
	let data = new Date(date);
	let color = {
		color: dateFromFuture(date) ? 'green' : 'red',
	};
	let className = eventTitleCalendar__style(color);
	let join = createClassName(className);
	return (
		<div className={join('eventItem__title', 'flex')}>
			<span className={join('title__date', 'date_red')}>
				{date !== 'infinity'
					? '????????????????'
					: `
                
				???? ${data.getDate()} ${monthEnum[data.getMonth() + 1].toLocaleLowerCase()}`}
			</span>
			<h3>?????????????????????????? ????????????</h3>
			<img src="#" alt="avatar" className={className.title__avatar}></img>
		</div>
	);
};

const EventTitle: FC = () => {
	return <div>???????????? ????????????</div>;
};

const eventComment__style = createUseStyles((theme: ITheme) => ({
	comment: {
		border: theme.border,
		padding: '10px 15px',
	},
}));

const EventComment: FC = ({ children }) => {
	let className = eventComment__style();
	let join = createClassName(className);
	return <div className={join('comment')}>{children || '???????????? ??????'}</div>;
};

const mapStateToProps = ({ eventList }: IRootReducer) => ({
	list: eventList,
});

export default connect(mapStateToProps, null)(EventList);

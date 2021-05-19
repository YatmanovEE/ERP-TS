import React, { FunctionComponent } from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { ITheme } from '../../';
import { createClassName } from '../../modules/join';
import CardInfoMenuWrapper from './CardInfo.MenuWrapper';

const cardInfo__style = createUseStyles((theme: ITheme) => ({
	wrapper: {
		border: theme.border,
		margin: '11px',
		minWidth: '300px',
	},
	payloadContainer: {
		padding: '16px',
	},

	flex: {
		justifyContent: 'space-between',
	},
}));

interface ICardInfoTitle__Props {
	title: string;
}

interface ICardInfo__Props extends ICardInfoTitle__Props {
	children: JSX.Element;
}

const CardInfo: FunctionComponent<ICardInfo__Props> = ({ title, children }) => {
	const className = cardInfo__style();
	return (
		<div className={className.wrapper}>
			<CardInfoTitle title={title}></CardInfoTitle>
			<div className={className.payloadContainer}>{children}</div>
		</div>
	);
};

const cardInfoTitle__style = createUseStyles((theme: ITheme) => ({
	payloadContainer: {
		padding: '16px',
	},
	title: {},
	flex1: {
		justifyContent: 'space-between',
		// display: 'flex',
	},
	titleContainer: {
		backgroundColor: theme.backgroundColor,
		borderBottom: theme.border,
		alignItems: 'center',
	},
	menu: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer',
		width: '24px',
		height: '24px',
		pointsEvents: 'none',
		'&>span': {
			pointsEvents: 'none',
			textAlign: 'center',
			borderRadius: '100%',
			width: '4px',
			height: '4px',
			backgroundColor: 'black',
			marginTop: '4px',
		},
	},
	btn: {
		outline: 'none',
		border: 'none',
		padding: '10px',
		backgroundColor: 'red',
	},
}));

const CardInfoTitle: FunctionComponent<ICardInfoTitle__Props> = (props) => {
	let className = cardInfoTitle__style();
	let join = createClassName(className);

	return (
		<div
			className={join('payloadContainer', 'titleContainer', 'flex1', 'flex')}
		>
			<div className={className.title}>{props.title}</div>
			<CardInfoMenuWrapper></CardInfoMenuWrapper>
		</div>
	);
};

export default connect(null, null)(CardInfo);

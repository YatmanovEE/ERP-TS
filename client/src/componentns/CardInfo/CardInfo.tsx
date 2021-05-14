import React, { FunctionComponent, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { ITheme } from '../../';
import { createClassName } from '../../modules/join';
import CardInfoMenu from './CardInfo.Menu';
import { ToolTipWrapper } from '../ToolTipWrapper';

const cardInfo__style = createUseStyles((theme: ITheme) => ({
	wrapper: {
		border: theme.border,
		margin: '11px 0px 11px 0px',
	},
	payloadContainer: {
		padding: '16px',
	},

	flex: {
		display: 'flex',
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
	title: {},
	payloadContainer: {
		padding: '16px',
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
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
}));

const CardInfoTitle: FunctionComponent<ICardInfoTitle__Props> = (props) => {
	const [toolTipState, setToolTipState] = useState(false);

	let className = cardInfoTitle__style();
	let join = createClassName(className);
	const node = React.useRef<HTMLDivElement>(null);
	useEffect(() => {
		const current = node.current;
		const menuHandler = (e: Event) => {
			if (e.target === current) {
				setToolTipState(!toolTipState);
			} else {
				setToolTipState(false);
			}
		};
		document.body!.addEventListener('click', menuHandler, {
			capture: true,
		});
		return () =>
			document.body!.removeEventListener('click', menuHandler, {
				capture: true,
			});
	}, [toolTipState]);

	return (
		<div className={join('payloadContainer', 'titleContainer', 'flex')}>
			<div className={className.title}>{props.title}</div>

			<div className={className.menu} ref={node}>
				<span></span>
				<span></span>
				<span></span>

				{toolTipState && (
					<ToolTipWrapper refNode={node}>
						<CardInfoMenu></CardInfoMenu>
					</ToolTipWrapper>
				)}
			</div>
		</div>
	);
};

export default connect(null, null)(CardInfo);

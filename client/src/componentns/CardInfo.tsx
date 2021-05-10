import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import { createUseStyles } from 'react-jss';
import { createClassName } from '../modules/join';
import { ToolTipWrapper } from './ToolTipWrapper';
import { MoreVert } from '@material-ui/icons';
import { connect } from 'react-redux';
import CardInfoMenu from './CardInfoMenu';
import { ITheme } from '..';

const style = createUseStyles((theme: ITheme) => ({
	wrapper: {
		border: theme.border,
		margin: '11px 0px 11px 0px',
	},
	title: {},
	payloadContainer: {
		padding: '16px',
	},
	titleContainer: {
		backgroundColor: theme.backgroundColor,
		borderBottom: theme.border,
		alignItems: 'center',
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	menu: {
		display: 'flex',
		flexDirection: 'column',
		width: '20px',
		height: '20px',
		justifyContent: 'center',
		cursor: 'pointer',
		'&>span': {
			textAlign: 'center',
		},
	},
}));

interface ICardInfo__Props {
	title: string;
	children: JSX.Element;
}

const CardInfo: FunctionComponent<ICardInfo__Props> = (props) => {
	const className = style();
	const [toolTipState, setToolTipState] = useState(false);
	let join = createClassName(className);
	const menuHandler = (ref?: React.RefObject<Element>) => {
		setToolTipState(!toolTipState);
	};
	const node = React.useRef<HTMLDivElement>(null);
	return (
		<div className={className.wrapper}>
			<div className={join('payloadContainer', 'titleContainer', 'flex')}>
				<div className={className.title}>{props.title}</div>

				<div
					className={className.menu}
					ref={node}
					onClick={() => menuHandler(node)}
				>
					<MoreVert></MoreVert>
					{toolTipState && (
						<ToolTipWrapper refNode={node}>
							<CardInfoMenu></CardInfoMenu>
						</ToolTipWrapper>
					)}
				</div>
			</div>
			<div className={className.payloadContainer}>{props.children}</div>
		</div>
	);
};

export default connect(null, null)(CardInfo);

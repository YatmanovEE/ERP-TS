import { useState } from 'react';
import React from 'react';
import { FunctionComponent } from 'react';
import { createUseStyles } from 'react-jss';
import { createClassName } from '../modules/join';
import { ToolTipWrapper } from './ToolTipWrapper';
import { MoreVert } from '@material-ui/icons';
import { connect, useDispatch, useSelector } from 'react-redux';
import { toogleMenu } from './../redux/actions/cardInfo';
import { IRootReducer } from './../redux/stores/rootStore';

interface ICardInfo__Props {
	title: string;
	children: JSX.Element;
}

enum BB {
	BORDER = '1px solid #E1E1E1',
	BACKGROUND_COLOR = '#FBFBFB',
}

interface ITestArr {
	title: string;
	payload: string;
}

let testArr: ITestArr[] = [
	{
		title: '1',
		payload: 'payload',
	},
	{
		title: '1',
		payload: 'payload',
	},
	{
		title: '1',
		payload: 'payload',
	},
	{
		title: '1',
		payload: 'payload',
	},
	{
		title: '1',
		payload: 'payload',
	},
];

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
const CardInfo: FunctionComponent<ICardInfo__Props> = (props) => {
	// const [tooltipState, setTooltipState] = useState(false);
	const dispatch = useDispatch();
	const toolTipState = useSelector(
		(state: IRootReducer) => state.card.id === props.title && state.card.status
	);

	const className = style();
	let join = createClassName(className);
	const menuHandler = (ref?: React.RefObject<Element>) => {
		dispatch(toogleMenu({ id: props.title, status: !toolTipState }));
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
							<div className={className.wrapper}>
								{testArr.map((testNode, key) => {
									return (
										<div key={testNode.title + key}>
											title:{testNode.title}
											payload:{testNode.payload}
										</div>
									);
								})}
							</div>
						</ToolTipWrapper>
					)}
				</div>
			</div>
			<div className={className.payloadContainer}>{props.children}</div>
		</div>
	);
};

export default connect(null, null)(CardInfo);

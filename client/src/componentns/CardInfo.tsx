import { useState } from 'react';
import React from 'react';
import { FunctionComponent } from 'react';
import { createUseStyles } from 'react-jss';
import { createClassName } from '../modules/join';
import { ToolTipWrapper } from './ToolTipWrapper';

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

export const CardInfo: FunctionComponent<ICardInfo__Props> = (props) => {
	const [tooltipState, setTooltipState] = useState(false);
	const style = createUseStyles({
		wrapper: {
			border: BB.BORDER,
		},
		title: {},
		payloadContainer: {
			padding: '16px',
		},
		titleContainer: {
			backgroundColor: BB.BACKGROUND_COLOR,
			borderBottom: BB.BORDER,
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
		menuWrapper: {
			position: 'relative',
		},
	});
	const className = style();
	let join = createClassName(className);
	const menuHandler = (ref?: React.RefObject<Element>) => {
		setTooltipState(!tooltipState);
	};
	const node = React.useRef<HTMLDivElement>(null);
	return (
		<div className={className.wrapper}>
			<div className={join('payloadContainer', 'titleContainer', 'flex')}>
				<div className={className.title}>{props.title}</div>
				<div className={className.menuWrapper}>
					<div
						className={className.menu}
						ref={node}
						onClick={() => menuHandler(node)}
					>
						<span>.</span>
						<span>.</span>
						<span>.</span>
					</div>
					{tooltipState && (
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

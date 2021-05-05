import { useState } from 'react';
import React from 'react';
import { FunctionComponent } from 'react';
import { createUseStyles } from 'react-jss';
import { createClassName } from '../modules/join';

interface ICardInfo__Props {
	title: string;
	children: JSX.Element;
}

enum BB {
	BORDER = '1px solid #E1E1E1',
	BACKGROUND_COLOR = '#FBFBFB',
}

export const CardInfo: FunctionComponent<ICardInfo__Props> = (props) => {
	const [ToolTipWrapper, setToolTipWrapper] = useState(false);
	const style = createUseStyles({
		wrapper: {
			border: BB.BORDER,
		},
		title: {},
		container: {
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
				marign: '2px',
			},
		},
		menuWrapper: {
			position: 'relative',
		},
	});
	const className = style();
	let join = createClassName(className);
	const menuHandler = (ref?: React.RefObject<Element>) => {
		setToolTipWrapper(!ToolTipWrapper);
	};
	const node = React.useRef<HTMLDivElement>(null);
	return (
		<div className={className.wrapper}>
			<div className={join('container', 'titleContainer', 'flex')}>
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
				</div>
			</div>
			<div className={className.container}>{props.children}</div>
		</div>
	);
};

interface IHebubMenu__Props {
	refNode?: React.RefObject<HTMLDivElement>;
	children: React.ReactNode;
	childrenStyle: {
		childrenWidth: number;
		childrenHeight: number;
	};
}

interface IPos {
	pos: DOMRect | undefined;
}
interface IPosY extends IPos {
	childrenHeight: number;
}
interface IPosX extends IPos {
	childrenWidth: number;
}
export const ToolTipWrapper = ({
	refNode,
	children,
	childrenStyle,
}: IHebubMenu__Props) => {
	let pos = refNode?.current?.getBoundingClientRect();
	let childrenWidth = childrenStyle.childrenWidth;
	let childrenHeight = childrenStyle.childrenHeight;
	const [yPosChildren] = useState(() => yPos({ pos, childrenHeight }));
	const [xPosChildren] = useState(() => xPos({ pos, childrenWidth }));

	function yPos({ pos, childrenHeight }: IPosY): number {
		let ret = 0;
		if (pos?.y !== undefined) {
			if (pos.y < childrenHeight) {
				ret = pos.height;
			} else {
				ret = -childrenHeight;
			}
		}
		return ret;
	}
	function xPos({ pos, childrenWidth }: IPosX): number {
		let ret = 0;
		if (pos?.x !== undefined) {
			if (pos.x < childrenWidth) {
				ret = pos.width;
			} else {
				ret = -childrenWidth;
			}
		}
		return ret;
	}

	let style = createUseStyles(
		{
			menu: {
				display: 'flex',
				flexDirection: 'column',
				minWidth: childrenWidth + 'px',
				minHeight: childrenHeight + 'px',
				// backgroundColor: 'red',
				justifyContent: 'center',
				'&>span': {
					textAlign: 'center',
					marign: '2px',
				},
				position: 'absolute',
				top: `${yPosChildren}px`,
				left: `${xPosChildren}px`,
			},
		},
		{ name: 'Parent' }
	);
	let className = style();
	let join = createClassName(className);

	return <div className={join('menu')}>{children}</div>;
};

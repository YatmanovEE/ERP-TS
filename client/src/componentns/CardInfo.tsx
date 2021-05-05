import { CSSProperties, useEffect, useLayoutEffect, useState } from 'react';
import React from 'react';
import { FunctionComponent } from 'react';
import { createUseStyles, DefaultTheme } from 'react-jss';
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
}

interface IPos {
	posParent: DOMRect | undefined;
}
interface IPosY extends IPos {
	childrenHeight: number;
}
interface IPosX extends IPos {
	childrenWidth: number;
}
export const ToolTipWrapper = ({ refNode, children }: IHebubMenu__Props) => {
	let posParent = refNode?.current?.getBoundingClientRect();
	const [yPosChildren, setYPosChildren] = useState(0);
	const [xPosChildren, setXPosChildren] = useState(0);

	// let childrenWidth = childrenStyle.childrenWidth;
	// let childrenHeight = childrenStyle.childrenHeight;

	function yPos({ posParent, childrenHeight }: IPosY): number {
		let ret = 0;
		if (posParent?.y !== undefined) {
			if (posParent.y < childrenHeight) {
				ret = posParent.height;
			} else {
				ret = -childrenHeight;
			}
		}
		return ret;
	}
	function xPos({ posParent, childrenWidth }: IPosX): number {
		let ret = 0;
		if (posParent?.x !== undefined) {
			if (posParent.x < childrenWidth) {
				ret = posParent.width;
			} else {
				ret = -childrenWidth;
			}
		}
		return ret;
	}
	let className = 'wrapper-item';

	useLayoutEffect(() => {
		let elem = document.querySelector(`.${className}`);
		let paramElem = elem?.getBoundingClientRect();
		if (paramElem) {
			let childrenHeight = paramElem.height;
			let childrenWidth = paramElem.width;
			setYPosChildren(yPos({ posParent, childrenHeight }));
			setXPosChildren(xPos({ posParent, childrenWidth }));
		}
	}, []);
	let wrapper: CSSProperties = {
		position: 'absolute',
		top: `${yPosChildren}px`,
		left: `${xPosChildren}px`,
	};

	return (
		<div className={className} style={wrapper}>
			{children}
		</div>
	);
};

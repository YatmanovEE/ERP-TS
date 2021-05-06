import { CSSProperties, useLayoutEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

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
const style = createUseStyles({
	payloadContainer: {
		position: 'absolute',
	},
});

export const ToolTipWrapper = ({ refNode, children }: IHebubMenu__Props) => {
	let posParent = refNode?.current?.getBoundingClientRect();
	const [yPosChildren, setYPosChildren] = useState(0);
	const [xPosChildren, setXPosChildren] = useState(0);

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
	let className = style();

	useLayoutEffect(() => {
		let elem = document.querySelector(`.${className.payloadContainer}`);
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
		<div className={className.payloadContainer} style={wrapper}>
			{children}
		</div>
	);
};

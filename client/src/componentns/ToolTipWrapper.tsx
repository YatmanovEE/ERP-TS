import { useLayoutEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

interface IToolTipWrapper__Props {
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

interface ITooltipWrapperStyle__props {
	posChildren: {
		y: number;
		x: number;
	};
}
const style = createUseStyles({
	payloadContainer: ({ posChildren }: ITooltipWrapperStyle__props) => ({
		position: 'absolute',
		top: `${posChildren.y}px`,
		left: `${posChildren.x}px`,
	}),
});

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

export const ToolTipWrapper = ({
	refNode,
	children,
}: IToolTipWrapper__Props) => {
	const [posChildren, setPosChildren] = useState({
		y: 0,
		x: 0,
	});

	let className = style({ posChildren });
	useLayoutEffect(() => {
		let posParent = refNode?.current?.getBoundingClientRect();
		let elem = document.getElementsByClassName(className.payloadContainer)[0];
		let paramElem = elem?.getBoundingClientRect();
		if (paramElem) {
			let childrenHeight = paramElem.height;
			let childrenWidth = paramElem.width;
			let y = yPos({ posParent, childrenHeight });
			let x = xPos({ posParent, childrenWidth });
			setPosChildren((prev) => {
				return { ...prev, ...{ x, y } };
			});
		}
	}, [className.payloadContainer, refNode]);
	return <div className={className.payloadContainer}>{children}</div>;
};

import { useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss';

interface IToolTipWrapper__Props {
	readonly refNode: React.RefObject<HTMLDivElement>;
	readonly children: React.ReactNode;
}

interface IPos {
	readonly posParent: DOMRect | undefined;
}
interface IPosY extends IPos {
	readonly childrenHeight: number;
}
interface IPosX extends IPos {
	readonly childrenWidth: number;
}

interface IPosStyle {
	readonly x: number | undefined;
	readonly y: number | undefined;
}

interface ITooltipWrapperStyle__props {
	posChildren: IPosStyle;
	posParent: IPosStyle;
}
const style = createUseStyles({
	payloadContainer: ({ posChildren }: ITooltipWrapperStyle__props) => ({
		position: 'absolute',
		top: `${posChildren.y}px`,
		left: `${posChildren.x}px`,
	}),
	wrapper: ({ posParent }: ITooltipWrapperStyle__props) => ({
		position: 'absolute',
		top: `${posParent.y}px`,
		left: `${posParent.x}px`,
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
	const [posChildren, setPosChildren] = useState<IPosStyle>({
		y: 0,
		x: 0,
	});
	const [posParent, setPosParent] = useState<IPosStyle>({
		y: 0,
		x: 0,
	});

	let className = style({ posChildren, posParent });
	useLayoutEffect(() => {
		let rectParent = refNode?.current?.getBoundingClientRect();
		let elem = document.getElementsByClassName(className.payloadContainer)[0];
		let paramElem = elem?.getBoundingClientRect();
		if (paramElem) {
			let childrenHeight = paramElem.height;
			let childrenWidth = paramElem.width;
			let y = yPos({ posParent: rectParent, childrenHeight });
			let x = xPos({ posParent: rectParent, childrenWidth });

			setPosChildren({ x, y });
			setPosParent({ x: rectParent?.left, y: rectParent?.top });
		}
	}, [className.payloadContainer, refNode]);

	if (refNode?.current) {
		return ReactDOM.createPortal(
			<div className={className.wrapper}>
				<div className={className.payloadContainer}>{children}</div>
			</div>,
			document.body
		);
	} else {
		return null;
	}
};

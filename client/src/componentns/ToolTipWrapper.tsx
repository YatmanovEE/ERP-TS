import { useCallback, useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { AnimatedPortal } from './AnimatedPortal';

interface IToolTipWrapper__Props {
	readonly refNode: React.RefObject<HTMLDivElement>;
	readonly children: React.ReactNode;
	readonly handler: () => void;
}

interface IPos {
	readonly posParent: DOMRect | undefined;
}
interface IPosY extends IPos {
	readonly childHeight: number;
}
interface IPosX extends IPos {
	readonly childWidth: number;
}

interface IPosStyle {
	readonly x: number | undefined;
	readonly y: number | undefined;
}

interface ITooltipWrapperStyle__props {
	posChildren: IPosStyle;
	posParent: IPosStyle;
	duration: number;
}
const style = createUseStyles(
	{
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
		container: ({ duration }: ITooltipWrapperStyle__props) => ({
			position: 'fixed',
			top: '0px',
			left: '0px',
			width: '100%',
			height: '100%',
			backgroundColor: 'transparent',
			opacity: 0,
			'&-enter': {
				opacity: 0,
			},
			'&-enter-active': {
				opacity: 1,
				transition: `opacity ${duration}ms`,
			},
			'&-enter-done': {
				opacity: 1,
			},
			'&-exit': {
				opacity: 1,
			},
			'&-exit-active': {
				opacity: 0,
				transition: `opacity ${duration}ms`,
			},
		}),
	},
	{
		name: 'ToolTipWrapper',
	}
);

function yPos({ posParent, childHeight: childrenHeight }: IPosY): number {
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
function xPos({ posParent, childWidth: childrenWidth }: IPosX): number {
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

const once = (fn: () => void) => {
	let done = true;
	return () => {
		if (done) {
			done = false;
			return fn();
		}
	};
};
export const ToolTipWrapper = ({
	refNode: parentRef,
	children,
	handler,
}: IToolTipWrapper__Props) => {
	const [posChildren, setPosChildren] = useState<IPosStyle>({
		y: 0,
		x: 0,
	});
	const [posParent, setPosParent] = useState<IPosStyle>({
		y: 0,
		x: 0,
	});

	// let childRef = useRef<HTMLDivElement>(null);
	const [updatePos, setUpdatePos] = useState(0);
	let duration = 200;

	let className = style({ posChildren, posParent, duration });
	let animationRef = useRef(null);
	const childRef = useCallback(
		(childRef: HTMLDivElement) => {
			let parentRect = parentRef?.current?.getBoundingClientRect();
			let childRect = childRef?.getBoundingClientRect();
			if (childRect) {
				let childHeight = childRect?.height;
				let childWidth = childRect?.width;
				let y = yPos({ posParent: parentRect, childHeight: childHeight });
				let x = xPos({ posParent: parentRect, childWidth: childWidth });

				setPosChildren({ x, y });
				setPosParent({ x: parentRect?.left, y: parentRect?.top });
			}
		},
		[parentRef]
	);

	function resizeHandler() {
		setUpdatePos((prev) => prev + 1);
	}
	useEffect(() => {
		let handleWrapper = once(() => handler());
		window.addEventListener('scroll', (e) => {
			e.preventDefault();
			handleWrapper();
		});
		window.addEventListener('resize', resizeHandler);
		return () => {
			window.removeEventListener('scroll', (e) => {
				e.preventDefault();
				handleWrapper();
			});
			window.removeEventListener('resize', resizeHandler);
		};
	}, [handler]);
	return (
		<AnimatedPortal
			whereElem={document.body}
			duration={duration}
			activeState={parentRef?.current}
			className={className.container}
			nodeRef={animationRef}
		>
			<div
				className={className.container}
				onClick={() => handler()}
				ref={animationRef}
			>
				<div className={className.wrapper}>
					<div className={className.payloadContainer} ref={childRef}>
						{children}
					</div>
				</div>
			</div>
		</AnimatedPortal>
	);
};

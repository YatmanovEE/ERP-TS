import { useCallback, useEffect, useRef, useState } from 'react';
import { once } from '../modules/once';
import { AnimatedPortal } from './AnimatedPortal';
import { ToolTipWrapperStyled } from './ToolTipWrapper.styled';

interface IPos {
	readonly posParent: DOMRect | undefined;
}
interface IPosY extends IPos {
	readonly childHeight: number;
}
interface IPosX extends IPos {
	readonly childWidth: number;
}

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

namespace IToolTipWrapper {
	export type Props = {
		readonly refNode: React.RefObject<HTMLDivElement>;
		readonly children: React.ReactNode;
		readonly handler: () => void;
	};
}

export const ToolTipWrapper = ({
	refNode: parentRef,
	children,
	handler,
}: IToolTipWrapper.Props) => {
	const [posChildren, setPosChildren] =
		useState<ToolTipWrapperStyled.IPosStyle>({
			y: 0,
			x: 0,
		});
	const [posParent, setPosParent] = useState<ToolTipWrapperStyled.IPosStyle>({
		y: 0,
		x: 0,
	});

	const [, setUpdatePos] = useState(0);
	let duration = 200;

	let className = ToolTipWrapperStyled.Style({
		posChildren,
		posParent,
		duration,
	});
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

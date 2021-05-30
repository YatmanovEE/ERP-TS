import { ReactChild, FC, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

namespace IAnimatedPortal {
	export interface Props {
		children?: ReactChild;
		whereElem: Element;
		duration: number;
		//TODO Найти какой тип для truthy and falsy значений
		activeState: any;
		nodeRef: React.MutableRefObject<null>;
		className: string;
	}
}
/**
 * @param whereElem element, where Portal is created
 * @param duration animation-duration
 * @param activeState truthy or falsy variable, when component will be returned portal or returned null
 * @param nodeRef ref wrapper that will be animated
 * @param wrapper class name that will be animated
 * @returns Portal or Null
 */
export const AnimatedPortal: FC<IAnimatedPortal.Props> = ({
	whereElem,
	duration,
	activeState,
	nodeRef,
	children,
	className,
}) => {
	const [active, setActive] = useState(false);
	const [render, setRender] = useState(false);
	useEffect(() => {
		if (activeState) {
			setRender(activeState);
			setTimeout(() => {
				setActive(true);
			}, 0);
		} else {
			setActive(false);
			setTimeout(() => {
				setRender(activeState);
			}, duration);
		}
	}, [duration, activeState]);
	if (render) {
		return ReactDOM.createPortal(
			<CSSTransition
				in={active}
				timeout={duration}
				classNames={className}
				nodeRef={nodeRef}
				mountOnEnter
			>
				{children}
			</CSSTransition>,
			whereElem
		);
	}
	return null;
};

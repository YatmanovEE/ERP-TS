import { ReactChild, SyntheticEvent, useEffect, useState } from 'react';
import { FC, useRef } from 'react';
import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss';
import { ITheme } from '..';
import { IRootReducer } from '../redux/stores/rootStore';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { closeModal } from '../redux/actions/modal';
import { CSSTransition } from 'react-transition-group';

namespace IModal {
	export interface Props extends ConnectedProps<typeof connector> {
		children?: ReactChild;
	}
	export const Style = createUseStyles(
		(theme: ITheme) => ({
			wrapper: (duration: number) => ({
				position: 'fixed',
				width: '100%',
				height: '100%',
				left: '0px',
				top: '0px',
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
			container: {
				display: 'flex',
				justifyContent: 'center',
			},
		}),
		{ name: 'Modal' }
	);
}

const Modal: FC<IModal.Props> = ({ modal }) => {
	let duration = 200;
	let className = IModal.Style(duration);
	let dispatch = useDispatch();
	function closeModalhandler(event: SyntheticEvent<HTMLDivElement>): void {
		if (event.target === event.currentTarget) {
			dispatch(closeModal({ id: modal.id }));
		}
	}
	const [active, setActive] = useState(false);
	const [render, setRender] = useState(false);
	useEffect(() => {
		if (modal.active) {
			setRender(modal.active);
			setTimeout(() => {
				setActive(true);
			}, 0);
		} else {
			setActive(false);
			setTimeout(() => {
				setRender(modal.active);
			}, duration);
		}
	}, [duration, modal.active]);
	const node = useRef(null);
	if (render) {
		return ReactDOM.createPortal(
			<CSSTransition
				in={active}
				timeout={duration}
				classNames={className.wrapper}
				nodeRef={node}
				mountOnEnter
			>
				<div className={className.wrapper} ref={node}>
					<div
						className={className.container}
						onClick={(e: SyntheticEvent<HTMLDivElement>) =>
							closeModalhandler(e)
						}
					>
						{modal.component}
					</div>
				</div>
			</CSSTransition>,
			document.body
		);
	}
	return null;
};

const mapStateToProps = ({ modal }: IRootReducer) => ({
	modal,
});

const connector = connect(mapStateToProps);
export default connector(Modal);

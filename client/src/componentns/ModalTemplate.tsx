import { FC, ReactChild } from 'react';
import { useDispatch } from 'react-redux';
import { createClassName } from '../modules/join';
import { closeModal } from '../redux/actions/modal';
import { IModalTemplateStyled } from './ModalTemplate.styled';

namespace IModalTemplate {
	export type Props = {
		title: string;
		id: string;
		children: ReactChild;
	};
}

export const ModalTemplate: FC<IModalTemplate.Props> = ({
	title,
	id,
	children,
}) => {
	let className = IModalTemplateStyled.Style();
	let join = createClassName(className);
	let dispatch = useDispatch();

	return (
		<div className={join('flex', className.modal)}>
			<div className={join('flex', 'container', className.modal__title)}>
				<h3>{title}</h3>
				<button
					className={join('btn')}
					onClick={() => dispatch(closeModal({ id }))}
				>
					X
				</button>
			</div>
			<div className={className.container}>{children}</div>
			<div className={join(className.modal__border, 'container')}>
				<button className={join('btn', 'border__btn', className.btn__save)}>
					Сохранить
				</button>
				<button className={join('btn', 'border__btn')}>Отменить</button>
			</div>
		</div>
	);
};

import { IModalState } from '../reducers/modal.reducer';
import { ModalTypesActions } from '../types';
import { IAction } from './../reducers/reducers';

export type IModal<T> = IAction<ModalTypesActions, T>;

export declare type IOpenModal = ({
	id,
	active,
}: IModalState) => IModal<IModalState>;

export const openModal: IOpenModal = ({ id, active }) => {
	return {
		type: ModalTypesActions.OPEN,
		payload: {
			id,
			active,
		},
	};
};

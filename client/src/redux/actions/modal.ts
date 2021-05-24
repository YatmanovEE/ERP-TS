import { IModalState } from '../reducers/modal.reducer';
import { ModalTypesActions } from '../types';
import { IAction } from './../reducers/reducers';

export type IModal<T> = IAction<ModalTypesActions, T>;

export declare type Modal = (id: string) => IModal<IModalState>;

export const openModal: Modal = (id) => {
	return {
		type: ModalTypesActions.OPEN,
		payload: {
			id,
			active: true,
		},
	};
};
export const closeModal: Modal = (id) => {
	return {
		type: ModalTypesActions.CLOSE,
		payload: {
			id,
			active: false,
		},
	};
};

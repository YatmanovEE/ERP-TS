import { IModalState } from '../reducers/modal.reducer';
import { ModalTypesActions } from '../types';
import { IAction } from './../reducers/reducers';

export type IModal<T> = IAction<ModalTypesActions, T>;

export declare type Modal<T> = (payload: T) => IModal<IModalState>;
export type IModalTypeClose = {
	id: string;
};
export type IModalTypeOpen = IModalTypeClose & {
	component: React.ReactElement;
};

export const openModal: Modal<IModalTypeOpen> = (payload: IModalTypeOpen) => {
	return {
		type: ModalTypesActions.OPEN,
		payload: {
			id: payload.id,
			active: true,
			component: payload.component,
		},
	};
};
export const closeModal: Modal<IModalTypeClose> = (
	payload: IModalTypeClose
) => {
	return {
		type: ModalTypesActions.CLOSE,
		payload: {
			id: payload.id,
			active: false,
			component: null,
		},
	};
};

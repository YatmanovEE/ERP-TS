import { IModalState, IModaltypes } from '../reducers/modal.reducer';
import { ModalTypesActions } from '../types';
import { IAction } from './../reducers/reducers';

export type IModal<T> = IAction<ModalTypesActions, T>;

export declare type Modal<T> = (payload: T) => IModal<IModalState>;
type ModalTypeClose = {
	id: string;
};
type ModalTypeOpen = ModalTypeClose & {
	component: React.ReactElement;
};

export const openModal: Modal<ModalTypeOpen> = (payload) => {
	return {
		type: ModalTypesActions.OPEN,
		payload: {
			id: payload.id,
			active: true,
			component: payload.component,
		},
	};
};
export const closeModal: Modal<ModalTypeClose> = (payload) => {
	return {
		type: ModalTypesActions.CLOSE,
		payload: {
			id: payload.id,
			active: false,
			component: null,
		},
	};
};

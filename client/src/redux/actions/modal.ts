import { IModalState } from '../reducers/modal.reducer';
import { ModalTypesActions } from '../types';
import { IAction } from '../reducers/types';

export type IModalAction<T> = IAction<ModalTypesActions, T>;

export declare type ModalAction<T> = (payload: T) => IModalAction<IModalState>;
export type IModalTypeClose = {
	id: string;
};
export type IModalTypeOpen = IModalTypeClose & {
	component: React.ReactElement;
};

/**
 * @param component must have a closeModal action button.
 *
 */
export const openModal: ModalAction<IModalTypeOpen> = (payload) => {
	return {
		type: ModalTypesActions.OPEN,
		payload: {
			id: payload.id,
			active: true,
			component: payload.component,
		},
	};
};
export const closeModal: ModalAction<IModalTypeClose> = (payload) => {
	return {
		type: ModalTypesActions.CLOSE,
		payload: {
			id: payload.id,
			active: false,
			component: null,
		},
	};
};

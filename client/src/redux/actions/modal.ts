import { IModalState, IModaltypes } from '../reducers/modal.reducer';
import { ModalTypesActions } from '../types';
import { IAction } from './../reducers/reducers';

export type IModal<T> = IAction<ModalTypesActions, T>;

export declare type Modal<T> = (payload: T) => IModal<IModalState>;
type ModalTypeClose = {
	id: string;
};
type ModalTypeOpen = ModalTypeClose & {
	type: IModaltypes;
};

export const openModal: Modal<ModalTypeOpen> = (payload) => {
	return {
		type: ModalTypesActions.OPEN,
		payload: {
			id: payload.id,
			active: true,
			type: payload.type,
		},
	};
};
export const closeModal: Modal<ModalTypeClose> = (payload) => {
	return {
		type: ModalTypesActions.CLOSE,
		payload: {
			id: payload.id,
			active: false,
			type: IModaltypes.GeneralInfo,
		},
	};
};

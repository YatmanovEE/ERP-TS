import { Reducer } from 'react';
import { IModal } from '../actions/modal';
import { ModalTypesActions } from '../types';

export interface IModalState {
	id: string;
	active: boolean;
	type: IModaltypes;
}

export enum IModaltypes {
	GeneralInfo = 'Modal/GeneralInfromation',
	PersonItem = 'Modal/PersonItem',
	Location = 'Modal/Location',
}

const initialState: IModalState = {
	id: 'null',
	active: false,
	type: IModaltypes.GeneralInfo,
};

export type IModalReducer = IModalState;

export const ModalReducer: Reducer<IModalState, IModal<IModalReducer>> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case ModalTypesActions.OPEN:
			return {
				...state,
				...action.payload,
			};
		case ModalTypesActions.CLOSE:
			return {
				...state,
				id: action.payload.id,
				active: action.payload.active,
			};
		default:
			return state;
	}
};

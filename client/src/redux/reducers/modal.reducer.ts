import { Reducer } from 'react';
import { IID } from '../actions/generalInfo';
import { IModalAction } from '../actions/modal';
import { ModalTypesActions } from '../types';

export interface IModalState extends IID {
	active: boolean;
	component: React.ReactElement | null;
}

export enum IModaltypes {
	GeneralInfo = 'Modal/GeneralInfromation',
	PersonItem = 'Modal/PersonItem',
	Location = 'Modal/Location',
}

const initialState: IModalState = {
	id: 'null',
	active: false,
	component: null,
};

export type IModalReducer = IModalState;

export const ModalReducer: Reducer<IModalState, IModalAction<IModalReducer>> = (
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

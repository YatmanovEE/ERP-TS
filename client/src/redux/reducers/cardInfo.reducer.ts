import { Reducer } from 'react';
import { TOOGLE_MENU } from './../types';

export interface ICardInfoState {
	id: string;
	status: boolean;
}

const initialState: ICardInfoState = {
	id: '0',
	status: false,
};

interface IAction {
	type: string;
	payload: ICardInfoState;
}

export const cardInfoReducer: Reducer<ICardInfoState, IAction> = (
	state: ICardInfoState = initialState,
	action: IAction
): any => {
	switch (action.type) {
		case TOOGLE_MENU:
			console.log(action);
			return { ...state, ...action.payload };

		default:
			return state;
	}
};

import { Reducer } from 'react';
import { CardInfoTypes } from './../types';

export interface ICardInfoState {
	id: string;
	status: boolean;
}

const initialState: ICardInfoState = {
	id: 'Первый заказчик',
	status: true,
};

interface IAction {
	type: string;
	payload: ICardInfoState;
}

export const cardInfoReducer: Reducer<ICardInfoState, IAction> = (
	state: ICardInfoState = initialState,
	action: IAction
): ICardInfoState => {
	switch (action.type) {
		case CardInfoTypes.TOOGLE_MENU:
			return { ...state, ...action.payload };

		default:
			return state;
	}
};

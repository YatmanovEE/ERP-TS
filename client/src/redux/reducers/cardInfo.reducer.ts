import { Reducer } from 'react';
import { CardInfoTypes } from './../types';
import { IAction } from './reducers';

export interface ICardInfoState {
	id: string;
	status: boolean;
}

const initialState: ICardInfoState = {
	id: 'Первый заказчик',
	status: true,
};

export const cardInfoReducer: Reducer<
	ICardInfoState,
	IAction<CardInfoTypes, ICardInfoState>
> = (state = initialState, action) => {
	switch (action.type) {
		case CardInfoTypes.TOOGLE_MENU:
			return { ...state, status: !action.payload.status };
		default:
			return state;
	}
};

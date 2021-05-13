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

export interface IAction<T, Y> {
	type: T;
	payload: Y;
}

export const cardInfoReducer: Reducer<
	ICardInfoState,
	IAction<CardInfoTypes, ICardInfoState>
> = (
	state: ICardInfoState = initialState,
	action: IAction<CardInfoTypes, ICardInfoState>
): ICardInfoState => {
	switch (action.type) {
		case CardInfoTypes.TOOGLE_MENU:
			return { ...state, ...action.payload };

		default:
			return state;
	}
};

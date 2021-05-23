import { Reducer } from 'react';
import { ICardMenu } from '../actions/cardInfo';
import { CardInfoTypeActions } from './../types';

export interface ICardInfoState {
	id: string;
	status: boolean;
}

const initialState: ICardInfoState = {
	id: 'Первый заказчик',
	status: true,
};

export const CardInfoReducer: Reducer<
	ICardInfoState,
	ICardMenu<ICardInfoState>
> = (state = initialState, action) => {
	switch (action.type) {
		case CardInfoTypeActions.TOOGLE_MENU:
			return { ...state, status: action.payload.status };
		default:
			return state;
	}
};

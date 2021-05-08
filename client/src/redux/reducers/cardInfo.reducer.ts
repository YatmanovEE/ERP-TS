import { Reducer } from 'react';
import { OPEN_MENU } from './../types';

interface ICardInfoState {
	id: string;
}

const initialState: ICardInfoState = {
	id: '0',
};

export const cardInfoReducer: Reducer<ICardInfoState, any> = (
	state: ICardInfoState = initialState,
	action: any
): any => {
	switch (action.type) {
		case OPEN_MENU:
			console.log(action);
			return { ...state, id: action.id };

		default:
			return state;
	}
};

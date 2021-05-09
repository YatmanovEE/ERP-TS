import { Action } from 'redux';
import { ICardInfoState } from '../reducers/cardInfo.reducer';
import { TOOGLE_MENU } from './../types';
type actions = {
	type: string;
	payload: ICardInfoState;
};

export function toogleMenu(payload: ICardInfoState): actions {
	return {
		type: TOOGLE_MENU,
		payload,
	};
}

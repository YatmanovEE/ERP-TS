import { CardInfoTypes } from '../types';
import { ICardInfoState } from './../reducers/cardInfo.reducer';
type actions = {
	type: string;
	payload: ICardInfoState;
};

export function toogleMenu(payload: ICardInfoState): actions {
	return {
		type: CardInfoTypes.TOOGLE_MENU,
		payload,
	};
}

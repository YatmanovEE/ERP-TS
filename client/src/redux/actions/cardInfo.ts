import { IAction } from '../reducers/reducers';
import { CardInfoTypes } from '../types';
import { ICardInfoState } from './../reducers/cardInfo.reducer';

export function toogleMenu(
	payload: ICardInfoState
): IAction<CardInfoTypes, ICardInfoState> {
	return {
		type: CardInfoTypes.TOOGLE_MENU,
		payload,
	};
}

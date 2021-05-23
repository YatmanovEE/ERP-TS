import { IAction } from '../reducers/reducers';
import { CardInfoTypeActions } from '../types';
import { ICardInfoState } from './../reducers/cardInfo.reducer';

export type ICardMenu<T> = IAction<CardInfoTypeActions, T>;

export function toogleMenu(payload: ICardInfoState): ICardMenu<ICardInfoState> {
	return {
		type: CardInfoTypeActions.TOOGLE_MENU,
		payload,
	};
}

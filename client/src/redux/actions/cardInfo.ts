import { IAction } from '../reducers/reducers';
import { CardInfoTypeActions } from '../types';
import { ICardInfoState } from './../reducers/cardInfo.reducer';

export type ICardMenu<T> = IAction<CardInfoTypeActions, T>;

export function updateMenu(payload: ICardInfoState): ICardMenu<ICardInfoState> {
	return {
		type: CardInfoTypeActions.UPDATE,
		payload,
	};
}

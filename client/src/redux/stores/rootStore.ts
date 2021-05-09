import { combineReducers } from 'redux';
import {
	cardInfoReducer,
	ICardInfoState,
} from './../reducers/cardInfo.reducer';

export interface IRootReducer {
	card: ICardInfoState;
}

export const rootReducer = combineReducers({
	card: cardInfoReducer,
});

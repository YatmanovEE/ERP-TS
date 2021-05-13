import { combineReducers } from 'redux';
import { eventListReducer, IEventState } from './../reducers/eventList.reducer';
import {
	cardInfoReducer,
	ICardInfoState,
} from './../reducers/cardInfo.reducer';

export interface IRootReducer {
	card: ICardInfoState;
	eventList: IEventState;
}

export const rootReducer = combineReducers({
	card: cardInfoReducer,
	eventList: eventListReducer,
});

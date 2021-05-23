import { combineReducers } from 'redux';
import { EventListReducer, IEventState } from './../reducers/eventList.reducer';
import {
	CardInfoReducer,
	ICardInfoState,
} from './../reducers/cardInfo.reducer';
import { IModalState } from '../reducers/modal.reducer';
import { ModalReducer } from './../reducers/modal.reducer';

export interface IRootReducer {
	card: ICardInfoState;
	eventList: IEventState;
	modal: IModalState;
}

export const rootReducer = combineReducers({
	card: CardInfoReducer,
	eventList: EventListReducer,
	modal: ModalReducer,
});

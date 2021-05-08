import { combineReducers } from 'redux';
import { cardInfoReducer } from './../reducers/cardInfo.reducer';

export const rootReducer = combineReducers({
	card: cardInfoReducer,
});

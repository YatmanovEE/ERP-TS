import { Reducer } from 'react';
import { Action } from 'redux';
import { IAddEvent } from '../actions/eventList';
import { EventListTypes } from '../types';
import { IAction } from './cardInfo.reducer';

interface IInitialState {
	eventList: IAddEvent[];
}

const initialState: IInitialState = {
	eventList: [],
};
export const eventListReducer: Reducer<IAddEvent, IAction<EventListTypes, IAddEvent>>(
	state: IInitialState = initialState,
	action: IAction<EventListTypes, IAddEvent>
): IInitialState => {
	switch (action.type) {
		case EventListTypes.ADD_EVENT:
			return { ...state, eventList: state.eventList.concat([action.payload]) };

		default:
			return state;
	}
}

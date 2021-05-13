import { Reducer } from 'react';
import { Action } from 'redux';
import { IAddEvent } from '../actions/eventList';
import { EventListTypes } from '../types';
import { IAction } from './cardInfo.reducer';

export interface IEventState {
	eventList: IAddEvent[];
}

const initialState: IEventState = {
	eventList: [],
};
export const eventListReducer: Reducer<
	IEventState,
	IAction<EventListTypes, IAddEvent>
> = (
	state: IEventState = initialState,
	action: IAction<EventListTypes, IAddEvent>
): IEventState => {
	switch (action.type) {
		case EventListTypes.ADD_EVENT:
			return { ...state, eventList: state.eventList.concat([action.payload]) };
		case EventListTypes.SHOW_EVENT:
			return { ...state, eventList: state.eventList.concat([action.payload]) };
		default:
			return state;
	}
};

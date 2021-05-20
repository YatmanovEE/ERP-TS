import { Reducer } from 'react';
import { IAddEvent } from '../actions/eventList';
import { sagaShowEvent } from '../saga';
import { EventListTypes } from '../types';
import { IAction } from './reducers';

export interface IEventState {
	eventList: JSON[];
}
export interface IEventListReducer extends IAddEvent, sagaShowEvent {}

const initialState: IEventState = {
	eventList: [],
};

export const eventListReducer: Reducer<
	IEventState,
	IAction<EventListTypes, IEventListReducer>
> = (state = initialState, action) => {
	switch (action.type) {
		case EventListTypes.ADD_EVENT:
			return {
				...state,
				eventList: state.eventList.concat([action.payload.eventItemList]),
			};
		case EventListTypes.SHOW_EVENT:
			if (action.payload.eventItemList) {
				return {
					...state,
					eventList: state.eventList.concat(action.payload.eventItemList),
				};
			} else {
				return state;
			}
		default:
			return state;
	}
};

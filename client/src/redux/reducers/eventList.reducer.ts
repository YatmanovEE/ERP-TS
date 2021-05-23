import { Reducer } from 'react';
import { IAddEvent, IEvent } from '../actions/eventList';
import { sagaShowEvent } from '../saga';
import { EventListTypeActions } from '../types';

export interface IEventState {
	eventList: JSON[];
}
export type IEventListReducer = IAddEvent & sagaShowEvent;

const initialState: IEventState = {
	eventList: [],
};

export const EventListReducer: Reducer<IEventState, IEvent<IEventListReducer>> =
	(state = initialState, action) => {
		switch (action.type) {
			case EventListTypeActions.ADD_EVENT:
				return {
					...state,
					eventList: state.eventList.concat([action.payload.eventItemList]),
				};
			case EventListTypeActions.SHOW_EVENT:
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

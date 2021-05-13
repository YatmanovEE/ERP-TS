import { eventItemType } from '../../componentns/EventsList';
import { IAction } from '../reducers/cardInfo.reducer';
import { EventListTypes } from '../types';

export interface IAddEvent {
	type: eventItemType;
	date: 'string';
	whoCreate: 'string';
	payload: {};
}

export function addEvent({ type, date, whoCreate }: IAddEvent) {
	return {
		type: EventListTypes.ADD_EVENT,
		payload: {
			type,
			date,
			whoCreate,
		},
	};
}

export interface IShowEvent {
	url: string;
}

export interface IActionShowEvent extends IAction<EventListTypes, IShowEvent> {}

export function showEvent({ url }: IShowEvent) {
	return {
		type: EventListTypes.SHOW_EVENT,
		payload: {
			url,
		},
	};
}

import { IAction } from '../reducers/reducers';
import { EventListTypes } from '../types';
import { eventItemType } from './../../componentns/EventList/EventsList';

export interface IAddEvent {
	type: eventItemType;
	date: 'string';
	whoCreate: 'string';
}

type IEvent<T> = IAction<EventListTypes, T>;

export function addEvent({
	type,
	date,
	whoCreate,
}: IAddEvent): IEvent<IAddEvent> {
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

export function showEvent({ url }: IShowEvent): IEvent<IShowEvent> {
	return {
		type: EventListTypes.SHOW_EVENT,
		payload: {
			url,
		},
	};
}

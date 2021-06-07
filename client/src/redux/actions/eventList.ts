import { IAction } from '../reducers/types';
import { EventListTypeActions } from '../types';
import { eventItemType } from './../../componentns/EventList/EventsList';

export interface IAddEvent {
	type: typeof eventItemType;
	date: 'string';
	whoCreate: 'string';
}

export type IEvent<T> = IAction<EventListTypeActions, T>;

export function addEvent({
	type,
	date,
	whoCreate,
}: IAddEvent): IEvent<IAddEvent> {
	return {
		type: EventListTypeActions.ADD_EVENT,
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
		type: EventListTypeActions.SHOW_EVENT,
		payload: {
			url,
		},
	};
}

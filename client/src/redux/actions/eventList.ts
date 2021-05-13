import { eventItemType } from '../../componentns/EventsList';
import { EventListTypes } from '../types';

export interface IAddEvent {
	type: eventItemType;
	date: 'string';
	whoCreate: 'string';
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

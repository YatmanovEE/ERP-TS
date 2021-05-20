import { takeEvery, call, put } from 'redux-saga/effects';
import { IShowEvent } from './actions/eventList';
import { IAction } from './reducers/reducers';
import { EventListTypes } from './types';

export interface IActionShowEvent extends IAction<EventListTypes, IShowEvent> {}

export interface sagaShowEvent {
	eventItemList: JSON;
}

export function* sagaWatcher() {
	yield takeEvery(EventListTypes.SHOW_EVENT, fetchEvent);
}
function* fetchEvent(props: IActionShowEvent) {
	try {
		const data: JSON = yield call(fetchPost, props.payload.url);
		yield put({
			type: EventListTypes.SHOW_EVENT,
			payload: { eventItemList: data },
		});
	} catch (error) {
		yield new Error(error); //for now
	}
}

async function fetchPost(url: string): Promise<JSON> {
	try {
		let response = await fetch(url);
		return response.json();
	} catch (error) {
		throw new Error(error);
	}
}

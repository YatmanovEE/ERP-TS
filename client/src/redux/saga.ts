import { takeEvery, call, put } from 'redux-saga/effects';
import { IShowEvent } from './actions/eventList';
import { IAction } from './reducers/reducers';
import { EventListTypeActions } from './types';

export interface IActionShowEvent
	extends IAction<EventListTypeActions, IShowEvent> {}

export interface sagaShowEvent {
	eventItemList: JSON;
}

export function* sagaWatcher() {
	yield takeEvery(EventListTypeActions.SHOW_EVENT, fetchEvent);
}
function* fetchEvent(props: IActionShowEvent) {
	try {
		const data: JSON = yield call(fetchPost, props.payload.url);
		yield put({
			type: EventListTypeActions.SHOW_EVENT,
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

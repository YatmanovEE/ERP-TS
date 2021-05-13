import { takeEvery, call, put } from 'redux-saga/effects';
import { IActionShowEvent } from './actions/eventList';
import { EventListTypes } from './types';

export function* sagaWatcher() {
	yield takeEvery(EventListTypes.SHOW_EVENT, fetchEvent);
}

function* fetchEvent(props: IActionShowEvent) {
	try {
		const data: JSON = yield call(fetchPost, props.payload.url);
		yield put({ type: EventListTypes.SHOW_EVENT, payload: data });
	} catch (error) {
		yield new Error(error); //for now
	}
}

async function fetchPost(url: string): Promise<JSON> {
	let response = await fetch(url);
	return response.json();
}

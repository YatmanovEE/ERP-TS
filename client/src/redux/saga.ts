import { takeEvery, call } from 'redux-saga/effects';
import { IActionShowEvent } from './actions/eventList';
import { EventListTypes } from './types';

export function* sagaWatcher() {
	yield takeEvery(EventListTypes.SHOW_EVENT, fetchEvent);
}

function* fetchEvent(props: IActionShowEvent) {
	try {
		const data: JSON = yield call(fetchPost, props.payload.url);
		console.log(data);
	} catch (error) {
		throw new Error(error); //for now
	}
}

async function fetchPost(url: string): Promise<JSON> {
	let response = await fetch(url);
	return response.json();
}

import { IAction } from './types';

/**
 *
 * @type T - state Type
 * @type Y - array Type
 */
export interface IAddRemoveItem<T, Y> {
	state: T;
	key: keyof T & string;
	arrayState: Array<Y>;
	arrayAction: Array<Y>;
}
/**
 *
 * @param state from Reducer
 * @param key what gonna be in state
 * @param arrayPayload array from action.payload
 * @param arrayState array from state
 * @returns state
 */
export const addItem = <T, Y>({
	state,
	key,
	arrayState,
	arrayAction,
}: IAddRemoveItem<T, Y>): T => {
	//TODO Добавить Warning if length <=0
	return {
		...state,
		[key]: arrayState.concat(arrayAction),
	};
};
/**
 *
 * @param state from Reducer
 * @param key what gonna be in state
 * @param arrayPayload array from action.payload
 * @param arrayState array from state
 * @returns state
 */
export const removeItem = <T, Y>({
	state,
	key,
	arrayState,
	arrayAction,
}: IAddRemoveItem<T, Y>): T => {
	return {
		...state,
		[key]: arrayState.filter((item) => item !== arrayAction[0] && -1),
	};
};

/**
 *
 * @param IAddRemoveItem
 * @param Add Action Add
 * @param Remove Remove Add
 * @returns
 */

export const addRemoveReducer = <T, Y, P>(
	{ state, key, arrayState, arrayAction }: IAddRemoveItem<T, Y>,
	add: P,
	remove: P
) => {
	const itemSection: IAddRemoveItem<T, Y> = {
		state,
		key,
		arrayState,
		arrayAction,
	};
	const reducer = (action: IAction<P, T>) => {
		switch (action.type) {
			case add:
				return addItem(itemSection);
			case remove:
				return removeItem(itemSection);
			default:
				return state;
		}
	};
	return reducer;
};

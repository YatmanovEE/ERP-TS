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

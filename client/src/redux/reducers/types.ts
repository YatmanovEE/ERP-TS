/**
 * @template T the type of the action's `type` tag.
 * @template Y the type of the action's `payload` tag.
 */

export interface IAction<T, Y> {
	type: T;
	payload: Y;
}

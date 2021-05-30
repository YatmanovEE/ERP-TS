/**
 *
 * @param fn function callbackHandler function that must be executed once
 * @returns void
 */

export const once = (fn: () => void) => {
	let done = true;
	return () => {
		if (done) {
			done = false;
			return fn();
		}
	};
};

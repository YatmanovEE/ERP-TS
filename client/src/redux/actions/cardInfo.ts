import { OPEN_MENU } from './../types';
type actions = {
	type: string;
	payload: string;
};

export function openMenu(id: string): actions {
	return {
		type: OPEN_MENU,
		payload: id,
	};
}

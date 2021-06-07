import { Reducer } from 'react';
import { IGeneralInformation } from '../../componentns/CardInfo/GeneralInformation/GeneralInformation';
import { IGeneralInfo } from '../actions/generalInfo';

import { GeneralInfoTypeActions } from '../types';
import { addItem, IAddRemoveItem, removeItem } from './globalReducer';
import { IAction } from './types';

const initialState: IGeneralInformation.Props = {
	id: 'none',
	description: 'none',
	linkSection: [],
	photoSrc: [],
};

export const GeneralInfoReducer: Reducer<
	IGeneralInformation.Props,
	IGeneralInfo<IGeneralInformation.Props>
> = (state = initialState, action) => {
	if (
		action.type === GeneralInfoTypeActions.REMOVE_PHOTO ||
		action.type === GeneralInfoTypeActions.ADD_PHOTO
	) {
		const PhotoSrcReducer = addRemoveReducer(
			{
				state,
				key: 'photoSrc',
				arrayState: state.photoSrc,
				arrayAction: action.payload.photoSrc,
			},
			GeneralInfoTypeActions.ADD_PHOTO,
			GeneralInfoTypeActions.REMOVE_PHOTO
		);
		return PhotoSrcReducer(action);
	}

	if (
		action.type === GeneralInfoTypeActions.REMOVE_LINK ||
		action.type === GeneralInfoTypeActions.ADD_LINK
	) {
		const LinkSectionReducer = addRemoveReducer(
			{
				state: state,
				key: 'linkSection',
				arrayState: state.linkSection,
				arrayAction: action.payload.linkSection,
			},
			GeneralInfoTypeActions.ADD_LINK,
			GeneralInfoTypeActions.REMOVE_LINK
		);
		return LinkSectionReducer(action);
	}
	return state;
};

/**
 *
 * @param IAddRemoveItem
 * @param Add Action Add
 * @param Remove Remove Add
 * @returns
 */

const addRemoveReducer = <T, Y, P>(
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

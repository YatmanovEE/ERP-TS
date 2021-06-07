import { Reducer } from 'react';
import {
	IGeneralInformation,
	ILinkItem,
} from '../../componentns/CardInfo/GeneralInformation/GeneralInformation';
import { IGeneralInfo } from '../actions/generalInfo';

import { GeneralInfoTypeActions } from '../types';
import { addItem, IAddRemoveItem, removeItem } from './globalReducer';

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
		action.type === GeneralInfoTypeActions.ADD_PHOTO ||
		action.type === GeneralInfoTypeActions.REMOVE_PHOTO
	) {
		const photoSrcItem: IAddRemoveItem<IGeneralInformation.Props, string> = {
			state: state,
			key: 'photoSrc',
			arrayState: state.photoSrc,
			arrayAction: action.payload.photoSrc,
		};
		switch (action.type) {
			case GeneralInfoTypeActions.ADD_PHOTO:
				return addItem(photoSrcItem);
			case GeneralInfoTypeActions.REMOVE_PHOTO:
				return removeItem(photoSrcItem);
			default:
				return state;
		}
	}
	if (
		action.type === GeneralInfoTypeActions.REMOVE_LINK ||
		action.type === GeneralInfoTypeActions.ADD_LINK
	) {
		const linkSection: IAddRemoveItem<
			IGeneralInformation.Props,
			ILinkItem.Props
		> = {
			state: state,
			key: 'linkSection',
			arrayState: state.linkSection,
			arrayAction: action.payload.linkSection,
		};

		switch (action.type) {
			case GeneralInfoTypeActions.ADD_LINK:
				return addItem(linkSection);
			case GeneralInfoTypeActions.REMOVE_LINK:
				return removeItem(linkSection);
			default:
				return state;
		}
	}
	return state;
};

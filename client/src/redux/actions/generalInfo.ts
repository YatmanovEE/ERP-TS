import {
	IGeneralInformation,
	ILinkItem,
} from '../../componentns/CardInfo/GeneralInformation/GeneralInformation';
import { IAction } from '../reducers/types';
import { GeneralInfoTypeActions } from '../types';

export type IGeneralInfo<T> = IAction<GeneralInfoTypeActions, T>;

type IGeneralInfoAction<Y> = (
	payload: Y
) => IGeneralInfo<IGeneralInformation.Props>;

type IPhoto = {
	photoSrc: string[];
};

type IId = {
	id: string;
};

type ILink = {
	linkSection: ILinkItem.Props[];
};

export const addLink: IGeneralInfoAction<ILink & IId> = (payload) => {
	return {
		type: GeneralInfoTypeActions.ADD_LINK,
		payload: {
			linkSection: payload.linkSection,
			photoSrc: [],
			id: payload.id,
			description: 'none',
		},
	};
};
export const removeLink: IGeneralInfoAction<ILink> = (payload) => {
	return {
		type: GeneralInfoTypeActions.ADD_LINK,
		payload: {
			linkSection: payload.linkSection,
			photoSrc: [],
			id: 'none',
			description: 'none',
		},
	};
};

export const addPhoto: IGeneralInfoAction<IPhoto & IId> = (payload) => {
	return {
		type: GeneralInfoTypeActions.ADD_PHOTO,
		payload: {
			linkSection: [],
			photoSrc: payload.photoSrc,
			id: payload.id,
			description: 'none',
		},
	};
};

export const removePhoto: IGeneralInfoAction<IPhoto> = (payload) => {
	return {
		type: GeneralInfoTypeActions.REMOVE_PHOTO,
		payload: {
			linkSection: [],
			photoSrc: payload.photoSrc,
			id: 'none',
			description: 'none',
		},
	};
};

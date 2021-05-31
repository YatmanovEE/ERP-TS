import { Reducer } from 'react';
import {
	IGeneralInformation,
	ILocation,
} from '../../componentns/CardInfo/GeneralInformation/GeneralInformation';

import { ICardMenu } from '../actions/cardInfo';
import { CardInfoTypeActions } from './../types';

export type ICardInfoState = {
	id: string;
	generalInfo: IGeneralInformation.Props;
	location: ILocation.Props;
};

const initialState: ICardInfoState = {
	id: 'none',
	generalInfo: {
		id: 'none',
		description: 'none',
		linkSection: [],
		photoSrc: [],
	},
	location: {
		description: 'none',
		src: 'none',
		id: 'none,',
	},
};

export const CardInfoReducer: Reducer<
	ICardInfoState,
	ICardMenu<ICardInfoState>
> = (state = initialState, action) => {
	switch (action.type) {
		case CardInfoTypeActions.UPDATE:
			if (action.payload.id === state.id) {
				return { ...state, ...action.payload };
			}
			return state;
		default:
			return state;
	}
};

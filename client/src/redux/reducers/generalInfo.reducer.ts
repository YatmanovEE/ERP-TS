import { Reducer } from 'react';
import { IGeneralInformation } from '../../componentns/CardInfo/GeneralInformation/GeneralInformation';
import { IGeneralInfo } from '../actions/generalInfo';

import { GeneralInfoTypeActions } from '../types';

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
	switch (action.type) {
		case GeneralInfoTypeActions.ADDPhoto:
			return {
				...state,
				photoSrc: state.photoSrc.concat(action.payload.photoSrc),
			};
		case GeneralInfoTypeActions.REMOVEPhoto:
			return {
				...state,
				photoSrc: state.photoSrc.filter(
					(photoSrcItem) => photoSrcItem !== action.payload.photoSrc[0] && -1
				),
			};
		default:
			return state;
	}
};

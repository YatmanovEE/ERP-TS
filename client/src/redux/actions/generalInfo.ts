import { IAction } from '../reducers/types';
import { GeneralInfoTypeActions } from '../types';

export type IGeneralInfo<T> = IAction<GeneralInfoTypeActions, T>;

type IGeneralInfoAction<T> = (payload: T) => IGeneralInfo<T>;

export const addPhoto: IGeneralInfoAction<IGeneralInformation.Props> = (
	payload
) => {
	return {
		type: GeneralInfoTypeActions.ADDPhoto,
		payload,
	};
};

export const removePhoto: IGeneralInfoAction<IGeneralInformation.Props> = (
	payload
) => {
	return {
		type: GeneralInfoTypeActions.REMOVEPhoto,
		payload,
	};
};

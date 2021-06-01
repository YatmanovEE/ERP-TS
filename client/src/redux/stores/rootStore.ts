import { combineReducers } from 'redux';
import { EventListReducer, IEventState } from './../reducers/eventList.reducer';
import { GeneralInfoReducer } from '../reducers/generalInfo.reducer';
import { IModalState } from '../reducers/modal.reducer';
import { ModalReducer } from './../reducers/modal.reducer';
import { IGeneralInformation } from '../../componentns/CardInfo/GeneralInformation/GeneralInformation';

export interface IRootReducer {
	generalInfo: IGeneralInformation.Props;
	eventList: IEventState;
	modal: IModalState;
}

//TODO Найти связать интерфейс и rootReducer

export const rootReducer = combineReducers({
	generalInfo: GeneralInfoReducer,
	eventList: EventListReducer,
	modal: ModalReducer,
});

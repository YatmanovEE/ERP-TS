import { MenuWrapper } from '../MenuWrapper';
import { MenuButton } from '../LocationMenu';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/actions/modal';
import { KebubMenu } from '../KebubMenu';
import ModalGeneral from './ModalGeneralInformation';
import { IID } from '../../../redux/actions/generalInfo';

export const GeneralInfoMenu: FC<IID> = ({ id }) => {
	return (
		<KebubMenu id={id}>
			<Menu id={id}></Menu>
		</KebubMenu>
	);
};

const Menu: FC<IID> = ({ id }) => {
	return (
		<MenuWrapper>
			<>
				<GeneralInfoButton
					title={'Изменить описани'}
					id={id}
				></GeneralInfoButton>
				<GeneralInfoButton
					title={'Изменить ссылки'}
					id={id}
				></GeneralInfoButton>
				<GeneralInfoButton
					title={'Добавить фотографии'}
					id={id}
				></GeneralInfoButton>
			</>
		</MenuWrapper>
	);
};

const GeneralInfoButton: FC<{ title: string } & IID> = ({ title, id }) => {
	const dispatch = useDispatch();
	return (
		<MenuButton
			title={title}
			handler={() =>
				dispatch(openModal({ id, component: <ModalGeneral id={id} /> }))
			}
		></MenuButton>
	);
};

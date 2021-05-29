import { MenuWrapper } from './Menu';
import { MenuButton } from './LocationMenu';
import { FC, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/actions/modal';
import { KebubMenu } from './KebubMenu';
import { ModalGeneral } from '../Modal';

export const GeneralInfoMenu: FC<{ id: string }> = ({ id }) => {
	return (
		<KebubMenu id={id}>
			<Menu id={id}></Menu>
		</KebubMenu>
	);
};

const Menu: FC<{ id: string }> = ({ id }) => {
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

const GeneralInfoButton: FC<{ title: string; id: string }> = ({
	title,
	id,
}) => {
	const dispatch = useDispatch();
	return (
		<MenuButton
			title={title}
			handler={(e: SyntheticEvent) =>
				dispatch(openModal({ id, component: <ModalGeneral id={id} /> }))
			}
		></MenuButton>
	);
};

import { MenuWrapper } from '../MenuWrapper';
import { MenuButton } from '../LocationMenu';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/actions/modal';
import { KebubMenu } from '../KebubMenu';
import ModalGeneral from './ModalGeneralInformation';
import { IID } from '../../../redux/actions/generalInfo';
import { createUseStyles } from 'react-jss';
import { createClassName } from '../../../modules/join';

const style = createUseStyles({
	btn: {
		backgroundColor: 'red',
	},
});

export const GeneralInfoMenu: FC<IID> = ({ id }) => {
	let className = style();
	let join = createClassName(className);
	return (
		<>
			<button className={join('btn')}>Test</button>
			<KebubMenu id={id}>
				<Menu id={id}></Menu>
			</KebubMenu>
		</>
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

import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/actions/modal';
import { MenuWrapper } from './Menu';
import { KebubMenu } from './KebubMenu';
import { MenuButton } from './LocationMenu';
import { createUseStyles } from 'react-jss';
import { ITheme } from '../..';

namespace IMenuPerson {
	export type Props = {
		id: string;
	};
}

export const MenuPerson: FC<IMenuPerson.Props> = ({ id }) => {
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
				<MenuPersonButton
					title={'Изменить комментарий'}
					id={id}
				></MenuPersonButton>
				<MenuPersonButton title={'Позвонить'} id={id}></MenuPersonButton>
				<MenuPersonButton
					title={'Совершить встречу'}
					id={id}
				></MenuPersonButton>
				<MenuPersonButton
					title={'Отвзять сотрудника'}
					id={id}
				></MenuPersonButton>
				<MenuPersonButton title={'Перейти в анкету'} id={id}></MenuPersonButton>
			</>
		</MenuWrapper>
	);
};

const MenuPersonButton: FC<{ title: string; id: string }> = ({ title, id }) => {
	const dispatch = useDispatch();
	return (
		<MenuButton
			title={title}
			handler={() => dispatch(openModal({ id, component: <MenuForm /> }))}
		></MenuButton>
	);
};

namespace IMenuForm {
	export const Style = createUseStyles((theme: ITheme) => ({
		wrapper: {
			backgroundColor: 'white',
			width: '200px',
			height: '400px',
		},
	}));
}

const MenuForm: FC = () => {
	let className = IMenuForm.Style();

	return (
		<div className={className.wrapper}>
			<span>MENUFORM</span>;
		</div>
	);
};

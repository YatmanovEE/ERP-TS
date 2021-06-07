import { FC, MouseEventHandler, SyntheticEvent } from 'react';
import { MenuWrapper } from './MenuWrapper';
import { KebubMenu } from './KebubMenu';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/actions/modal';
import { ModalTemplate } from '../ModalTemplate';
import { createUseStyles } from 'react-jss';
import { ITheme } from '../..';
import { createClassName } from '../../modules/join';
import { IID } from '../../redux/actions/generalInfo';

namespace IMenuPerson {
	export type Props = IID;
}

export const LocationMenu: FC<IMenuPerson.Props> = ({ id }) => {
	return (
		<KebubMenu id={id}>
			<Menu id={id}></Menu>
		</KebubMenu>
	);
};
//TODO Разобраться какой тут тип
const Menu: FC<IID> = ({ id }) => {
	const dispatch = useDispatch();
	return (
		<MenuWrapper>
			<>
				<MenuButton
					title={'Изменить местонахождение'}
					handler={() =>
						dispatch(openModal({ id: id, component: <LocationModal /> }))
					}
				></MenuButton>
			</>
		</MenuWrapper>
	);
};

namespace IMenuButton {
	export type Props = {
		handler: MouseEventHandler<HTMLButtonElement>;
		title: string;
	};
}

const MenuButtonStyled = createUseStyles((theme: ITheme) => ({
	btn: {
		whiteSpace: 'nowrap',
		padding: '10px',
		cursor: 'pointer',
		transition: 'background-color 0.5s ease',
		textAlign: 'start',
		'&:hover': {
			backgroundColor: '#8a8787',
		},
	},
}));

export const MenuButton: FC<IMenuButton.Props> = ({ handler, title }) => {
	let className = MenuButtonStyled();
	let join = createClassName(className);
	return (
		<button className={join('btn')} data-id={title} onClick={(e) => handler(e)}>
			{title}
		</button>
	);
};

export const LocationModal: FC = () => {
	return (
		<ModalTemplate
			title={'Location'}
			id={'id'}
			onSaveHandler={() => console.log('log')}
		>
			<span>LocationModal</span>
		</ModalTemplate>
	);
};

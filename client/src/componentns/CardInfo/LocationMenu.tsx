import { FC, SyntheticEvent } from 'react';
import { MenuWrapper } from './Menu';
import { KebubMenu } from './KebubMenu';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/actions/modal';

namespace IMenuPerson {
	export type Props = {
		id: string;
	};
}

export const LocationMenu: FC<IMenuPerson.Props> = ({ id }) => {
	return (
		<KebubMenu id={id}>
			<Menu id={id}></Menu>
		</KebubMenu>
	);
};
//TODO Разобраться какой тут тип
const Menu: FC<{ id: string }> = ({ id }) => {
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
		//TODO Разобраться какой тут тип
		handler: any;
		title: string;
	};
}

export const MenuButton: FC<IMenuButton.Props> = ({ handler, title }) => {
	return (
		<div
			data-id={title}
			onClick={(e: SyntheticEvent<HTMLDivElement>) => handler()}
		>
			{title}
		</div>
	);
};

export const LocationModal: FC = () => {
	return <span>LocationModal</span>;
};

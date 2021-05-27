import { FC, SyntheticEvent } from 'react';
import { openModal } from '../../redux/actions/modal';
import { MenuWrapper } from './Menu';
import { KebubMenu } from './KebubMenu';
import { useDispatch } from 'react-redux';
import { IModaltypes } from '../../redux/reducers/modal.reducer';

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
					handler={
						() => null
						// dispatch(openModal({ id, type: IModaltypes.Location }))
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

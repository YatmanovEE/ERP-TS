import { Dispatch, SyntheticEvent } from 'react';
import { FC } from 'react';
import { connect } from 'react-redux';
import { IModal, openModal } from '../../redux/actions/modal';
import { IModalState } from '../../redux/reducers/modal.reducer';
import { IMenu, MenuWrapper } from './Menu';
import { KebubMenu } from './KebubMenu';

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
				<div
					data-id="Изменить комментарий"
					onClick={(e: SyntheticEvent<HTMLDivElement>) => openModal(id)}
				>
					Изменить комментарий
				</div>
				<div
					data-id="Изменить ссылки"
					onClick={(e: SyntheticEvent<HTMLDivElement>) => openModal(id)}
				>
					Позвонить
				</div>
				<div
					data-id="Совершить встречу"
					onClick={(e: SyntheticEvent<HTMLDivElement>) => openModal(id)}
				>
					Совершить встречу
				</div>
				<div
					data-id="Отвзять сотрудника"
					onClick={(e: SyntheticEvent<HTMLDivElement>) => openModal(id)}
				>
					Отвзять сотрудника
				</div>
				<div
					data-id="Перейти в анкету"
					onClick={(e: SyntheticEvent<HTMLDivElement>) => openModal(id)}
				>
					Перейти в анкету
				</div>
			</>
		</MenuWrapper>
	);
};

const mapDispatchToProps = (dispatch: Dispatch<IModal<IModalState>>) => ({
	openModal: (id: string) => dispatch(openModal(id)),
});

const connector = connect(mapDispatchToProps);

export default connector(MenuPerson);

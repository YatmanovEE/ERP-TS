import { connect } from 'react-redux';
import { Dispatch, FC, SyntheticEvent } from 'react';
import { IModal, openModal } from '../../redux/actions/modal';
import { IModalState } from '../../redux/reducers/modal.reducer';
import { IRootReducer } from '../../redux/stores/rootStore';
import { IMenu, MenuWrapper } from './Menu';

export const GeneralInfo: FC<IMenu.Props<typeof connector>> = ({
	openModal,
	id,
}) => {
	return (
		<MenuWrapper>
			<>
				<div
					data-id="Изменить описание"
					onClick={(e: SyntheticEvent<HTMLDivElement>) => openModal(id)}
				>
					Изменить описание
				</div>
				<div
					data-id="Изменить ссылки"
					onClick={(e: SyntheticEvent<HTMLDivElement>) => openModal(id)}
				>
					Изменить ссылки
				</div>
				<div
					data-id="Добавить фотографии"
					onClick={(e: SyntheticEvent<HTMLDivElement>) => openModal(id)}
				>
					Добавить фотографии
				</div>
			</>
		</MenuWrapper>
	);
};

const mapStateToProps = ({ modal }: IRootReducer) => ({
	modal,
});
const mapDispatchToProps = (dispatch: Dispatch<IModal<IModalState>>) => ({
	openModal: (id: string) => dispatch(openModal(id)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(GeneralInfo);

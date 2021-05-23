import { Dispatch, FC, SyntheticEvent } from 'react';
import { createClassName } from '../../modules/join';
import { cardInfoMenu__style } from './CardInfo.Menu.styled';
import { connect, ConnectedProps } from 'react-redux';
import { IModal, openModal } from '../../redux/actions/modal';
import { IModalState } from './../../redux/reducers/modal.reducer';
import { IRootReducer } from '../../redux/stores/rootStore';

let cardInfoMenu: string[] = [
	'Изменить описание',
	'Добавить ссылки',
	'Добавить фотографии',
];

namespace ICardInfoMenu {
	export type Props = ConnectedProps<typeof connector>;
}

const CardInfoMenu: FC<ICardInfoMenu.Props> = ({ modal, openModal }) => {
	let className = cardInfoMenu__style();
	let join = createClassName(className);
	return (
		<div className={join('wrapper')}>
			<div
				data-id="modalID"
				data-title={'modalTitle'}
				onClick={(e: SyntheticEvent<HTMLDivElement>) =>
					openModal({
						id: `${e.currentTarget.dataset.id}`,
						active: !modal.active,
					})
				}
			>
				Modal
			</div>
			{cardInfoMenu.map((menuItem, key) => (
				<div key={menuItem + key}>{menuItem}</div>
			))}
		</div>
	);
};

const mapStateToProps = ({ modal }: IRootReducer) => ({
	modal,
});
const mapDispatchToProps = (dispatch: Dispatch<IModal<IModalState>>) => ({
	openModal: ({ id, active }: IModalState) =>
		dispatch(openModal({ id, active })),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(CardInfoMenu);

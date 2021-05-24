import React, { Dispatch, FC, SyntheticEvent } from 'react';
import { createClassName } from '../../modules/join';
import { connect, ConnectedProps } from 'react-redux';
import { IModal, openModal } from '../../redux/actions/modal';
import { IModalState } from './../../redux/reducers/modal.reducer';
import { IRootReducer } from '../../redux/stores/rootStore';
import { createUseStyles } from 'react-jss';
import { ITheme } from '../..';

namespace Menu {
	const style = createUseStyles((theme: ITheme) => ({
		wrapper: {
			display: 'flex',
			flexDirection: 'column',
			background: theme.backgroundColor,
			boxShadow: theme.boxShadow,
			'&>div': {
				whiteSpace: 'nowrap',
				padding: '10px',
				cursor: 'pointer',
				transition: 'background-color 0.5s ease',
				'&:hover': {
					backgroundColor: '#8a8787',
				},
			},
		},
		menu: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			width: '20px',
			height: '20px',
			'&>span': {
				textAlign: 'center',
				borderRadius: '100%',
				width: '4px',
				height: '4px',
				backgroundColor: 'black',
				marginTop: '2px',
			},
		},
	}));

	namespace IMenuWrapper {
		export type Props = {
			children: React.ReactChild;
		};
	}

	export const MenuWrapper: FC<IMenuWrapper.Props> = ({ children }) => {
		let className = style();
		let join = createClassName(className);
		return <div className={join('wrapper')}>{children}</div>;
	};

	namespace IMenu {
		export type Props = ConnectedProps<typeof connector> & {
			id: string;
		};
	}
	export const Location: FC<IMenu.Props> = ({ openModal, id }) => {
		return (
			<MenuWrapper>
				<>
					<div
						data-id="Изменить местонахождение"
						onClick={(e: SyntheticEvent<HTMLDivElement>) => openModal(id)}
					>
						Изменить местонахождение
					</div>

					<div
						data-id="Изменить на карте"
						onClick={(e: SyntheticEvent<HTMLDivElement>) => openModal(id)}
					>
						Изменить на карте
					</div>
				</>
			</MenuWrapper>
		);
	};

	export const GeneralInfo: FC<IMenu.Props> = ({ openModal, id }) => {
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
}

const mapStateToProps = ({ modal }: IRootReducer) => ({
	modal,
});
const mapDispatchToProps = (dispatch: Dispatch<IModal<IModalState>>) => ({
	openModal: (id: string) => dispatch(openModal(id)),
});

//TODO сделать общий ID интерфейс

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Menu.Location);

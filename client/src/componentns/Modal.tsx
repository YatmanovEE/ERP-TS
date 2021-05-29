import { ReactChild, SyntheticEvent } from 'react';
import { FC } from 'react';
import ReactDOM from 'react-dom';
import CardInfoSection from './CardInfo/CardInfo.CardInfoSection';
import { createUseStyles } from 'react-jss';
import { ITheme } from '..';
import { createClassName } from '../modules/join';
import { IRootReducer } from '../redux/stores/rootStore';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { closeModal } from '../redux/actions/modal';

function chooseFileHandler(e: React.ChangeEvent<HTMLInputElement>) {
	let fileList = e.target.files;
	if (fileList) {
		for (let i = 0; i < fileList.length; i++) {
			let file = fileList.item(i);
			if (file) {
				let fileReader = new FileReader();
				fileReader.readAsDataURL(file);
				fileReader.onload = () => {
					//TODO Fetch fileReader.result
				};
			}
		}
	}
}
namespace IModalGeneral {
	export const Style = createUseStyles((theme: ITheme) => ({
		inputFileSender: {
			display: 'none',
		},
		fileSender: {
			background: '#FFFFFF',
			border: '1px solid rgba(0, 0, 0, 0.15)',
			borderRadius: '1px',
			boxShadow: theme.boxShadow,
			transition: 'box-shadow 0.3s ease',
			'&:active': {
				boxShadow: 'none',
			},
		},
	}));
}

namespace IModal {
	export interface Props extends ConnectedProps<typeof connector> {
		children?: ReactChild;
	}
	export const Style = createUseStyles(
		(theme: ITheme) => ({
			wrapper: {
				backgroundColor: 'transparent',
				position: 'fixed',
				width: '100%',
				height: '100%',
				left: '0px',
				top: '0px',
			},
			container: {
				display: 'flex',
				justifyContent: 'center',
			},
		}),
		{ name: 'Modal' }
	);
}

const Modal: FC<IModal.Props> = ({ modal }) => {
	let className = IModal.Style();
	let dispatch = useDispatch();
	function closeModalhandler(event: SyntheticEvent<HTMLDivElement>): void {
		if (event.target === event.currentTarget) {
			dispatch(closeModal({ id: modal.id }));
		}
	}

	if (modal.active) {
		return ReactDOM.createPortal(
			<div className={className.wrapper}>
				<div
					className={className.container}
					onClick={(e) => closeModalhandler(e)}
				>
					{modal.component}
				</div>
			</div>,
			document.body
		);
	} else {
		return null;
	}
};

export const ModalGeneral: FC<{ id: string }> = ({ id }) => {
	let className = IModalGeneral.Style();
	let join = createClassName(className);
	const dispatch = useDispatch();
	return (
		<>
			<CardInfoSection>
				<input
					type={'file'}
					id="fileSender"
					accept={'.jpeg, .jpg, .png'}
					className={className.inputFileSender}
					onChange={(e) => chooseFileHandler(e)}
				/>
				<button className={join('btn', 'fileSender')}>
					<label htmlFor="fileSender" className={join('btn')}>
						Загрузить файл
					</label>
				</button>
			</CardInfoSection>
			<button
				className={join('btn')}
				onClick={() => dispatch(closeModal({ id }))}
			>
				Закрыть
			</button>
		</>
	);
};

const mapStateToProps = ({ modal }: IRootReducer) => ({
	modal,
});

const connector = connect(mapStateToProps);
export default connector(Modal);

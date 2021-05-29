import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { ITheme } from '../..';
import { createClassName } from '../../modules/join';
import { closeModal } from '../../redux/actions/modal';
import { ModalTemplate } from '../ModalTemplate';
import CardInfoSection from './CardInfo.CardInfoSection';

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
			marginLeft: '-10px',
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

export const ModalGeneral: FC<{ id: string }> = ({ id }) => {
	let className = IModalGeneral.Style();
	let join = createClassName(className);
	const dispatch = useDispatch();
	return (
		<>
			<ModalTemplate
				title={'Основная информация'}
				id={id}
				onSaveHandler={() => console.log('hello')}
			>
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
							<label htmlFor="fileSender">Загрузить файл</label>
						</button>
					</CardInfoSection>
				</>
			</ModalTemplate>
		</>
	);
};

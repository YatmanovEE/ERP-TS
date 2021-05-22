import { ReactChild } from 'react';
import { FC } from 'react';
import ReactDOM from 'react-dom';
import CardInfo from './CardInfo/CardInfo';
import CardInfoSection from './CardInfo/CardInfo.PrimaryInformation';
import { createUseStyles } from 'react-jss';
import { ITheme } from '..';
import { createClassName } from '../modules/join';

interface ICreateModalForm {
	children?: ReactChild;
	title: string;
	id: string;
}

function chooseFileHandler(e: React.ChangeEvent<HTMLInputElement>) {
	// console.dir(e.target.files);
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

const createModal__style = createUseStyles((theme: ITheme) => ({
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
	wrapper: {
		backgroundColor: 'red',
		position: 'fixed',
		width: '100%',
		height: '100%',
		left: '0px',
		top: '0px',
	},
}));

export const CreateModalForm: FC<ICreateModalForm> = ({
	title,
	id,
	...props
}) => {
	let className = createModal__style();
	let join = createClassName(className);

	return ReactDOM.createPortal(
		<div className={join('wrapper')}>
			<CardInfo title={title}>
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
				</>
			</CardInfo>
		</div>,
		document.body
	);
};

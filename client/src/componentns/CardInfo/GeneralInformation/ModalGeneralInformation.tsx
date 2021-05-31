import { useEffect, useState } from 'react';
import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { ITheme } from '../../..';
import { createClassName } from '../../../modules/join';
import { ModalTemplate } from '../../ModalTemplate';
import CardInfoSection from '../../CardInfo/CardInfo.CardInfoSection';
import { PhotoSection } from './GeneralInformation';

export interface ISession {
	General: {
		photo: string[];
	};
}

function chooseFileHandler(e: React.ChangeEvent<HTMLInputElement>, id: string) {
	let fileList = e.target.files;
	if (fileList) {
		for (let i = 0; i < fileList.length; i++) {
			let file = fileList.item(i);
			if (file) {
				let fileReader = new FileReader();
				fileReader.readAsDataURL(file);
				fileReader.onload = () => {
					let result = fileReader.result;
					let get = sessionStorage.getItem(id);
					let getJSON;
					if (get) {
						getJSON = JSON.parse(get);
					}

					let json = JSON.stringify({
						General: {
							photo: getJSON?.General?.photo
								? getJSON.General.photo.concat(result)
								: [result],
						},
					});
					sessionStorage.setItem(id, json);

					window.dispatchEvent(
						new CustomEvent<ISession>('session', {
							detail: {
								General: {
									photo: getJSON?.General?.photo
										? getJSON.General.photo.concat(result)
										: [result],
								},
							},
						})
					);
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

		photoContainer: {
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		placeHolder: {
			marginLeft: '10px',
			maxWidth: '60%',
			color: theme.placeHolderColor,
		},
		btn: {
			display: 'inline-block',
			background: '#FFFFFF',
			marginLeft: '-10px',
			borderRadius: '1px',
			boxShadow: theme.boxShadow,
			transition: 'box-shadow 0.3s ease',
			'&:active': {
				boxShadow: 'none',
			},
			border: `1px solid rgba(0, 0, 0, 0.15)`,
			'&:hover': {},
		},
	}));
}

export const ModalGeneral: FC<{ id: string }> = ({ id }) => {
	let className = IModalGeneral.Style();
	let join = createClassName(className);

	const [photo, setPhoto] = useState<string[]>([]);

	useEffect(() => {
		function setItem(e?: CustomEvent<ISession>): void {
			let photoSrc = sessionStorage.getItem(id);
			if (e) {
				setPhoto(e.detail.General.photo);
			}
			if (photoSrc) {
				let photoJSON = JSON.parse(photoSrc);
				// setPhoto(photoJSON.General.photo);
			}
			//TODO Изменить логику работы с localStorage, возможно притянуть Redux вместо кастомных событий
		}
		window.addEventListener('session', setItem as (e: Event) => void);

		setItem();
		return () => {
			window.removeEventListener('session', setItem as (e: Event) => void);
		};
	}, [id]);
	return (
		<>
			<ModalTemplate
				title={'Основная информация'}
				id={id}
				onSaveHandler={() => console.log('hello')}
			>
				<>
					{photo.length > 0 && <PhotoSection photoSrc={photo}></PhotoSection>}
					<CardInfoSection>
						<div className={join('flex', className.photoContainer)}>
							{/* TODO Добавить возможность управления по tab */}
							<label
								role={'button'}
								htmlFor="fileSender"
								className={join('btn')}
							>
								Загрузить файл
								<input
									type={'file'}
									id="fileSender"
									accept={'.jpeg, .jpg, .png'}
									className={className.inputFileSender}
									onChange={(e) => chooseFileHandler(e, id)}
								/>
							</label>
							<div className={className.placeHolder}>
								Вы можете добавить фотографии и другие полезные изображения
							</div>
						</div>
					</CardInfoSection>
				</>
			</ModalTemplate>
		</>
	);
};

import { Dispatch, useState } from 'react';
import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { ITheme } from '../../..';
import { createClassName } from '../../../modules/join';
import { ModalTemplate } from '../../ModalTemplate';
import CardInfoSection from '../../CardInfo/CardInfo.CardInfoSection';
import { ILinkItem, LinkSection, PhotoSection } from './GeneralInformation';
import { connect, useDispatch, ConnectedProps } from 'react-redux';
import { IRootReducer } from './../../../redux/stores/rootStore';
import { addLink, addPhoto, IID } from '../../../redux/actions/generalInfo';

function chooseFileHandler(
	e: React.ChangeEvent<HTMLInputElement>,
	id: IID,
	dispatch: Dispatch<any>
) {
	let fileList = e.target.files;
	if (fileList) {
		for (let i = 0; i < fileList.length; i++) {
			let file = fileList.item(i);
			if (file) {
				let fileReader = new FileReader();
				fileReader.readAsDataURL(file);
				fileReader.onload = () => {
					let result = fileReader.result;
					if (result) {
						dispatch(
							addPhoto({
								id,
								photoSrc: [result.toString()],
							})
						);
					}
				};

				//TODO Fetch fileReader.result
			}
		}
	}
}
namespace IModalGeneral {
	export const Style = createUseStyles((theme: ITheme) => ({
		inputFileSender: {
			display: 'none',
		},

		container: {
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

type Props = ConnectedProps<typeof connector> & IID;

const ModalGeneral: FC<Props> = ({ id, generalInfo }) => {
	let className = IModalGeneral.Style();
	let join = createClassName(className);
	console.log('modal');
	let photo = generalInfo.photoSrc;
	let link = generalInfo.linkSection;
	const [linkText, setLinkText] = useState<ILinkItem.Props>({
		title: '',
		link: '',
	});
	let dispatch = useDispatch();
	return (
		<>
			<ModalTemplate
				title={'???????????????? ????????????????????'}
				id={id}
				onSaveHandler={() => console.log('hello')}
			>
				<>
					{photo.length > 0 && <PhotoSection photoSrc={photo}></PhotoSection>}
					<CardInfoSection>
						<div className={join('flex', className.container)}>
							{/* TODO ???????????????? ?????????????????????? ???????????????????? ???? tab */}
							<label
								role={'button'}
								htmlFor="fileSender"
								className={join('btn')}
							>
								?????????????????? ????????
								<input
									type={'file'}
									id="fileSender"
									accept={'.jpeg, .jpg, .png'}
									className={className.inputFileSender}
									onChange={(e) => chooseFileHandler(e, id, dispatch)}
								/>
							</label>
							<div className={className.placeHolder}>
								???? ???????????? ???????????????? ???????????????????? ?? ???????????? ???????????????? ??????????????????????
							</div>
						</div>
					</CardInfoSection>
					<CardInfoSection>
						{link.length > 0 && <LinkSection linkSection={link}></LinkSection>}

						<div>
							link
							<input
								type="text"
								name=""
								id=""
								value={linkText.link}
								onChange={(e) =>
									setLinkText({ ...linkText, link: e.target.value })
								}
							/>
						</div>
						<div>
							title
							<input
								type="text"
								name=""
								id=""
								value={linkText.title}
								onChange={(e) =>
									setLinkText({ ...linkText, title: e.target.value })
								}
							/>
						</div>
						<div className={join('flex', className.container)}>
							<button
								className={join('inputFileSender', 'btn')}
								onClick={() =>
									dispatch(
										addLink({
											id,
											linkSection: [linkText],
										})
									)
								}
							>
								???????????????? ????????????
							</button>
							<div className={className.placeHolder}>
								???????????????? ???????????? ???? ?????????????????? ??????????????????, ???????????????? ???????????????? ????????
								?????????????????????? ?????????? ?????????????? ?? ???????????? ???????????????? ??????????????????
							</div>
						</div>
					</CardInfoSection>
				</>
			</ModalTemplate>
		</>
	);
};

const mapStateToProps = ({ generalInfo }: IRootReducer) => ({
	generalInfo,
});

let connector = connect(mapStateToProps);
export default connector(ModalGeneral);

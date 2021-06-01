import { FC } from 'react';
import CardInfo from '../../CardInfo/CardInfo';
import CardInfoSection from '../../CardInfo/CardInfo.CardInfoSection';
import { createClassName } from '../../../modules/join';
import { GeneralInformationStyled } from './GeneralInformation.styled';
import { createUseStyles } from 'react-jss';
import { ITheme } from '../../..';
import { useDispatch } from 'react-redux';
import { removePhoto } from '../../../redux/actions/generalInfo';

export namespace IGeneralInformation {
	export type Props = IPhotoSection.Props &
		ILinkSection.Props &
		IDescriptionSection.Props & {
			id: string;
		};
}

export const GeneralInformation: FC<IGeneralInformation.Props> = ({
	id,
	photoSrc,
	linkSection,
	description,
}) => {
	return (
		<CardInfo id={id} title={'Основная информация'}>
			<>
				<DescriptionSection description={description}></DescriptionSection>
				<LinkSection linkSection={linkSection}></LinkSection>
				<PhotoSection photoSrc={photoSrc}></PhotoSection>
			</>
		</CardInfo>
	);
};

namespace IPhotoSection {
	export type Props = {
		photoSrc: string[];
	};
	export const Style = createUseStyles((theme: ITheme) => ({
		container__image: {
			margin: '-10px',
			overflowX: 'auto',
			'-ms-overflow-style': 'none' /* IE and Edge */,
			scrollbarWidth: 'none' /* Firefox */,

			'&::-webkit-scrollbar': {
				display: 'none' /* Chronium */,
			},
			'&>div': {
				margin: '10px',
			},
			'&>div:first-child': { marginLeft: '0px' },
		},
		image__item: {
			cursor: 'pointer',
			position: 'relative',
			transition: 'background-color 1s ease',
			padding: '10px',
			'&>img': {
				maxWidth: '10rem',
			},
			'&:hover': {
				backgroundColor: '#00000044',
			},
			'&:hover>button': {
				opacity: '1',
			},
		},
		btn: {
			position: 'absolute',
			opacity: '0',
			transition: 'opacity 1s ease',
			padding: '0px',
			right: '5px',
			top: '5px',
		},
	}));
}

export const PhotoSection: FC<IPhotoSection.Props> = ({ photoSrc }) => {
	let className = IPhotoSection.Style();
	let join = createClassName(className);
	let dispatch = useDispatch();
	function handler(src: string) {
		dispatch(
			removePhoto({
				photoSrc: [src],
				linkSection: [],
				id: 'none',
				description: 'none',
			})
		);
	}
	return (
		<CardInfoSection>
			<div className={join('flex', 'container__image')}>
				{photoSrc.map((src, key) => {
					return (
						<div className={join('image__item')} key={key + Math.random()}>
							<button
								className={join('btn')}
								data-key={key}
								onClick={() => handler(src)}
							>
								X
							</button>
							<img src={src} alt="#" />
						</div>
					);
				})}
			</div>
		</CardInfoSection>
	);
};

namespace ILinkSection {
	export type Props = {
		linkSection: ILinkItem.Props[];
	};
}

export const LinkSection: FC<ILinkSection.Props> = ({ linkSection }) => {
	let className = GeneralInformationStyled.Style();
	let join = createClassName(className);
	return (
		<CardInfoSection>
			<div className={join('link')}>
				{linkSection.map((linkItem) => {
					return <LinkItem {...linkItem}></LinkItem>;
				})}
			</div>
		</CardInfoSection>
	);
};

namespace ILinkItem {
	export type Props = {
		link: string;
		title: string;
	};
}

export const LinkItem: FC<ILinkItem.Props> = ({ link, title }) => {
	let className = GeneralInformationStyled.Style();
	let join = createClassName(className);
	return (
		<div className={join('link__a')}>
			<a href={link}>{title}</a>
		</div>
	);
};

namespace IDescriptionSection {
	export type Props = {
		description: string;
	};
}

export const DescriptionSection: FC<IDescriptionSection.Props> = ({
	description,
}) => {
	return <CardInfoSection>{description}</CardInfoSection>;
};

export namespace ILocation {
	export type Props = {
		description: string;
		src: string;
		id: string;
	};
}

export const Location: FC<ILocation.Props> = ({ description, src, id }) => {
	let className = GeneralInformationStyled.Style();
	let join = createClassName(className);

	return (
		<CardInfo id={id} title={'Местонахождение'}>
			<div className={join(className.location)}>
				<figure>
					<figcaption>
						<span>{description}</span>
					</figcaption>
					<div className={join(className.location__image)}>
						<img src={src} alt="" />;
					</div>
				</figure>
			</div>
		</CardInfo>
	);
};

import { FC } from 'react';
import { ITheme } from '../..';
import { createUseStyles } from 'react-jss';
import CardInfo from './CardInfo';
import CardInfoSection from './CardInfo.CardInfoSection';
import { createClassName } from '../../modules/join';

namespace IGeneralInformation {
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
}

export const PhotoSection: FC<IPhotoSection.Props> = ({ photoSrc }) => {
	let className = style();
	let join = createClassName(className);
	return (
		<CardInfoSection>
			<div className={join('flex', 'container__image')}>
				{photoSrc.map((src) => {
					return <img src={src} alt="#" />;
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
	let className = style();
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
	let className = style();
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

namespace ILocation {
	export type Props = {
		description: string;
		src: string;
		id: string;
	};
}

export const Location: FC<ILocation.Props> = ({ description, src, id }) => {
	let className = style();
	let join = createClassName(className);

	return (
		<CardInfo id={id} title={'Местонахождение'}>
			<div className={join('locationWrapper')}>
				<figure>
					<figcaption>
						<span>{description}</span>
					</figcaption>
					<div className={join('locationWrapper__image')}>
						<img src={src} alt="" />
					</div>
				</figure>
			</div>
		</CardInfo>
	);
};

const style = createUseStyles((theme: ITheme) => ({
	container__image: {
		margin: '-10px',
		overflowX: 'auto',
		'-ms-overflow-style': 'none' /* IE and Edge */,
		scrollbarWidth: 'none' /* Firefox */,

		'&::-webkit-scrollbar': {
			display: 'none' /* Chronium */,
		},
		'&>img': {
			margin: '10px',
		},
	},
	link: {
		margin: '-10px',
	},
	link__a: {
		margin: '10px',
	},

	locationWrapper: {
		'&>figure': {
			margin: '0px',
			'&>figCaption': {
				margin: '10px',
				'&>span': {
					margin: '-10px',
				},
			},
		},
	},
	locationWrapper__image: {
		overflow: 'hidden',
		'&>img': {},
	},
	cardInfoWrapper: {
		display: 'flex',
		flexWrap: 'wrap',
		'&>:first-child': {
			flex: '2 2 300px',
		},
		'&>:last-child': {
			flex: '1 2 300px',
		},
	},
}));

import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { ITheme } from '..';
import CardInfo from '../componentns/CardInfo/CardInfo';
import CardInfoPersonItem from '../componentns/CardInfo/CardInfo.PersonItem';
import { Wrapper } from '../componentns/StyledComponents';
import { createClassName } from '../modules/join';
import CardInfoSection from '../componentns/CardInfo/CardInfo.PrimaryInformation';
import img from './img/img.jpg';

const cardObject__style = createUseStyles((theme: ITheme) => ({
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

const CardObject: FC = () => {
	let className = cardObject__style();
	let join = createClassName(className);
	return (
		<Wrapper>
			<div className={join('cardInfoWrapper')}>
				<CardInfo title={'Основная информация'}>
					<>
						<CardInfoSection>
							Российское судостроительное и судоремонтное предприятие,
							находящееся в городе Большой Камень Приморского края. Ведущее
							предприятие по ремонту подводных лодок Тихоокеанского флота и
							единственное на Дальнем Востоке, специализирующееся на ремонте,
							переоборудовании и модернизации атомных подводных ракетоносцев.
						</CardInfoSection>
						<CardInfoSection>
							<div className={join('link')}>
								<div className={join('link__a')}>
									<a href="#">
										На Сахалине построят три спортивных объекта олимпийского
										резерва
									</a>
								</div>
								<div className={join('link__a')}>
									<a href="#">
										В Южно-Сахалинске началась реконструкция главного
										футбольного поля – стадиона «Спартак»
									</a>
								</div>
							</div>
						</CardInfoSection>
						<CardInfoSection>
							<div className={join('flex', 'container__image')}>
								<img src={img} alt="#" />
								<img src={img} alt="#" />
								<img src={img} alt="#" />
								<img src={img} alt="#" />
								<img src={img} alt="#" />
								<img src={img} alt="#" />
								<img src={img} alt="#" />
								<img src={img} alt="#" />
								<img src={img} alt="#" />
								<img src={img} alt="#" />
							</div>
						</CardInfoSection>
					</>
				</CardInfo>
				<CardInfo title={'Местонахождение'}>
					<div className={join('locationWrapper')}>
						<figure>
							<figcaption>
								<span>
									Приморский край, г. Большой камень, ул.
									Пролетарско-красноармейская здание 53 длиный литер 2кл4Ж
								</span>
							</figcaption>
							<div className={join('locationWrapper__image')}>
								<img src={img} alt="" />
							</div>
						</figure>
					</div>
				</CardInfo>
			</div>

			<CardInfo title={'Проектировщик'}>
				<div className={join('flex', 'wrap')}>
					<CardInfoPersonItem></CardInfoPersonItem>
					<CardInfoPersonItem></CardInfoPersonItem>
					<CardInfoPersonItem></CardInfoPersonItem>
				</div>
			</CardInfo>
		</Wrapper>
	);
};

export default connect(null, null)(CardObject);

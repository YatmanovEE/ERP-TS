import { FC } from 'react';
import { connect } from 'react-redux';
import CardInfo from '../componentns/CardInfo/CardInfo';
import { Wrapper } from '../componentns/Wrapper';
import CardInfoSection from './../componentns/CardInfo/CardInfo.PrimaryInformation';

const CardObject: FC = () => {
	return (
		<Wrapper>
			<CardInfo title={'Основная информация'}>
				<>
					<CardInfoSection>
						Российское судостроительное и судоремонтное предприятие, находящееся
						в городе Большой Камень Приморского края. Ведущее предприятие по
						ремонту подводных лодок Тихоокеанского флота и единственное на
						Дальнем Востоке, специализирующееся на ремонте, переоборудовании и
						модернизации атомных подводных ракетоносцев.
					</CardInfoSection>
					<CardInfoSection>
						<a href="#">Проверка</a>
					</CardInfoSection>
				</>
			</CardInfo>
		</Wrapper>
	);
};

export default connect(null, null)(CardObject);

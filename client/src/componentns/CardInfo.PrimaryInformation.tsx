import { connect } from 'react-redux';
import { ITheme } from '..';
import CardInfo from './CardInfo';
import { createUseStyles } from 'react-jss';
import { createClassName } from '../modules/join';
import { FunctionComponent } from 'react';
import { ReactNode } from 'react';

const style = createUseStyles((theme: ITheme) => ({
	contentWrapper: {
		borderBottom: theme.border,
		padding: '10px',
	},
}));

const CardInfoPrimaryInformation: FunctionComponent = () => {
	return (
		<CardInfo title={'Основная информация'}>
			<>
				<CardInfoSection>
					Российское судостроительное и судоремонтное предприятие, находящееся в
					городе Большой Камень Приморского края. Ведущее предприятие по ремонту
					подводных лодок Тихоокеанского флота и единственное на Дальнем
					Востоке, специализирующееся на ремонте, переоборудовании и
					модернизации атомных подводных ракетоносцев.
				</CardInfoSection>
				<CardInfoSection>
					Российское судостроительное и судоремонтное предприятие, находящееся в
					городе Большой Камень Приморского края. Ведущее предприятие по ремонту
					подводных лодок Тихоокеанского флота и единственное на Дальнем
					Востоке, специализирующееся на ремонте, переоборудовании и
					модернизации атомных подводных ракетоносцев.
				</CardInfoSection>
				<CardInfoSection>
					Российское судостроительное и судоремонтное предприятие, находящееся в
					городе Большой Камень Приморского края. Ведущее предприятие по ремонту
					подводных лодок Тихоокеанского флота и единственное на Дальнем
					Востоке, специализирующееся на ремонте, переоборудовании и
					модернизации атомных подводных ракетоносцев.
				</CardInfoSection>
			</>
		</CardInfo>
	);
};

const CardInfoSection: FunctionComponent<ReactNode> = ({ children }) => {
	let className = style();
	let join = createClassName(className);
	return <div className={className.contentWrapper}>{children}</div>;
};

const exp = {
	CardInfoPrimaryInformation: connect(null, null)(CardInfoPrimaryInformation),
	CardInfoSection: connect(null, null)(CardInfoSection),
};

export default exp;

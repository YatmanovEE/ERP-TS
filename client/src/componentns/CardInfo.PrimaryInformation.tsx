import { connect } from 'react-redux';
import { ITheme } from '..';
import CardInfo from './CardInfo';
import { createUseStyles } from 'react-jss';
import { createClassName } from '../modules/join';
import { FunctionComponent } from 'react';

const style = createUseStyles((theme: ITheme) => ({
	contentWrapper: {
		borderBottom: theme.border,
		padding: '10px',
	},
}));

const CardInfoPrimaryInformation: FunctionComponent = () => {
	let className = style();
	let join = createClassName(className);
	return (
		<CardInfo title={'Основная информация'}>
			<>
				<div className={className.contentWrapper}>
					Российское судостроительное и судоремонтное предприятие, находящееся в
					городе Большой Камень Приморского края. Ведущее предприятие по ремонту
					подводных лодок Тихоокеанского флота и единственное на Дальнем
					Востоке, специализирующееся на ремонте, переоборудовании и
					модернизации атомных подводных ракетоносцев.
				</div>
				<div className={className.contentWrapper}>
					Российское судостроительное и судоремонтное предприятие, находящееся в
					городе Большой Камень Приморского края. Ведущее предприятие по ремонту
					подводных лодок Тихоокеанского флота и единственное на Дальнем
					Востоке, специализирующееся на ремонте, переоборудовании и
					модернизации атомных подводных ракетоносцев.
				</div>
				<div className={className.contentWrapper}>
					Российское судостроительное и судоремонтное предприятие, находящееся в
					городе Большой Камень Приморского края. Ведущее предприятие по ремонту
					подводных лодок Тихоокеанского флота и единственное на Дальнем
					Востоке, специализирующееся на ремонте, переоборудовании и
					модернизации атомных подводных ракетоносцев.
				</div>
			</>
		</CardInfo>
	);
};

export default connect(null, null)(CardInfoPrimaryInformation);

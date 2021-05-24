import { FC } from 'react';
import { connect } from 'react-redux';
import { createClassName } from '../../modules/join';
import { MenuPerson } from './CardInfo.MenuPerson';
import { ICardInfo } from './CardInfo.styled';

const CardInfo: FC<ICardInfo.Props> = ({ title, children, id }) => {
	const className = ICardInfo.Style();
	return (
		<div className={className.wrapper}>
			<CardInfoTitle id={id} title={title}></CardInfoTitle>
			<div className={className.payloadContainer}>{children}</div>
		</div>
	);
};

const CardInfoTitle: FC<ICardInfo.Title.Props> = (props) => {
	let className = ICardInfo.Title.Style();
	let join = createClassName(className);

	return (
		<div className={join('payloadContainer', 'titleContainer', 'flex')}>
			<div className={className.title}>{props.title}</div>
			<MenuPerson id={props.id}></MenuPerson>
		</div>
	);
};

export default connect(null, null)(CardInfo);

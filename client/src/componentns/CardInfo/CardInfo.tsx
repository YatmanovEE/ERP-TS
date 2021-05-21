import { FC } from 'react';
import { connect } from 'react-redux';
import { createClassName } from '../../modules/join';
import { MenuPersonItem } from './CardInfo.PersonItem';
import { cardInfoTitle__style, cardInfo__style } from './CardInfo.styled';

interface ICardInfoTitle__Props {
	title: string;
}

interface ICardInfo__Props extends ICardInfoTitle__Props {
	children: JSX.Element;
}

const CardInfo: FC<ICardInfo__Props> = ({ title, children }) => {
	const className = cardInfo__style();
	return (
		<div className={className.wrapper}>
			<CardInfoTitle title={title}></CardInfoTitle>
			<div className={className.payloadContainer}>{children}</div>
		</div>
	);
};

const CardInfoTitle: FC<ICardInfoTitle__Props> = (props) => {
	let className = cardInfoTitle__style();
	let join = createClassName(className);

	return (
		<div className={join('payloadContainer', 'titleContainer', 'flex')}>
			<div className={className.title}>{props.title}</div>
			<MenuPersonItem></MenuPersonItem>
		</div>
	);
};

export default connect(null, null)(CardInfo);

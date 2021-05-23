import { FC } from 'react';
import { connect } from 'react-redux';
import { createClassName } from '../../modules/join';
import { MenuPerson } from './CardInfo.MenuPerson';
import { cardInfoTitle__style, cardInfo__style } from './CardInfo.styled';

namespace ICardInfoTitle {
	export interface Props {
		title: string;
	}
}

namespace ICardInfo {
	export interface Props extends ICardInfoTitle.Props {
		children: JSX.Element;
	}
}

const CardInfo: FC<ICardInfo.Props> = ({ title, children }) => {
	const className = cardInfo__style();
	return (
		<div className={className.wrapper}>
			<CardInfoTitle title={title}></CardInfoTitle>
			<div className={className.payloadContainer}>{children}</div>
		</div>
	);
};

const CardInfoTitle: FC<ICardInfoTitle.Props> = (props) => {
	let className = cardInfoTitle__style();
	let join = createClassName(className);

	return (
		<div className={join('payloadContainer', 'titleContainer', 'flex')}>
			<div className={className.title}>{props.title}</div>
			<MenuPerson></MenuPerson>
		</div>
	);
};

export default connect(null, null)(CardInfo);

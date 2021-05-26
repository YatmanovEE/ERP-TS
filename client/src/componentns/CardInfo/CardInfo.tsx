import { FC } from 'react';
import { connect } from 'react-redux';
import { createClassName } from '../../modules/join';
import { MenuPerson } from './CardInfo.MenuPerson';
import { ICardInfoStyle } from './CardInfo.styled';

export namespace ICardInfo {
	export interface Props extends ICardInfoTitle.Props {
		children: JSX.Element;
	}
}
export namespace ICardInfoTitle {
	export interface Props {
		title: string;
		id: string;
	}
}

const CardInfo: FC<ICardInfo.Props> = ({ title, children, id }) => {
	const className = ICardInfoStyle.Style();
	return (
		<div className={className.wrapper}>
			<CardInfoTitle id={id} title={title}></CardInfoTitle>
			<div className={className.payloadContainer}>{children}</div>
		</div>
	);
};

const CardInfoTitle: FC<ICardInfoTitle.Props> = (props) => {
	let className = ICardInfoStyle.Title();
	let join = createClassName(className);

	return (
		<div className={join('payloadContainer', 'titleContainer', 'flex')}>
			<div className={className.title}>{props.title}</div>
			<MenuPerson id={props.id}></MenuPerson>
		</div>
	);
};

export default connect(null, null)(CardInfo);

import { FC } from 'react';
import { ReactNode } from 'react';
import { connect } from 'react-redux';
import { createClassName } from '../../modules/join';
import {
	personItemComments__style,
	personItemDescription__style,
	personItem__style,
} from './CardInfo.PresonItem.styled';
import { CardMenuWrapper } from './CardInfo.MenuWrapper';
import CardInfoMenu from './CardInfo.Menu';

interface IPersonItemComments__Props {
	comments?: string;
	children?: ReactNode;
}

const PersonItem: FC = () => {
	let className = personItem__style();
	let join = createClassName(className);
	return (
		<div className={join('flex', 'wrapper')}>
			<PersonItemDescription></PersonItemDescription>
			<PersonItemComments></PersonItemComments>
		</div>
	);
};

const PersonItemComments: FC<IPersonItemComments__Props> = ({ comments }) => {
	let className = personItemComments__style();
	if (comments) {
		return <div className={className.comments}>Есть комментарий</div>;
	} else {
		return <div className={className.comments}>Ничего нет</div>;
	}
};

const PersonItemDescription: FC = () => {
	let className = personItemDescription__style();
	let join = createClassName(className);
	return (
		<div className={join('wrapper', 'flex', 'wrapperJustify')}>
			<div className={join('flex')}>
				<img src="#" alt="avatar" className={className.avatar} />
				<div className={className.personInfo}>
					<span className={'position'}>Генеральный директор</span>
					<span>Дмитрий Сергеевич</span>
				</div>
			</div>
			<MenuPersonItem></MenuPersonItem>
		</div>
	);
};

export const MenuPersonItem: FC = () => {
	return (
		<CardMenuWrapper>
			<CardInfoMenu></CardInfoMenu>
		</CardMenuWrapper>
	);
};

export default connect(null, null)(PersonItem);

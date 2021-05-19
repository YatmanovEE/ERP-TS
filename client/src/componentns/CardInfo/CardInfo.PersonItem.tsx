import { FC } from 'react';
import { FunctionComponent, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { ITheme } from '../../';
import { createClassName } from '../../modules/join';
import MenuWrapper from './CardInfo.MenuWrapper';

let style = createUseStyles(
	(theme: ITheme) => ({
		wrapper: {
			flexDirection: 'column',
			border: theme.border,
			marginRight: '10px',
			flexGrow: '1',
		},
	}),
	{
		name: 'PersonItem',
	}
);

const PersonItem: FunctionComponent = () => {
	let className = style();
	let join = createClassName(className);
	return (
		<div className={join('flex', 'wrapper')}>
			<PersonItemDescription></PersonItemDescription>
			<PersonItemComments></PersonItemComments>
		</div>
	);
};

interface IPersonItemComments__Props {
	comments?: string;
	children?: ReactNode;
}

const personItemComments__style = createUseStyles(
	(theme: ITheme) => ({
		comments: {
			borderTop: theme.border,
			padding: '10px',
		},
	}),
	{
		name: 'PersonItemComments',
	}
);

const PersonItemComments: FC<IPersonItemComments__Props> = ({ comments }) => {
	let className = personItemComments__style();
	if (comments) {
		return <div className={className.comments}>Есть комментарий</div>;
	} else {
		return <div className={className.comments}>Ничего нет</div>;
	}
};

const personItemDescription__style = createUseStyles(
	(theme: ITheme) => ({
		avatar: {
			width: '64px',
			height: '64px',
			backgroundColor: 'black',
			margin: '10px',
		},
		personInfo: {
			display: 'flex',
			flexDirection: 'column',
			'&>span': {
				marginTop: '5px',
			},
			'&__position': {
				color: 'red',
			},
		},
		wrapperJustify: {
			justifyContent: 'space-between',
		},
		wrapper: {
			padding: '10px',
			alignItems: 'center',
		},
		flex: {
			display: 'flex',
		},
	}),
	{
		name: 'PersonItemDescription',
	}
);

const PersonItemDescription: FC = () => {
	let className = personItemDescription__style();
	let join = createClassName(className);
	return (
		<div className={join('wrapper', 'flex', 'wrapperJustify')}>
			<div className={join('wrapper', 'flex')}>
				<img src="#" alt="avatar" className={className.avatar} />
				<div className={className.personInfo}>
					<span className={'position'}>Генеральный директор</span>
					<span>Дмитрий Сергеевич</span>
				</div>
			</div>
			<MenuWrapper></MenuWrapper>
		</div>
	);
};

export default connect(null, null)(PersonItem);

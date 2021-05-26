import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { ITheme } from '../index';
import { createClassName } from '../modules/join';
import { IComponentWrapper } from './CardInfo/CardInfo.CardInfoSection';

const style = createUseStyles((theme: ITheme) => ({
	wrapper: {
		margin: '30px',
		'&>div': {
			marginBottom: '24px',
		},
	},
}));

export const Wrapper: FC<IComponentWrapper> = ({
	children,
}: IComponentWrapper) => {
	let className = style();
	let join = createClassName(className);
	return <div className={join('wrapper')}>{children}</div>;
};

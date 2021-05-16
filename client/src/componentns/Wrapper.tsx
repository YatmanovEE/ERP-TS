import { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { createClassName } from '../modules/join';
import { ITheme } from './../index';

const wrapper__style = createUseStyles((theme: ITheme) => ({
	wrapper: {
		margin: '30px',
	},
}));

export const Wrapper: FC<ReactNode> = ({ children }) => {
	let className = wrapper__style();
	let join = createClassName(className);
	return <div className={join('wrapper')}>{children}</div>;
};

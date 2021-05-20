import { connect } from 'react-redux';
import { ITheme } from '../../';
import { createUseStyles } from 'react-jss';
import { FC } from 'react';
import { ReactNode } from 'react';

const style = createUseStyles((theme: ITheme) => ({
	contentWrapper: {
		borderBottom: theme.border,
		padding: '10px',
	},
}));

export interface IComponentWrapper {
	children: ReactNode;
}

const CardInfoSection: FC<IComponentWrapper> = ({
	children,
}: IComponentWrapper) => {
	let className = style();
	return <div className={className.contentWrapper}>{children}</div>;
};

export default connect(null, null)(CardInfoSection);

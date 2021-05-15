import { connect } from 'react-redux';
import { ITheme } from '../../';
import { createUseStyles } from 'react-jss';
import { createClassName } from '../../modules/join';
import { FunctionComponent } from 'react';
import { ReactNode } from 'react';

const style = createUseStyles((theme: ITheme) => ({
	contentWrapper: {
		borderBottom: theme.border,
		padding: '10px',
	},
}));

interface IComponentWrapper {
	children: ReactNode;
}

const CardInfoSection: FunctionComponent<IComponentWrapper> = ({
	children,
}: IComponentWrapper) => {
	let className = style();
	let join = createClassName(className);
	return <div className={className.contentWrapper}>{children}</div>;
};

export default connect(null, null)(CardInfoSection);

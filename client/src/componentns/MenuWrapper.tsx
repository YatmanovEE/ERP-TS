import { FC, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { ITheme } from '..';
import { createClassName } from '../modules/join';
import { ToolTipWrapper } from './ToolTipWrapper';

/**
	@declare children: div in Button;
	@declare component: The menu that opens
 */
export interface IMenuWrapper {
	children: React.ReactChild;
	component: React.ReactChild;
}

export const menuWrapperStyle = createUseStyles((theme: ITheme) => ({
	btn: {
		outline: 'none',
		border: 'none',
		padding: '10px',
		backgroundColor: 'transparent',
		cursor: 'pointer',
	},
}));

const MenuWrapper: FC<IMenuWrapper> = ({
	children,
	component,
}: IMenuWrapper) => {
	let node = useRef(null);
	const [toolTipState, setToolTipState] = useState(false);
	const className = menuWrapperStyle();
	let join = createClassName(className);
	return (
		<button
			className={join('menu', 'btn')}
			ref={node}
			onClick={() => setToolTipState(!toolTipState)}
		>
			{children}
			{toolTipState && (
				<ToolTipWrapper refNode={node} handler={() => setToolTipState(false)}>
					{component}
				</ToolTipWrapper>
			)}
		</button>
	);
};

export default connect(null, null)(MenuWrapper);

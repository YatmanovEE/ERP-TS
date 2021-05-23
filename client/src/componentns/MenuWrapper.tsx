import { FC, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { ITheme } from '..';
import { createClassName } from '../modules/join';
import { ToolTipWrapper } from './ToolTipWrapper';

/**
	@declare children: HTMLDivElement in Button;
	@declare component: The menu that opens
 */

namespace IMenuWrapper {
	export interface Props {
		children: React.ReactChild;
		component: React.ReactChild;
	}
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

const MenuWrapper: FC<IMenuWrapper.Props> = ({
	children,
	component,
}: IMenuWrapper.Props) => {
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

import { FC, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { ITheme } from '..';
import { createClassName } from '../modules/join';
import { ToolTipWrapper } from './ToolTipWrapper';

namespace IMenuDivWrapper {
	/**
	@param children HTMLDivElement in Button;
	@param component The menu that opens
	@param modal Modal component
 */
	export interface Props {
		children: React.ReactChild;
		component: React.ReactChild;
		modal?: React.ReactChild;
	}
	export const Style = createUseStyles((theme: ITheme) => ({
		btn: {
			outline: 'none',
			border: 'none',
			padding: '10px',
			backgroundColor: 'transparent',
			cursor: 'pointer',
		},
	}));
}

const MenuDivWrapper: FC<IMenuDivWrapper.Props> = ({
	children,
	component,
	modal,
}: IMenuDivWrapper.Props) => {
	let node = useRef(null);
	const [toolTipState, setToolTipState] = useState(false);
	const className = IMenuDivWrapper.Style();
	let join = createClassName(className);
	return (
		<>
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
			{modal}
		</>
	);
};

export default connect(null, null)(MenuDivWrapper);

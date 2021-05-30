import { FC, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { ToolTipWrapper } from './ToolTipWrapper';
import { globalStyle } from './../App.global.styled';

namespace IMenuDivWrapper {
	export interface Props {
		children: React.ReactChild;
		component: React.ReactChild;
	}
}

/**
@param children HTMLDivElement in Button;
@param component The menu that opens
 */
const MenuDivWrapper: FC<IMenuDivWrapper.Props> = ({
	children,
	component,
}: IMenuDivWrapper.Props) => {
	let node = useRef(null);
	const [toolTipState, setToolTipState] = useState(false);
	let globalName = globalStyle();
	return (
		<>
			<button
				className={globalName.btn}
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
		</>
	);
};

export default connect(null, null)(MenuDivWrapper);

import { FC, useRef, useState } from 'react';
import CardInfoMenu from './CardInfo.Menu';
import { ToolTipWrapper } from '../ToolTipWrapper';
import { connect } from 'react-redux';
import { createClassName } from '../../modules/join';
import { menuWrapper__style } from './CardInfo.MenuWrapper.styled';

const MenuWrapper: FC = () => {
	let node = useRef(null);
	const [toolTipState, setToolTipState] = useState(false);
	const className = menuWrapper__style();
	let join = createClassName(className);

	return (
		<button
			className={join('menu', 'btn')}
			ref={node}
			onClick={() => setToolTipState(!toolTipState)}
		>
			<div className={className.menu}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			{toolTipState && (
				<ToolTipWrapper refNode={node} handler={() => setToolTipState(false)}>
					<CardInfoMenu></CardInfoMenu>
				</ToolTipWrapper>
			)}
		</button>
	);
};

export default connect(null, null)(MenuWrapper);

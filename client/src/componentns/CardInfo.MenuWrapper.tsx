import { FC, useRef, useState } from 'react';
import { ITheme } from '..';
import CardInfoMenu from './CardInfo.Menu';
import { ToolTipWrapper } from './ToolTipWrapper';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';

const menuWrapper__style = createUseStyles((theme: ITheme) => ({
	menu: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer',
		width: '20px',
		height: '20px',
		pointsEvents: 'none',
		'&>span': {
			pointsEvents: 'none',
			textAlign: 'center',
			borderRadius: '100%',
			width: '4px',
			height: '4px',
			backgroundColor: 'black',
			marginTop: '4px',
		},
	},
}));

const MenuWrapper: FC = () => {
	let node = useRef(null);
	const [toolTipState, setToolTipState] = useState(false);
	const className = menuWrapper__style();
	return (
		<div
			className={className.menu}
			ref={node}
			onClick={() => setToolTipState(!toolTipState)}
		>
			<span></span>
			<span></span>
			<span></span>

			{toolTipState && (
				<ToolTipWrapper refNode={node}>
					<CardInfoMenu></CardInfoMenu>
				</ToolTipWrapper>
			)}
		</div>
	);
};

export default connect(null, null)(MenuWrapper);

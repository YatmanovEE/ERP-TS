import { FC, useEffect, useRef, useState } from 'react';
import { ITheme } from '../../';
import CardInfoMenu from './CardInfo.Menu';
import { ToolTipWrapper } from '../ToolTipWrapper';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { createClassName } from '../../modules/join';

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
			pointEvents: 'none',
			textAlign: 'center',
			borderRadius: '100%',
			width: '4px',
			height: '4px',
			backgroundColor: 'black',
			marginTop: '2px',
		},
	},
	btn: {
		outline: 'none',
		border: 'none',
		padding: '10px',
		backgroundColor: 'transparent',
	},
}));

const MenuWrapper: FC = () => {
	let node = useRef(null);
	const [toolTipState, setToolTipState] = useState(false);
	const className = menuWrapper__style();
	let join = createClassName(className);

	useEffect(() => {
		const current = document.querySelector(`.${className.menu}>span`);
		const menuHandler = (e: Event) => {
			e.stopPropagation();
			if (e.target === current || e.target === current?.parentNode) {
				setToolTipState(!toolTipState);
			} else {
				setToolTipState(false);
			}
		};
		document.body!.addEventListener('click', menuHandler, {
			capture: true,
		});
		return () =>
			document.body!.removeEventListener('click', menuHandler, {
				capture: true,
			});
	}, [className.btn, className.menu, toolTipState]);
	return (
		<button className={join('menu', 'btn')} ref={node}>
			<div className={className.menu}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			{toolTipState && (
				<ToolTipWrapper refNode={node}>
					<CardInfoMenu></CardInfoMenu>
				</ToolTipWrapper>
			)}
		</button>
	);
};

export default connect(null, null)(MenuWrapper);

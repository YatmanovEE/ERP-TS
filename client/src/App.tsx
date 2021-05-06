import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { CardInfo } from './componentns/CardInfo';
import { ToolTipWrapper } from './componentns/ToolTipWrapper';
import { createClassName } from './modules/join';

function App() {
	return (
		<>
			<CardInfo title={'Заказчик'}>
				<div className="hello">hello</div>
			</CardInfo>
			<RefWrapper elem={'wrapperLeftDown'}></RefWrapper>
			<RefWrapper elem={'wrapperLeftUp'}></RefWrapper>
			<RefWrapper elem={'wrapperRightDown'}></RefWrapper>
			<RefWrapper elem={'wrapperRightUp'}></RefWrapper>
			<RefWrapper elem={'wrapperCenter'}></RefWrapper>
		</>
	);
}

interface IRefWrapper__Props {
	elem: string;
}
interface IStyle__Props {
	state: boolean;
}
let style = createUseStyles({
	wrapper: (props: IStyle__Props) => ({
		position: 'absolute',

		backgroundColor: props.state ? 'red' : 'green',
		width: '20px',
		height: '20px',
	}),
	wrapperLeftDown: {
		bottom: 0,
		left: 0,
	},
	wrapperRightUp: {
		top: 0,
		right: 0,
	},
	wrapperRightDown: {
		bottom: 0,
		right: 0,
	},
	wrapperLeftUp: {
		left: 0,
		top: 0,
	},
	wrapperCenter: {
		left: '50%',
		top: '50%',
	},
	child: {
		backgroundColor: 'yellow',
		overflowY: 'auto',
		padding: '10px',
	},
});

const RefWrapper = ({ elem }: IRefWrapper__Props) => {
	const [state, setState] = useState(false);
	let join = createClassName(style({ state }));
	let ref = React.useRef(null);
	if (ref) {
		return (
			<div
				ref={ref}
				className={join('wrapper', elem)}
				onClick={() => setState(!state)}
			>
				{state && (
					<ToolTipWrapper refNode={ref}>
						<div className={join('child')}>hello</div>
						<div className={join('child')}>hello</div>
						<div className={join('child')}>hello</div>
						<div className={join('child')}>hello</div>
					</ToolTipWrapper>
				)}
			</div>
		);
	} else {
		return null;
	}
};

export default App;

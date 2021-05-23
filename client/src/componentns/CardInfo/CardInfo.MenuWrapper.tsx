import React, { FC } from 'react';
import MenuWrapper from '../MenuWrapper';
import { cardInfoMenu__style } from './CardInfo.Menu.styled';
import { connect, ConnectedProps } from 'react-redux';
import { IRootReducer } from './../../redux/stores/rootStore';

namespace ICardMenuWrapper {
	export type Props = ConnectedProps<typeof connector> & {
		children: React.ReactChild;
	};
}

const CardMenuWrapper: FC<ICardMenuWrapper.Props> = ({ children, modal }) => {
	let className = cardInfoMenu__style();

	return (
		<>
			<MenuWrapper component={children}>
				<div className={className.menu}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</MenuWrapper>
			{/* {modal.active && (
				<CreateModalForm id={modal.id} title={modal.id}></CreateModalForm>
			)}  
			
			TODO FIX infinity loop
			*/}
		</>
	);
};

const mapStateToProps = ({ modal }: IRootReducer) => ({
	modal,
});

const connector = connect(mapStateToProps);
export default connector(CardMenuWrapper);

import { FC } from 'react';
import { Wrapper } from '../componentns/StyledComponents';
import { LocationMenu } from '../componentns/CardInfo/LocationMenu';
import CreateModal from '../componentns/CreateModal';

export const CardObject: FC = () => {
	let id = '1';
	return (
		<Wrapper>
			{/* TODO Добавить стиль */}
			{/* <div className={join('cardInfoWrapper')}></div> */}
			<LocationMenu id={'id'}></LocationMenu>
			<CreateModal id={'id'}></CreateModal>
		</Wrapper>
	);
};

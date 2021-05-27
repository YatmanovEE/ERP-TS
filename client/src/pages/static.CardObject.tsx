import { FC } from 'react';
import { Wrapper } from '../componentns/StyledComponents';
import CreateModal from '../componentns/CreateModal';
import { GeneralInfoMenu } from './../componentns/CardInfo/GeneralInfoMenu';

export const CardObject: FC = () => {
	let id = '1';
	return (
		<Wrapper>
			{/* TODO Добавить стиль */}
			{/* <div className={join('cardInfoWrapper')}></div> */}
			<GeneralInfoMenu id={'2'}></GeneralInfoMenu>
			<GeneralInfoMenu id={'1'}></GeneralInfoMenu>
			{/* <CreateModal id={id}></CreateModal> */}
		</Wrapper>
	);
};

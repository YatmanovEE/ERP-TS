import { FC } from 'react';
import { Wrapper } from '../componentns/StyledComponents';
import { GeneralInfoMenu } from './../componentns/CardInfo/GeneralInfoMenu';
import { MenuPerson } from '../componentns/CardInfo/MenuPerson';

export const CardObject: FC = () => {
	let id = '1';
	return (
		<Wrapper>
			{/* TODO Добавить стиль */}
			{/* <div className={join('cardInfoWrapper')}></div> */}
			<GeneralInfoMenu id={'1'}></GeneralInfoMenu>
			<MenuPerson id={'1'}></MenuPerson>
			{/* <CreateModal id={id}></CreateModal> */}
		</Wrapper>
	);
};

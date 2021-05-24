import { FC } from 'react';
import CardInfoMenu from './CardInfo.Menu';
import CardMenuWrapper from './CardInfo.MenuWrapper';

export const MenuPerson: FC = () => {
	return (
		<>
			<CardMenuWrapper>
				<CardInfoMenu></CardInfoMenu>
			</CardMenuWrapper>
		</>
	);
};

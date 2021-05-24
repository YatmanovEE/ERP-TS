import { FC } from 'react';
import CardInfoMenu from './CardInfo.Menu';
import CardMenuWrapper from './CardInfo.MenuWrapper';

namespace IMenuPerson {
	export type Props = {
		id: string;
	};
}

export const MenuPerson: FC<IMenuPerson.Props> = ({ id }) => {
	return (
		<CardMenuWrapper id={id}>
			<CardInfoMenu id={id}></CardInfoMenu>
		</CardMenuWrapper>
	);
};

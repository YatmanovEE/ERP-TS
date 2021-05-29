import { FC } from 'react';
import MenuDivWrapper from '../MenuDivWrapper';
import { IKebubMenuStyled } from './KebubMenu.styled';

namespace IKebubMenu {
	export type Props = {
		children: React.ReactChild;
		id: string;
	};
}

export const KebubMenu: FC<IKebubMenu.Props> = ({ children, id }) => {
	let className = IKebubMenuStyled.Style();
	return (
		<>
			<MenuDivWrapper component={children}>
				<div className={className.menu}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</MenuDivWrapper>
		</>
	);
};

import { FC } from 'react';
import CreateModal from '../CreateModal';
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
			<MenuDivWrapper component={children} modal={<CreateModal id={id} />}>
				<div className={className.menu}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</MenuDivWrapper>
		</>
	);
};

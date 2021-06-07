import { FC } from 'react';
import { IID } from '../../redux/actions/generalInfo';
import MenuDivWrapper from '../MenuDivWrapper';
import { IKebubMenuStyled } from './KebubMenu.styled';

namespace IKebubMenu {
	export type Props = IID & {
		children: React.ReactChild;
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

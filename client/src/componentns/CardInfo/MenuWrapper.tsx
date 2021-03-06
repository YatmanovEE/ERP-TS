import React, { FC } from 'react';
import { createClassName } from '../../modules/join';
import { ConnectedProps } from 'react-redux';
import { MenuStyled } from './MenuWrapper.Styled';
import { IID } from '../../redux/actions/generalInfo';

namespace IMenuWrapper {
	export type Props = {
		children: React.ReactChild;
	};
}

export const MenuWrapper: FC<IMenuWrapper.Props> = ({ children }) => {
	let className = MenuStyled.Style();
	let join = createClassName(className);
	return <div className={join('wrapper')}>{children}</div>;
};

export namespace IMenu {
	export type Props<T> = ConnectedProps<T> & IID;
}

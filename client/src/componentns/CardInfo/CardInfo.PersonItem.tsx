import { FC } from 'react';
import { ReactNode } from 'react';
import { connect } from 'react-redux';
import { createClassName } from '../../modules/join';
import { MenuPerson } from './CardInfo.MenuPerson';
import { PersonItemStyle } from './CardInfo.PresonItem.styled';

namespace IPersonItem {
	export type Props = IPersonItemComments.Props &
		IPersonItemDescription.Props & {
			post: string;
			comments: string;
		};
}
const PersonItem: FC<IPersonItem.Props> = ({ comments, ...props }) => {
	let className = PersonItemStyle.Style();
	let join = createClassName(className);
	return (
		<div className={join('flex', 'wrapper')}>
			<PersonItemDescription {...props}></PersonItemDescription>
			<PersonItemComments comments={comments}></PersonItemComments>
		</div>
	);
};

namespace IPersonItemComments {
	export type Props = {
		comments: string;
		children?: ReactNode;
	};
}

const PersonItemComments: FC<IPersonItemComments.Props> = ({ comments }) => {
	let className = PersonItemStyle.Comments();
	if (comments) {
		return <div className={className.comments}>{comments}</div>;
	} else {
		return <div className={className.comments}>Комментарии отсутствуют</div>;
	}
};

namespace IPersonItemDescription {
	export type Props = {
		post: string;
		photo: string;
		id: string;
		fullName: {
			firstName: string;
			lastName: string;
			surName: string;
		};
	};
}

const PersonItemDescription: FC<IPersonItemDescription.Props> = ({
	post,
	photo,
	fullName,
	id,
}) => {
	let className = PersonItemStyle.Description();
	let join = createClassName(className);
	return (
		<div className={join('wrapper', 'flex', 'wrapperJustify')}>
			<div className={join('flex')}>
				<img src={photo} alt="avatar" className={className.avatar} />
				<div className={className.personInfo}>
					<span className={'position'}>{post}</span>
					<span>
						{fullName.firstName} {fullName.lastName}
					</span>
				</div>
			</div>
			<MenuPerson id={id}></MenuPerson>
		</div>
	);
};

export default connect(null, null)(PersonItem);

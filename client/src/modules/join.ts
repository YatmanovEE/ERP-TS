export function joinWithoutDouble(...str: string[]) {
	return str
		.filter((strItem, index) => {
			return str.indexOf(strItem) === index;
		})
		.join(' ');
}

interface ICreateClassName {
	[key: string]: string;
}

export function createClassName(className: ICreateClassName) {
	return (...str: string[]) => {
		let list: string[] = [];
		str.forEach((item) => {
			if (str.includes(item)) {
				list.push(className[item]);
			}
		});
		return joinWithoutDouble(...list);
	};
}

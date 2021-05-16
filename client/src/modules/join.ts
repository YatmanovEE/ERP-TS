let globalName: ICreateClassName;

export function joinWithoutDouble(str: string[]): string {
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
			if (Object.keys(globalName).includes(item)) {
				list.push(globalName[item]);
			}
			if (str.includes(item)) {
				list.push(className[item]);
			}
			//TODO Решить как обрабатывать стили, которые совпадают по названию
			//NOTE Пока вставленные стили вставляются заранее, чем перечеркивают параметры глобальных стилей
		});
		return joinWithoutDouble(list);
	};
}

export function registryGlobalName(className: ICreateClassName): void {
	if (globalName) {
		console.error('Уже зарегистрирован один глобальный стиль');
	} else {
		globalName = className;
	}
}

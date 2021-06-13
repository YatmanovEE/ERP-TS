let globalName: ICreateClassName;

export function joinWithoutDouble(str: string[]): string {
	return str
		.filter((strItem, index) => {
			return str.indexOf(strItem) === index;
		})
		.join(' ');
}
//TODO Выдавать предупреждение, если стиль не обнаружен
//NOTE Пока стиль, который не обнаружен просто отбрасывается

interface ICreateClassName {
	[key: string]: string;
}

export function createClassName(className: ICreateClassName) {
	return (...str: string[]) => {
		let globalList: string[] = [];
		let classNameList: string[] = [];
		let strList: string[] = [];
		str.forEach((item) => {
			if (Object.keys(globalName).includes(item)) {
				globalList.push(globalName[item]);
			}
			if (str.includes(item)) {
				strList.push(className[item]);
			}
			if (Object.values(className).includes(item)) {
				classNameList.push(item);
			}

			//TODO Решить как обрабатывать стили, которые совпадают по названию
			//NOTE Пока вставленные стили вставляются заранее, чем перечеркивают параметры глобальных стилей
		});
		return joinWithoutDouble([...globalList, ...classNameList, ...strList]);
	};
}

export function registryGlobalName(
	className?: ICreateClassName
): ICreateClassName {
	if (className) {
		if (globalName) {
			console.error('Уже зарегистрирован один глобальный стиль');
		} else {
			globalName = className;
		}
	}
	return globalName;
}

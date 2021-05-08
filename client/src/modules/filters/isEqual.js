const { isConstructorDeclaration } = require('typescript');

function testItem(firstName, secondaryName, specialization, age, price) {
	this.firstName = firstName;
	this.secondaryName = secondaryName;
	this.specialization = specialization;
	this.age = age;
	this.price = price;
	this.fullName = {
		firstName: this.firstName,
		secondaryName: this.secondaryName,
	};
	this.full = {
		price: this.price,
		nextFull: { age: this.age },
	};
}

class Vertex {
	constructor(data) {
		this.data = data;
	}
}

class Graph {
	constructor(keyfield) {
		this.keyfield = keyfield;
		this.indexSet = new Set();
		this.entriesIndexMap = new Map();
	}
	#setIndex() {}
	insertEntries(data) {}
	insertData(data = []) {
        let map = this.getMap();
        let dataItem = data[0];
        if(Object)

    }
	getSet() {
		return this.indexSet;
	}
	getMap() {
		return this.entriesIndexMap;
	}
}

let testItemArr = [
	new testItem('Евгений', 'Ятманов', 'Программист', 24, 33000),
	new testItem('Евгений', 'Ятманов', 'Программист', 25, 35000),
];

console.log(new Graph('name').insertData(testItemArr).getMap());

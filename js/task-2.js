'use strict';

class Storage {
	#items;
	constructor(param) {
		this.#items = param;
	}
	getItems() {
		return this.#items;
	}
	addItem(newItem) {
		this.#items.push(newItem);
	}
	removeItem(itemToRemove) {
		this.#items = this.#items.filter((item) => item !== itemToRemove);
		// const index = this.#items.indexOf(itemToRemove);
		// if (index !== -1) {
		// 	this.#items.splice(index, 1);
		// }
	}
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator'], 1);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

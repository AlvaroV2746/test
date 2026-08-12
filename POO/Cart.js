// @ts-check

import { sumBy } from 'es-toolkit/compat';

// BEGIN (write your solution here)

class Cart {
    constructor() {
        this.art = [];
    }
    addItem(objItem, count) {
        this.art.push({ item: { name: objItem.name, price: objItem.price }, count: count });
    }
    getItems() {
        return this.art;
    }
    getCost() {
        const aux = this.art;
        let output = 0;
        for (const a of aux) {
            output += a.item.price * a.count;
            console.log(output);
        }

        return output;
    }
    getCount() {
        return sumBy(this.art, 'count');
    }
}


// END
const cart = new Cart();
cart.addItem({ name: 'car', price: 3 }, 5)
cart.addItem({ name: 'house', price: 10 }, 2);

console.log(cart.getItems());
// 2
cart.getCost(); // 35
cart.getItems();

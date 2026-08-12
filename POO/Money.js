// @ts-check
// BEGIN (write your solution here)
Money.prototype.getValue = function getValue() {
    return this.value;
}
Money.prototype.getCurrency = function getCurrency() {
    return this.currency
}
Money.prototype.exchangeTo = function exchangeTo(currency) {
    if (this.currency === currency) {
        return this;
    }
    this.currency = currency;
    if (currency === "usd") {
        this.value = this.value / 0.7;
    } else {
        this.value = this.value * 0.7;
    }
    return this;
}
Money.prototype.add = function add(objMoney) {
    const money1C = this.currency;
    const money1V = this.value;
    const money2C = objMoney.currency;
    const money2V = objMoney.value;


    if (money1C === money2C) {
        let tempV = money1V + money2V;
        const money3 = new Money(tempV, money1C);
        return money3;
    } else if (money1C === "usd") {
        const newMoney2V = money2V * 1.2;
        let tempV = money1V + newMoney2V;
        const money3 = new Money(tempV, money1C);
        return money3;
    } else if (money1C === "eur") {
        const newMoney2V = money2V * 0.7;
        let tempV = money1V + newMoney2V;
        const money3 = new Money(tempV, money1C);
        return money3;
    }

}
Money.prototype.format = function format(){
    const currencyFormated = this.currency.toUpperCase();
    return (this.value).toLocaleString(undefined, { style: 'currency', currency: currencyFormated });
    
}

function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
}

export default Money

const money1 = new Money(100);

console.log(money1.exchangeTo('eur').getValue());
console.log(money1.exchangeTo('usd').getValue());


// Devuelve el valor
// money1.getValue(); // 100
// money1.getCurrency(); // 'usd'

// Convierte a la moneda especificada y devuelve el nuevo valor
// money1.exchangeTo(('eur')).getValue(); // 70

// const money2 = new Money(200, 'eur');
// money2.getValue(); // 200
// const money3 = money2.add(money1);
// money3.getValue(); // 270
// const money4 = money3.add(money1);
// money4.getValue(); // 340

// money1.format(); // "$100.00"
// money2.format(); // "€200.00"

// const money5 = new Money(10000);
// money5.format(); // "$10,000.00"

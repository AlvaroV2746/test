

// BEGIN (write your solution here)
const make = (numer = 0, denom = 0) => ({
    numer,
    denom,
    
    // Setter para el numerador
    setNumer(newNumer) {
        this.numer = newNumer;
    },
    
    // Setter para el denominador
    setDenom(newDenom) {
        this.denom = newDenom;
    },
    
    // Getter para el numerador
    getNumer() {
        return this.numer;
    },
    
    // Getter para el denominador
    getDenom() {
        return this.denom;
    },
    
    // Conversión a cadena
    toString() {
        return `${this.numer}/${this.denom}`;
    },
    
    // Método add: suma el objeto actual (this) con el pasado por parámetro (other)
    add(other) {
        const a = this.getNumer();
        const b = this.getDenom();
        const c = other.getNumer();
        const d = other.getDenom();

        const newNumer = (a * d) + (b * c);
        const newDenom = b * d;

        return make(newNumer, newDenom);
    },
});
// END

const rat1 = make();
rat1.setNumer(3);
rat1.setDenom(8);
rat1.getNumer(); // 3
rat1.getDenom(); // 8

const rat2 = make(10, 3);

// Fórmula de suma: a / b + c / d = (a * d + b * c) / (b * d)
const rat3 = rat1.add(rat2);
console.log(rat3.toString());




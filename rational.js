// @ts-check

const getGcd = (a = Number, b= Number) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));


// BEGIN (write your solution here)
const makeRational = (num, den) => {
    let gcd = getGcd(num, den);
    return { num: num/gcd, den: den/gcd}

}
const getNumer = (rat) => {
    return rat.num;
}
const getDenom = (rat) => {
    return rat.den;

}
const add = (rat1, rat2) => {
    const num = (getNumer(rat1) * getDenom(rat2)) + (getNumer(rat2) * getDenom(rat1));
    const den = getDenom(rat1) * getDenom(rat2);

    return makeRational(num, den);

}
const sub = (rat1, rat2) => {
    const num = (getNumer(rat1) * getDenom(rat2)) - (getNumer(rat2) * getDenom(rat1));
    const den = getDenom(rat1) * getDenom(rat2);

    return makeRational(num, den);

}
// END

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

export {
    makeRational,
    getNumer,
    getDenom,
    add,
    sub,
    ratToString,
};

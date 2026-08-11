// @ts-check

const objects = [
    { name: 'Juan' },
    { name: 'Eva' },
];
each(objects, function callback() {
    this.name = this.name.split('').reverse().join('');
});

// BEGIN (write your solution here)
const each = (collection, callback) => {
    for (const item of collection) {
        callback.call(item);
    }
};
// END



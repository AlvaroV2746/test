export default class Truncater {
  static defaultOptions = {
    separator: '...',
    length: 200,
  };

  // BEGIN (write your solution here)
  constructor(options = {}) {
    this.options = {
      ...this.constructor.defaultOptions,
      ...options,
    };
  }
  truncate(text, methodOptions = {}) {
    const currentOptions = {
      ...this.options,
      ...methodOptions,
    };
    const { length, separator } = currentOptions;

    let textTruncate = text;
    if (textTruncate.length > length) {
      textTruncate = (text.slice(0, length) + separator);
    }
    return textTruncate;
  }
  // END

}

const truncater = new Truncater();

console.log(truncater.truncate('uno dos'));
// 'uno dos'
console.log(truncater.truncate('uno dos', { 'length': 6 }));
  // 'uno do...'

const truncater2 = new Truncater({ 'length': 6 });
console.log(truncater2.truncate('uno dos', { 'separator': '.' }));
  // 'uno do.'
truncater2.truncate('uno dos', { 'length': 3 }); // 'uno...'


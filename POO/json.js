// @ts-check
/* eslint-disable import/prefer-default-export */

export default class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ParseError';
  }
}
// BEGIN (write your solution here)
const parseJson = (json) => {
    try{
        return JSON.parse(json);
    }catch{

        throw new ParseError('Invalid JSON string');
    }
}
// END
const json = '{ "key": "value" }';
parseJson(json); // { key: 'value' }

const incorrectJson = '{ key": "value" }';
parseJson(incorrectJson); // => ParseError: Invalid JSON string

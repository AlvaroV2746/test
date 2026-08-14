// @ts-check

import pkg from 'lodash';
const { split } = pkg;

// BEGIN (write your solution here)
export default class Url {
    constructor(httpAddress) {
        this.httpAddress = httpAddress;
    }
    getScheme() {
        const outcome = new URL(this.httpAddress);
        return outcome.protocol.slice(0, -1);
    }
    getHostName() {
        const outcome = new URL(this.httpAddress);
        return outcome.hostname;
    }
    getQueryParams() {
        const outcome = new URL(this.httpAddress);
        const params = new URLSearchParams(outcome.search);
        return Object.fromEntries(params.entries());
    }
    getQueryParam(param, value = null) {
        const url = new URL(this.httpAddress);
        const params = new URLSearchParams(url.search);
        const outcome = Object.fromEntries(params.entries());
        if (param in outcome) {
            return outcome[param];
        }
        return value
    }
    equals(url) {
        const nameUrl = url.httpAddress;
        if (nameUrl === this.httpAddress) {
            return true
        }
        return false
    }
}
// END
const url = new Url('https://codica.la:80?key=value&key2=value2');
console.log(url.equals(new Url('http://codica.la:80?key=value&key2=value2')));


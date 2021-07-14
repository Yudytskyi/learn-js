'use strict';

console.log('Symbol.iterator');

class Arr {
  constructor(...args) {
    this.length = 0;
    for (const item of args) {
      this[this.length++] = item;
    }
    this.index = 0;
  }

  [Symbol.iterator] = () => ({
    next: () => ({
      value: this[this.index],
      done: this.index++ === this.length,
    }),
  });
}

const arr = new Arr(1, 2, 3, 5, 6, 7, 987, undefined, 245, 76, 'array');

for (let item of arr) {
  console.log(item);
}

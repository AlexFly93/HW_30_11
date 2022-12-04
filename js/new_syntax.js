"use strict";


class RangeValidator {
    /**
     * 
     * @param {'number'} from 
     * @param {'number'} to 
     */
  constructor(from = 0, to = 10) {
    this.from = from;
    this.to = to;
  }
  set from(from) {
    if (typeof from !== "number") {
      throw new TypeError("'from' must be a number");
    }
    this._from = from;
  }
  set to(to) {
    if (typeof to !== "number") {
      throw new TypeError("'to' must be a number");
    }
    this._to = to;
  }
  get from() {
    return this._from;
  }
  get to() {
    return this._to;
  }
  get range() {
    return [this.from, this.to];
  }
  validate(number) {
    if (number >= this.from && number <= this.to) {
      return true;
    }
    return false;
  }
}

const myRange = new RangeValidator(2, 22);
console.log(myRange.range);
console.log(myRange.validate(1));
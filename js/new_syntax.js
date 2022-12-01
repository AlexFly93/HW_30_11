"use strict";

// class UserClasses {
//   /**
//    *
//    * @param {string} fname
//    * @param {string} lname
//    * @param {number} age
//    */
//   constructor(fname, lname, age) {
//     if (typeof fname !== "string") {
//       throw new TypeError("fname must be a string");
//     }
//     if (typeof lname !== "string") {
//       throw new TypeError("lname must be a string");
//     }

//     this.fname = fname;
//     this._lname = _lname;
//     this._age = _age;
//   }
//   get age() {
//     return this._age;
//   }
//   set age(age) {
// if (typeof age !== "number") {
//   throw new TypeError("age must be a number");
// }
// if (age < 0 || age > 150) {
//   throw new RangeError("age must 0...150");
// }
// this._age = age;
//   }
//   get getFullName() {
//     return `${this.fname}${this._lname}`;
//   }

//   get isAdult() {
//     return this._age >= ADULT_AGE;
//   }
// }
// try {
//   const person3 = new UserClasses("Tim", "Rot", 58);
//   console.log(person3.fullName);
//   console.log(person3.isAdult);
// } catch (error) {
//   console.log(error);
// }

//TASK
// class Worker {
//   /**
//    *
//    * @param {'string'} fname
//    * @param {'string'} lname
//    * @param {'number'} salaryPD
//    * @param {'number'} workingDays
//    */
//   constructor(fname, lname, salaryPD, workingDays) {
//     this.fname = fname;
//     this.lname = lname;
//     this.salaryPD = salaryPD;
//     this.workingDays = workingDays;
//   }
//   get workingDays() {
//     return this._workingDays;
//   }
//   set workingDays(workingDays) {
//     if (typeof workingDays !== "number") {
//       throw new TypeError("working days must be a number");
//     }
//     if (workingDays < MIN_DAYS || workingDays > MAX_DAYS) {
//       throw new RangeError(
//         "working day shouldn't be less than 1 day, and over than 365"
//       );
//     }
//     this._workingDays = workingDays;
//   }

//   getSalary() {
//     return this.workingDays * this.salaryPD;
//   }
// }
// try {
//   const turner = new Worker("Alex", "Fly", 12, 3);
//     console.log(turner.getSalary());
//     console.log(turner.workingDays)
//     turner.workingDays = 10
//     console.log(turner.getSalary());
// } catch (error) {
//   console.log(error);
// }

// const test = {
//     _prop: 12,
//     set prop(value) {
//         this._prop = value
//      },
//     get prop() {
//         return this._prop
//     }
// }



class RangeValidator{
    constructor(from=0, to=10) {
        this.from = from
        this.to = to
    }
    get from() {
        return this._from
    }
    


    get to() {
        return this._to
    }



}
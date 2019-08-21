/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: When in global scope the value of "this" will default to the window/console object.
* 2. Implicit Binding: The most common binding, when the function is called whatever is to the left of the dot is what the "this" keyword refers to.
* 3. New Binding: When a constructor function is used, "this" refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding: When the call or apply method is used, "this" is explicit.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// 'use strict';
// function tiger() {
//     console.log(this.roar);
// }
// const roar = 'Rooaarr';
// tiger();

// Principle 2

// code example for Implicit Binding
// let myTiger = {
//     name: 'Ralph',
//     roar: 'rooaarr',
//     tiger: function() {
//         console.log(this.roar);
//     }
// }
// myTiger.tiger();

// Principle 3

// code example for New Binding
// function Tiger(sleeping) {
//     this.thing = sleeping;
// }
// let myTiger = new Tiger('Sweet big cat dreams');
// console.log(myTiger.thing);

// Principle 4

// code example for Explicit Binding
// function tiger() {
//     console.log(this.roar);
// }
// let myTiger = {
//     name: 'Ralph',
//     roar: 'Rooaarr'
// }
// tiger.call(myTiger);

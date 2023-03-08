"use strict";
//3 types to write a function in t
//1. Named function
//here c is an optional parameter
function add(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(add(2, 3));
console.log(add(2, 3, 6));
//2. Arrow function
//here c is a required paramter, if nothing is passed default value is used
const sub = (a, b, c = 10) => a - b - c;
console.log(sub(3, 5));
console.log(sub(3, 5, 6));
//3. Function Expression 
//here c is a rest parameter
const mul = function (a, b, ...c) {
    return a * b * c.reduce((num, ans) => num + ans, 1);
};
console.log(mul(4, 5));
console.log(mul(4, 5, 6, 7, 8, 9));
//generic function
function genericFunc(items) {
    return new Array().concat(items);
}
let res = genericFunc(["a", "b", "c"]);
let res2 = genericFunc([1, 2, 3]);
res2 = genericFunc([1, 2, 3]);
console.log(res);
console.log(res2);

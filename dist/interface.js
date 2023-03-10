"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { id: 1, name: "joe", email: "joe@gmail.com" };
console.log(user);
let emp1 = { id: 1, name: "joe", email: "", salary: 1000 };
console.log(emp1);
//object destructuring
let { id: eid, name: Fname } = { id: 1, name: "joe", email: "joe@gmail.com" };
console.log(eid);
console.log(Fname);
//array destructuring
let [user1, user2] = [
    { id: 1, name: "joe", email: "" },
    { id: 2, name: "joe2", email: "" },
    { id: 3, name: "joe3", email: "" },
];
console.log(user1); //first element in the array
console.log(user2); //second element in the array
let [user3, user4, ...restUsers] = [
    { id: 1, name: "joe", email: "" },
    { id: 2, name: "joe2", email: "" },
    { id: 3, name: "joe3", email: "" },
    { id: 3, name: "joe4", email: "" },
    { id: 3, name: "joe5", email: "" },
];
console.log(user3); //first element in the array
console.log(user4); //second element in the array
console.log(restUsers); //rets of elements in the array

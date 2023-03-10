"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    //private id:number; //this will make the variable private and can only be accessed within the class
    //#id:number; //this will make the variable private and can only be accessed within the class
    //public id:number; //this will make the variable public and can be accessed outside the class
    //id:
    //protected id:number; //this will make the variable protected and can be accessed only within the class and its child classes
    //protected addr:string this will make the variable protected and can be accessed only within the class and its child classes
    //constructor(){}  You can only have either default constructor or parameterized constructor, not both
    constructor(id, name, addr) {
        this.id = id;
        this.name = name;
        this.addr = addr;
    }
    get empId() {
        return this.id;
    }
    set empId(id) {
        this.id = id;
    }
    getNameAndAddr() {
        //return this.name+ " " + this.addr //this is old way of doing it and it might be buggy at times 
        return `${this.name} lives in ${this.addr}`;
    }
    //one way of access to the interface
    // Login():User{
    //     return {id:3,name:"elsie",email:"else@yahoo.com"}
    // }
    //second
    Login() {
        return { id: 3, name: "elsie", email: "else@yahoo.com" };
    }
}
class Manager extends Employee {
    constructor(id, name, addr) {
        super(id, name, addr);
    }
    getNameAndAddr() {
        return `${this.name} lives in ${this.addr} and is a manager`;
    }
}
// let kaus = new Employee()
// console.log(kaus)
let Kaus = new Employee(1, "Kaustubh", "Nasik");
console.log(Kaus);
//console.log(Kaus.id)
Kaus.empId = 5;
console.log(Kaus.empId);
console.log(Kaus.getNameAndAddr());
console.log(Kaus.Login());
let Harry = new Manager(2, "Harry", "Mumbai");
console.log(Harry.getNameAndAddr());

//when you compile datatype.ts a datatype.js file is created 
let fname = "john"

/*below line will give error because fname is now assigned type fo string and this is an int.
This is the issue with javascript. you can assign any data type bt after a point it becomes difficult 
as say you may have some function for only string datatype but the typae changed to number */
//fname=10 

//Datatypes

//1. String 
let lname : string
lname = "Harry"
lname.toLocaleUpperCase()
console.log(lname)

//2. Number
let page : number
page = 10
page=10.55 //you can have decimal here too

let result = 25 //automatically assign number type to result

//casting
let age = parseInt("30")
console.log(age)

//3. boolean
let flag : boolean;
//console.log(flag) // throws error bcause no value is assigned and the config is "Strict" in tsconfig.json, 
//will log "undefined" if you try to run it

flag = false;
console.log(flag)

//4. array
let list = []
list =[1,2,3,4,5]
console.log(list)
//OR
let emplist : string[];
let emplist2 : Array<string> //generics

emplist = ["a", "b", "c"]
emplist2 = ["a2", "b2", "c2"]
console.log(emplist)
console.log(emplist2)

let ans1 = list.filter((num)=> num%2==0)
let ans2= emplist.find((emp)=>emp=="b")

console.log(ans1)
console.log(ans2)

let sum = list.reduce((num, ans) => num+ans)
console.log(sum)

//5. enum
// enum Color {Red, Green, Blue} // this will create multiple lines of code , and msotly is not used in prod
// let c: Color = Color.Green;

//use const keyword to avoild multiple lines of code
const enum Color {Red, Green, Blue}
let c: Color = Color.Green;

//6. tuple
let swapNum : [num1:number, num2:number]

function swapNumb(num1: number, num2: number) : [number, number]{
    return [num2, num1]
}
swapNum = swapNumb(10,20)
console.log(swapNum[0])
console.log(swapNum[1])

//7. any
let dep: any
dep ="IT"
dep=10
//8. void

//9. never
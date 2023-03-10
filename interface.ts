//use export keyword to export the interface
export interface User {
    id: number;
    name: string;
    email?: string;  //optional parameter
    age?: number;    //optional parameter
}

let user : User ={id:1,name:"joe",email:"joe@gmail.com"}
console.log(user)

//extending an interface
interface Employees extends User{
    salary: number;
}

let emp1: Employees = {id:1,name:"joe",email:"",salary:1000}
console.log(emp1)

export interface Login {
    Login(): User;
}


//object destructuring
let {id:eid,name:Fname}:User = {id:1,name:"joe",email:"joe@gmail.com"}
console.log(eid)
console.log(Fname)

//array destructuring
let [user1, user2]:User[] =[
    {id:1,name:"joe",email:""},
    {id:2,name:"joe2",email:""},
    {id:3,name:"joe3",email:""},
]

console.log(user1) //first element in the array
console.log(user2) //second element in the array

let [user3, user4, ...restUsers]:User[] =[
    {id:1,name:"joe",email:""},
    {id:2,name:"joe2",email:""},
    {id:3,name:"joe3",email:""},
    {id:3,name:"joe4",email:""},
    {id:3,name:"joe5",email:""},

]

console.log(user3) //first element in the array
console.log(user4) //second element in the array
console.log(restUsers)  //rets of elements in the array




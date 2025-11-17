### Question 2: Explain the difference between any, unknown, never types in TypeScript

#### any :

any disables type checking completely from code. we can assign any value to the value and perform own operation without type checking error.
code :
const value:any = 21;
value = "Soyab"

#### unknown :

unknown accepts any value but require tpye checking before use, it is safer option than any
code :
let value: unknown = "Soyab";
value.toUpperCase(); // Will Show error for type checking
// correct approch
if(typeof value === "string"){
value.toUpperCase();
}

#### never :

never is like impossible type, it represents that never occur. it is used where it will not return anything
code :
const throwError = ():never =>{
throw new Error("No Return");
}

### Question 3: Provide an example of using union and intersection types in TypeScript.

#### Union Type :

type ID = string | number ;
function printID(id:ID){
console.log("ID:",id);
}
printID(143);
printID("BCA4230001");

#### Intersection Type :

interface Person {
name:string;
age:number;
}
interface Employee{
employeeId:string;
department:string;
}
type Staff = Person & Employee;
const employee:Staff = {
name: "Soyab",
age:21,
employeeID: 44321,
department: "IT FrontEnd",
};

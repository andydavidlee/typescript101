"use strict";
// // tsc --init // to create a tsconfig.json file
// // make changes to tsconfig.json
// // create src folder then app.ts file
// // tsc or tsc -w to initialise.
// // console.log('Hello from ts');
// // console.log('Hello from ts again');
// // // String
// // let myString:string; // Declare what variable type it is
// // myString = 'This is a string';
// // console.log(myString);
// // // Number
// // // Two ways to write a variable
// // // let myNumber:number= 2; // first type
// // let myNumber:number; // second type
// // // myNumber= 22; 
// // // console.log(myNumber);
// // myNumber= 4+4; 
// // console.log(myNumber);
// // // Boolean
// // let myBool: boolean;
// // myBool= true;
// // console.log(myBool);
// // // concatenate String
// // let myStrings: string;
// // myStrings= 'Hello'+ ' '+'from Dip - IT';
// // console.log(myStrings);
// // // function return as a string
// // let myStringFun: string;
// // myStringFun= 'Hello'.slice(0, 3);
// // console.log(myStringFun);
// // // Any
// // let myVar:any;
// // myVar=5;
// // console.log(myVar);
// // // Array
// // // with strings
// // let strArray:string[];
// // strArray=['Summer', 'Winter', 'Autumn', 'Spring'];
// // console.log(strArray);
// // // with numbers
// let numArray: number[];
// numArray=[1, 2, 3, 4];
// console.log(numArray);
// // // with boolean
// // let boolArray: boolean[];
// // boolArray= [true, false, true];
// // console.log(boolArray);
// // Array - Second Method
// // String type
// let strArray:Array<string>
// strArray = ['Summer', 'Winter'];
// console.log(strArray);
// // Number type
// let numArray:Array<number>;
// numArray = [1, 2, 3, 4];
// console.log(numArray);
// // Boolean type
// let boolArray:Array<boolean>;
// boolArray = [true, true, true];
// console.log(boolArray);
// // Tuple
// let strTuple: [string, number];
// strTuple = ['Hello', 1];
// console.log(strTuple);
// // function
// function getSum(num1:number, num2:number):number{
//     return num1+num2;
// }
// console.log(getSum(1, 2));
// // function that accepts any type of variable and returns a number.
// // convert string to number - parseInt(num1)
// function theNewSum(num1:any, string1:any):number{
//     if(typeof num1 =='string'){
//         num1=parseInt(num1);
//     }
//     if(typeof string1 =='string'){
//         string1=parseInt(string1);
//     }
//     return num1+string1
// }
// console.log(theNewSum(1, '14'));
// // optional parameter
// function getName(firstName:string, lastName:string): string {
//     if (lastName == undefined) {
//         return firstName;
//     }
//     return firstName+ ' ' +lastName;
// }
// console.log(getName('John', 'Doe'))
// // Classes
// class User{
//     name:string;
//     email:string;
//     age:number;
//     constructor(name:string,email:string,age:number){
//         this.name=name;
//         this.email=email;
//         this.age=age;
//         console.log('User created: '+ this.name);
//     }
//     register(){
//         console.log(this.name+' is registered!')
//     }
// }
// let john=new User('Mary Smith', 'mary@yahoo.com', 34);
// console.log(john.age);
// john.register();
// // Inheritence
// class Member extends User {
//     id: number;
//     constructor(id: number, name:string,email:string,age:number){
//         super(name, email, age);
//         this.id = id;
//     }
// }
// // Two options to write this out.
// // let mike: User = new Member(1, 'Mike', 'mike@email.com', 54);
// let mike = new Member(1, 'Mike', 'mike@email.com', 54);
// var carName:string[][] = [['BMW', 'Volkswagon', 'Mazda'],['Toyota', 'Ford', 'Nissan']]
// console.log(carName[0][0]) 
// console.log(carName[0][1]) 
// console.log(carName[0][2]) 
// console.log(carName[1][0]) 
// console.log(carName[1][1]) 
// console.log(carName[1][2])
// var modelName:string = "Toyota";
// console.log(modelName)
let numArray;
let recursiveFunction = function (numArray, x, start, end) {
    // Base Condition
    if (start > end)
        return false;
    // Find the middle index
    let mid = Math.floor((start + end) / 2);
    // Compare mid with given key x
    if (numArray[mid] === x)
        return true;
    // If element at mid is greater than x,
    // search in the left half of mid
    if (numArray[mid] > x)
        return recursiveFunction(numArray, x, start, mid - 1);
    else
        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(numArray, x, mid + 1, end);
};
numArray = [14, 26, 53, 4, 19, 27, 87, 55, 66, 20];
console.log(numArray);
numArray.splice(0, 4);
console.log(numArray);
numArray.sort(function (a, b) { return a - b; });
console.log(numArray);
// Driver code
let x = 55;
if (recursiveFunction(numArray, x, 0, numArray.length - 1))
    document.write("Element found!<br>");
else
    document.write("Element not found!<br>");
x = 6;
if (recursiveFunction(numArray, x, 0, numArray.length - 1))
    document.write("Element found!<br>");
else
    document.write("Element not found!<br>");
// let numArray: number[]; 
// numArray=[14, 26, 53, 4, 19, 27, 87, 55, 66, 20]; 
// console.log(numArray); 
// numArray.splice(0, 2); 
// console.log(numArray); 
// numArray.sort(function(a, b){return a - b}); 
// console.log(numArray); 
// let numArray: number[]; 
// let recursiveFunction: any = function (numArray, x, start, end) { 
// // Base Condition 
// if (start > end) return false; 
// // Find the middle index 
// let mid=Math.floor((start + end)/2); 
// // Compare mid with given key x 
// if (numArray[mid]===x) return true; 
// // If element at mid is greater than x, 
// // search in the left half of mid 
// if(numArray[mid] > x)  
// return recursiveFunction(numArray, x, start, mid-1); 
// else 
// // If element at mid is smaller than x, 
// // search in the right half of mid 
// return recursiveFunction(numArray, x, mid+1, end); 
// } 
// numArray=[14, 26, 53, 4, 19, 27, 87, 55, 66, 20]; 
// console.log(numArray); 
// numArray.splice(0, 4); 
// console.log(numArray); 
// numArray.sort(function(a, b){return a - b}); 
// console.log(numArray); 
// // Driver code 
// let x: number = 55; 
// if (recursiveFunction(numArray, x, 0, numArray.length-1)) 
// document.write("Element found!<br>"); 
// else document.write("Element not found!<br>"); 
// x = 6; 
// if (recursiveFunction(numArray, x, 0, numArray.length-1)) 
// document.write("Element found!<br>"); 
// else document.write("Element not found!<br>"); 

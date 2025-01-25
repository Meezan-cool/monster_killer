// 75
// Conditional Code Execution: Use if for conditions in functions.
// Boolean Data Types: True/false logic.
// Boolean Operators:
// == / !=: Value equality/inequality.
// === / !==: Value & type equality/inequality.
// > / <: Greater/less than.
// >= / <=: Greater/less than or equal.
// !: NOT true.


// 76
// Use directly in if (e.g., if (isLoggedIn)), no need for === true.
// ! Operator: Inverts boolean values (e.g., if (!isLoggedIn)).
// String Comparisons:
// Use > or < for lexicographical ordering based on Unicode.
// Rules:
// Compare characters left to right.
// Lowercase > Uppercase.
// Example: 'ab' > 'aa' (true), 'a' > 'B' (true), 'a' > 'b' (false).

// 77
// In this video he shows if & else use case and executed code according to the conditions

// 78
// In this video he use else if for adding more conditions
// let userCategory; // should be 'child', 'adult' or 'senior'
// let age = 30;
// function solve(){
//     if(age < 18){
//         userCategory = 'child'
//     }else if(age >= 18 && age < 65){
//         userCategory = 'adult'
//     } else{
//         userCategory = 'senior'
//     }
// }

// 79
// in this video he shows strange behaviour of comparing two objects with similer structure 
// const person1 = {name: "Meezan"};
// const person2 = {name: "Meezan"};
// const person3 = person1
// person1 === person2  // -> false
// person3 === person1  // -> true
// person1.name === person2.name // -> true

// 80
// in this video he shows the use of && / || Operator 
// Combining Conditions - &&(AND Operator) ||(OR Operator)
// &&(AND Operator) -> Evaluted together (yields true if each condition yields true)
// ||(AND Operator) -> Evaluted as an alternative (yields true if Part 1 OR Part 2 yields true)
// We can use parentheses to control what's evaluated together!

// 81 - Understanding Operator Precedence
// in this video we see how multiple operators expressions are solved first
// 1- Expression 
// 5 != 5 && 3 > 6 || 10 > 5
// False  && False || True
// False  || True
// True
// 2- Expression
// 3 + 2 * 5  Output -> 13
// (3 + 2) * 5  Output -> 25
// https://www.w3schools.com/js/js_precedence.asp

// 82 - Beyond true/false: "Truthy" and "Falsy" Values
// in this video we see how if reacts on different values e.g.
// 0 -> false
// Any Other number(inc. Negative numbers) -> true
// ""(empty string) -> false
// Any other non-empty string (inc. "false") -> true
// {},[] & all other objects or arrays -> true
// null, undefined, NaN -> false

// 83 - Coercion vs Conversion
// Conversion: Done intentionally and explicitly by the developer.
// Coercion: Happens implicitly when JavaScript tries to handle mixed types

// 84 - 
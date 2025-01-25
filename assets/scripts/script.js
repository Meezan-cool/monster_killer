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

// 84 - Setting Up a Bigger Example Project (The Monster Killer)
// in this video he setup a new project

// 85 - Monster Killer

// Variable
const ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 15;
const HEAL_VALUE = 20;
const SUPER_ATTACK_VALUE = 30;
const RESET_TIME = 1000;
const MODE_ATTACK = 'ATTACK'
const MODE_SUPER_ATTACK = 'SUPER'
let chosenMaxLife = 100;

// DOM 
let attackBtn = document.getElementById('attack_btn');
let superBtn = document.getElementById('super_btn');
let resetBtn = document.getElementById('reset_btn');
let healBtn = document.getElementById('heal_btn');
let monsterHealth = document.getElementById('monster_health');
let playerHealth = document.getElementById('player_health'); 
let characterBox = document.querySelector('.player_name')

let playerName = prompt('Enter Player Name');

if(playerName ){
    characterBox.textContent = playerName
}

function randomNumGiver(value){
    return Math.floor(Math.random() * value)
}

function messageGeneratorWithReset(message){
    alert(message);
    setTimeout(()=>resetHealth(),RESET_TIME);
}

function endRound(){
    if(monsterHealth.value <= 0 && playerHealth.value > 0){
        messageGeneratorWithReset('You Won!');
    } else if(playerHealth.value <= 0 && monsterHealth.value > 0 ){
        messageGeneratorWithReset('You Lost!');
    } else if(playerHealth.value <= 0 && monsterHealth.value <= 0){
        messageGeneratorWithReset('You have a Draw!');
    }
}

// Attack Mode 
function attackMonster(mode){
    let maxDamage;
    if(mode === MODE_ATTACK){
        maxDamage = randomNumGiver(ATTACK_VALUE);
    } else {
        maxDamage = randomNumGiver(SUPER_ATTACK_VALUE);
    }
    monsterHealth.value -= maxDamage;
    playerHealth.value -= randomNumGiver(MONSTER_ATTACK_VALUE);
    endRound();
}

function attackHandler(){
    attackMonster(MODE_ATTACK);
}

function superHandler(){
    attackMonster(MODE_SUPER_ATTACK);
}

function healHandler(){
    if(playerHealth.value === chosenMaxLife) 
        return alert('Health is Full')
    playerHealth.value += randomNumGiver(HEAL_VALUE)
}

function resetHealth(){
    monsterHealth.value = chosenMaxLife;
    playerHealth.value = chosenMaxLife;
}

// Event Listener
attackBtn.addEventListener('click', attackHandler);
superBtn.addEventListener('click', superHandler);
resetBtn.addEventListener('click', resetHealth);
healBtn.addEventListener('click', healHandler);
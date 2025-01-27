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

// 94 - Introducing to ternary Operator
// if statement return no values!
// const userName = isLogin ? 'Max' : null
// if condition is true it will show Max and if condition is false then it will show null

// 95 - 
// if else are statements and the ternary use cases are expressions 

// 96 - 
// 

// Variable
const ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 15;
const HEAL_VALUE = 20;
const SUPER_ATTACK_VALUE = 30;
const RESET_TIME = 1000;
let chosenMaxLife = 100;
let lastLoggedEntry;
const MODE_ATTACK = 'ATTACK'
const MODE_SUPER_ATTACK = 'SUPER'
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';
let battleLog = [];

// DOM 
let attackBtn = document.getElementById('attack_btn');
let superBtn = document.getElementById('super_btn');
let resetBtn = document.getElementById('reset_btn');
let healBtn = document.getElementById('heal_btn');
let monsterHealth = document.getElementById('monster_health');
let playerHealth = document.getElementById('player_health'); 
let characterBox = document.querySelector('.player_name')
let battleLogBox = document.querySelector('.battle_log')


let playerName = prompt('Enter Player Name');

if(playerName ){
    characterBox.textContent = playerName
}

function randomNumGiver(value){
    return Math.floor(Math.random() * value)
}

function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry = {
      event: ev,
      value: val,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
    if (ev === LOG_EVENT_PLAYER_ATTACK) {
      logEntry.target = 'MONSTER';
    } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
      logEntry = {
        event: ev,
        value: val,
        target: 'MONSTER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
      };
    } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
      logEntry = {
        event: ev,
        value: val,
        target: 'PLAYER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
      };
    } else if (ev === LOG_EVENT_PLAYER_HEAL) {
      logEntry = {
        event: ev,
        value: val,
        target: 'PLAYER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
      };
    } else if (ev === LOG_EVENT_GAME_OVER) {
      logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
      };
    }
  battleLog.push(logEntry);
}
  

function messageGeneratorWithReset(message, battleMessage){
    alert(message);
    writeToLog(
        LOG_EVENT_GAME_OVER,
        battleMessage,
        monsterHealth.value,
        playerHealth.value
      );
    setTimeout(()=>resetHealth(),RESET_TIME);
}

function endRound(){
    const playerDamage = randomNumGiver(MONSTER_ATTACK_VALUE)
    playerHealth.value -= playerDamage;
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK,
        playerDamage,
        monsterHealth.value,
        playerHealth.value
      );
      if(monsterHealth.value <= 0 && playerHealth.value > 0){
          messageGeneratorWithReset('You Won!','PLAYER WON');
        } else if(playerHealth.value <= 0 && monsterHealth.value > 0 ){
            messageGeneratorWithReset('You Lost!','MONSTER WON');
        } else if(playerHealth.value <= 0 && monsterHealth.value <= 0){
        messageGeneratorWithReset('You have a Draw!','A Draw');
    }
}

// Attack Mode 
function attackMonster(mode){
    const maxDamage = mode === MODE_ATTACK ? randomNumGiver(ATTACK_VALUE) : randomNumGiver(SUPER_ATTACK_VALUE);
    const logEvent =  mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK; 
    monsterHealth.value -= maxDamage;
    writeToLog(
        logEvent,
        maxDamage,
        monsterHealth.value,
        playerHealth.value
      );
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
    const healValue = randomNumGiver(HEAL_VALUE)
    playerHealth.value += healValue;
    writeToLog(
        LOG_EVENT_PLAYER_HEAL,
        healValue,
        monsterHealth.value,
        playerHealth.value
      );
    endRound()
}

function resetHealth(){
    monsterHealth.value = chosenMaxLife;
    playerHealth.value = chosenMaxLife;
    // battleLog = [];
}

function printBattleLog(){
    // for(let i=0;i<battleLog.length;i++){
    //     console.log(battleLog[i]);
    // }
    // let j=3;
    // While Loop
    // while(j<3){
    //     console.log(`${j}`);
    //     j++;
    // }
    // Do While
    // do{
    //     console.log(j);
    //     j++
    // } while(j<3);

    let i = 0;
    for(let logEntry of battleLog){
        if(!lastLoggedEntry && lastLoggedEntry !== 0 || lastLoggedEntry < i){
            console.log("Check",lastLoggedEntry, i)
            console.log(`#${i}`);
            for(let key in logEntry){
                console.log(`${key}: ${logEntry[key]}`)
            }
            lastLoggedEntry = i;
            break
        }
        i++;
    }
}

// Event Listener
attackBtn.addEventListener('click', attackHandler);
superBtn.addEventListener('click', superHandler);
resetBtn.addEventListener('click', resetHealth);
healBtn.addEventListener('click', healHandler);
battleLogBox.addEventListener('click', printBattleLog);
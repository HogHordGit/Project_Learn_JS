"use strict";

let num = 10;

function showFirstMessage(text) {
    console.log(text);
    let num = 20;
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(10, 20));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};

logger();

const calc = (a, b) => {return a + b};

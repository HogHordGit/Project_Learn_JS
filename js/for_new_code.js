"use strict";

//0.32----------------------Динамическая типизация

//To String--------------------------------------------
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) Конкатинация

console.log(typeof(null + ""));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + "px";

// To Number--------------------------------------------
// 1)
console.log(typeof(Number("5")));

// 2)
console.log(typeof(+"5"));

// 3)
console.log(typeof(parseInt("5", 10)));

let answer = +prompt("Hello", "");

// To boolean--------------------------------------------

// 0, null, undefined, "", NaN;

// 1)
let switcher = null;

if (switcher){
    console.log("Working...");
}

// 2)
console.log(typeof(Boolean("5")));

// 3)
console.log(typeof(!!"444"));



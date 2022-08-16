'use strict';
// Оператор нулевого слияния

const zibert = null;
const zib = undefined;

if (zibert ?? zib) {
    console.log("Да");
} else {
    console.log("Нет");
}

// Оператор опциональной цепочки

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// if(block) {
//     console.log(block.textContent);
// }

// block?.textContent = "123";

// console.log(1 + 2);

const userData = {
    name: "Ivan",
    age: null,
    say: function() {
        console.log("Hello");
    }
};

userData.say();
userData.hey?.();

if (!userData.hey?.()) {
    console.log("You're doing wrong!");
}


// if(userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

console.log(userData.skills?.js);
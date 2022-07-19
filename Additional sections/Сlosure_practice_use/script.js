"use strict";

//Сокращенный
// const createCounter = () => {
//     let counter = 0;

//     return () => {
//         return counter++;
//     };
// };  

function createCounter() {
    let counter = 1;

    const myFunction = function() {
        return counter++;
    };

    return myFunction;
}

const counter1 = createCounter();
const counter2 = createCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());

// ---------------------------------------

const createToggler = () => {
    let toggle = false;
    return () => {
        toggle = !toggle;
        return toggle;
    };
};

const toggle1 = createToggler();
const toggle2 = createToggler();

// console.log(toggle1());
// console.log(toggle1());
// console.log(toggle1());
// console.log(toggle2());

// ----------------------------------------

const createValidator = (regExp) => {
    return (value) => {
        return regExp.test(value);
    };
};

const nameValidator = createValidator(/\w+/gi);
const phoneValidator = createValidator(/\d+/gi);
const cardValidator = createValidator(/\d{4}\s\d{4}\s\d{4}\s\d{4}\s/gi);

// console.log(nameValidator("Vlad"));
// console.log(phoneValidator("1234"));
// console.log(cardValidator("1111 2222 3333 4444"));

//-------------------------------------------

const createEncoder = (number) => {
    return (value) => {
        return value.split("").map((symbol) => {
            return String.fromCharCode(symbol.charCodeAt(0) * number);
        }).join("");
    };
};

const encoder7 = createEncoder(7);
const encoder9 = createEncoder(9);

// console.log(encoder7("Vova"));
// console.log(encoder9("Vova"));

'use strict';
// 0.27 Массивы
// const arr = [2, 13, 26, 8, 5];

// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let key of arr) {
//     console.log(key);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

// -------------------------------------------------------------------------

// 0.29 Копирование объектов

// let a = 5;
// let b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Ссылка на объект

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);


// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();

// console.log(newArray);

// newArray[1] = "aa";

// const oldArray = ["a", "b", "c"];
// const newArray = Array.from(oldArray);


// // console.log(oldArray);
// // console.log(newArray);

// const video = ["youtube", "vimeo", "rutube"];
// const blogs = ["wordpress", "livejournal", "blogger"];
// const internet = [...video, ...blogs, "vk", "facebook"];

// // console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newArrayd = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObject = {...q};

// console.log(newObject);

//0.30----------------------

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const john = Object.create(soldier); //создаём объект на основе прототипа

// const john = {
//     health: 100
// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

// john.sayHello();

//0.32----------------------Динамическая типизация

//To String--------------------------------------------
// 1)
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// // 2) Конкатинация

// console.log(typeof(null + ""));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + "px";

// // To Number--------------------------------------------
// // 1)
// console.log(typeof(Number("5")));

// // 2)
// console.log(typeof(+"5"));

// // 3)
// console.log(typeof(parseInt("5", 10)));

// let answer = +prompt("Hello", "");

// // To boolean--------------------------------------------

// // 0, null, undefined, "", NaN;

// // 1)
// let switcher = null;

// if (switcher){
//     console.log("Working...");
// }

// // 2)
// console.log(typeof(Boolean("5")));

// // 3)
// console.log(typeof(!!"444"));

//0.34----------------------Замыкание функции

// let number = 5; debugger

// function logNumber() {
//     console.log(number); debugger
// }

// number = 6;

// logNumber(); debugger

// number = 8;

// logNumber(); debugger

// function createCounter() {
//     let counter = 0;

//     const myFunction = function() {debugger
//         counter = counter + 1; debugger
//         return counter;debugger
//     };

//     return myFunction;
// }
// debugger
// const increment = createCounter();debugger
// const c1 = increment();debugger
// const c2 = increment();debugger
// const c3 = increment();debugger

// console.log(c1, c2, c3);

// {
//     let msg = "Hello";
// }

// console.log(msg);

// for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//         let num = 3;
//     }

//     console.log(num);
// }

//0.34----------------------Замыкание функции
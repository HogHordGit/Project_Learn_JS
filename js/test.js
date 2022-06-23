"use strict";

const arr = [1, 2, 3, 4, 5, 6];
const num = 2;

function divisibleBy(numbers, div) {
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % num == 0) {
            arrNew.push(arr[i]);
        }
    }
    return arrNew;
}

console.log(divisibleBy(arr, num));
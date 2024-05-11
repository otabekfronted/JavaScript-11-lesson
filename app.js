"use strict";

// masala 1
// let arr = "34567"
//     .split("")
//     .reverse()
//     .map((item) => {
//         return Number(item);
//     });
// console.log(arr);

// masala 2
// Tenglik ( == ) operatori ikki operandning teng yoki teng emasligini tekshiradi va mantiqiy natijani qaytaradi . Qattiq tenglik operatoridan farqli o'laroq, u har xil turdagi operandlarni o'zgartirishga va solishtirishga harakat qiladi.

// let a = 5;
// let b = "5";
// console.log(a == b);

// === yordamida qat'iy tenglik
// Qattiq tenglik tenglik uchun ikkita qiymatni solishtiradi . Hech bir qiymat solishtirishdan oldin bilvosita boshqa qiymatga aylantirilmaydi. Agar qiymatlar turli xil bo'lsa, qiymatlar teng emas deb hisoblanadi.

// let a = 5;
// let b = "5";
// console.log(a === b);

// masala 3
// let son = 5;
// let result = [];
// function recrusive() {
//     result.unshift(son);
//     son--;
//     if (1 <= son) {
//         recrusive();
//     }
//     return result;
// }
// console.log(recrusive(son));

// masala 4
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let even = numbers
//     .filter((number) => number % 2 == 0)
//     .reduce((acc, curValu) => {
//         acc += curValu;
//         return acc;
//     }, 0);
// let odd = numbers
//     .filter((number) => number % 2 == 1)
//     .reduce((acc, curValu) => {
//         acc += curValu;
//         return acc;
//     }, 0);
// console.log([even, odd]);

// masala 5
// let p =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus numquam accusantium facere !!explicabo eveniet minus.";

// console.log(p.split("!").join(""));

// masala 6
// function yigindi(arr1, arr2) {
//     let totalSum = 0;
//     let result = arr1.map((a) => {
//         totalSum += a;
//     });
//     let result2 = arr2.map((b) => {
//         totalSum += b;
//     });
//     return totalSum;
// }

// let arr1 = [1, 2, 3, 7, 8];
// let arr2 = [4, 5, 6, 9];
// console.log(yigindi(arr1, arr2));

// masala 7
// function word(letter) {
//     let word = letter.split("");
//     word.pop();
//     word.shift();
//     return word;
// }

// console.log(word("Hello World").join(""));

// masala 8
// const arr = [4, 45, 6, 72, 8];
// const newArr = [];
// arr.forEach((item) => {
//     newArr.unshift(item);
// });
// console.log(newArr);
// masala 9
// let string = "130234000";
// let counter = 0;
// const answer = string.split("").map((num) => Number(num));
// for (let i = answer.length - 1; i > 0; i--) {
//     if (answer[i] != 0) {
//         break;
//     }
//     counter++;
// }
// console.log(string.slice(0, 6));

// masala 10
const arr = [5, 8, 299, 4, 7];
let d = Math.min(...arr);
console.log(d ** 4);

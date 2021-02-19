"use strict";

//ex.1 Create the loop for count numbers from 1 to n included in this interval.

// const n = 6;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log('Result = ' + sum);

//ex.2_a Create a loop that will counts the product of all  numbers from m to n, inclusive.

// const m = 5;
// const n = 4;
// function factorial(value) {
//         let i = 1;
//         let valueFactorial = 1;
//         while (i <= value) {
//             valueFactorial *= i;
//             i++;
//             console.log('Result factorial from the number ' + value + ' ' + valueFactorial);
//         }
//         return valueFactorial;
// }
// let result;
//     if (m > n) {
//          result = factorial(m) / factorial(n - 1);
//     } else  if (n > m) {
//         result = factorial(n) / factorial(m - 1);
//     } else {
//         result = m * m;
// }
// console.log('Result:' + result);

//ex.2_b Create a loop that will counts the product of all  odd numbers from m to n, inclusive.

// let result = 1;
// const m = 13, n = 10;
// function countProductOddNumbers(number1, number2) {
//     let i = number1;
//     let productOfOddNum = 1;
//     while (i >= number2) {
//         if (i % 2 === 1) {
//             productOfOddNum *= i;
//         }
//         i--;
//     }
//     return productOfOddNum;
// }
// if (m > n) {
//     console.log(countProductOddNumbers(m, n));
//     } else if (m < n) {
//         console.log(countProductOddNumbers(n, m));
// } else if (m === n && m % 2 === 1) {
//     console.log(m);
// } else {
//     console.log('There is no odd numbers');
// }

//ex.3 Print the multiplication table from 1 to 5 to the console

for (let j = 1; j <= 5; j++) {
     console.log('\non '+j+'\n\n');
    for (let i = 1; i <= 10; i++) {
        console.log(i + ' x ' + j + ' = ' + (i * j));
    }

}
console.log('\n well done');

// let arr = [];
// function getSpecialNumbers(arr) {
//     let i = 0, newArr = [], j = 0;
//     for (i of arr) {
//         if (arr[i] % 3 === 0) {
//             newArr[j] = arr[i];
//             j++;
//         }
//     }
//     return newArr;
// }
// let myArr = [1, 2, 3, 5, 5, 56, 60, 99];
// console.log(getSpecialNumbers(myArr));


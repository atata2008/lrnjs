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

// for (let j = 1; j <= 5; j++) {
//      console.log('\non '+j+'\n\n');
//     for (let i = 1; i <= 10; i++) {
//         console.log(i + ' x ' + j + ' = ' + (i * j));
//     }

// }
// console.log('\n well done');

//ex.4 Create a function that will take an array and return an array with 3 elements: length, first and last elements.

// function getArrayBounds(arr) {
//        if (typeof arr === "object") {
//         let arrNew = [];
//         arrNew[0] = arr.length;
//         arrNew[1] = arr[0];
//         arrNew[2] = arr[arr.length - 1];
//         return arrNew;
//     } else {
//         return null;
//     }
// }

// let yearsOfDates = [1, 2, 3, 4, 1971, 199965];
// /*const yearsOfDates = 'mmmm';*/
// console.log(getArrayBounds(yearsOfDates));

//ex.5 Create a funtion that will take an array and return a sum of all elements.

// function getSum(arr) {
//     if (!Array.isArray(arr)) {
//         return null;
//     } else {
//         let sum = 0;
//         for (let i of arr) {
//             sum++;
//         }
//         return sum
//     }
// }
// let yearsOfDates = [1, 2, 3, 4, 1971, 199965];
// const yearsOfDates2 = 'mmmm';
// console.log('sum all elements of array = ' + getSum(yearsOfDates2));

//ex.6 Find enements of array these these are divisible by 3 without remainder.

// function getSpecialArray(max, min) {
//     let arrSpecialNum = [], n = 0;
//     for (let i = min; i <= max; i++) {
//         if (i % 3 === 0) {
//             arrSpecialNum[n] = i;
//             n++;
//         }
//     }
//     return arrSpecialNum;
// }

// function getSpecialNumbers(m, n) {
//     let areSpecialNumbers = [];
//     if (m > n) {
//         areSpecialNumbers = getSpecialArray(m, n);
//     } else {
//         areSpecialNumbers = getSpecialArray(n, m);
//     }
//     return areSpecialNumbers;

// }
// console.log(getSpecialNumbers(5, 51));

//ex.7_a Create a function 'swap' that will take array. The first array element will send to end, and also the function will return the result.

// function swap(arr) {
//     let element = arr[0];
//     arr.push(element);
//     arr.shift();
//     return arr;
// }

// const myNames = ['Lusy', 'Tatyana', 'Nora'];

// console.log(swap(myNames));

//ex.7_b (Array destructuring and spread-operator)

// function swap2(array) {
//     let [a, ...ather] = array;
//     return [...ather, a];
// }
// let myNumbers = [1, 10, 100];

// console.log(swap2(myNumbers));

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
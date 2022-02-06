"use strict";
/**
 * 関数に型をつける
 * 関数の引数に関数を付与しないとanyになってしまう
 */
const add = (num1, num2) => {
    return num1 + num2;
};
const anotherAdd = add;
const doubleNumber = (number) => number * 2;
const doubleNumber1 = (num) => num * 2;
// callback関数
const doubleAndHandle = (num, cb) => {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
    console.log(doubleNum);
};
doubleAndHandle(21, (doubleNum) => {
    return doubleNum;
});

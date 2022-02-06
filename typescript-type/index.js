"use strict";
// boolean
let hasValue = true;
// int(number)
let count = 1;
let float = 3.14;
let negative = -0.12;
// string
let single = "hello";
let double = "hello";
let back = `hello`;
/**
 * 型推論
 * 基本的には型推論を使う
 * ts側で判断できない変数名を使う場合は型を定義する
 */
// boolean
let hasValue1 = true;
// int(number)
let count1 = 1;
let float1 = 3.14;
let negative1 = -0.12;
// string
let single1 = "hello";
let double1 = "hello";
let back1 = `hello`;
// unknown型
let unknownInput1;
let anyInput1;
let text1;
unknownInput1 = "hello";
unknownInput1 = 21;
unknownInput1 = true;
text1 = anyInput1;
if (typeof unknownInput1 === "string") {
    text1 = unknownInput1;
}
// never型
// 決して何も返さない
const error = (message) => {
    throw new Error(message);
};
console.log(error("this is an error"));

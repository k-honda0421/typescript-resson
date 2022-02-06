// boolean
let hasValue: boolean = true;

// int(number)
let count: number = 1;
let float: number = 3.14;
let negative: number = -0.12;

// string
let single: string = "hello";
let double: string = "hello";
let back: string = `hello`;

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
let unknownInput1: unknown;
let anyInput1: any;
let text1: string;
unknownInput1 = "hello";
unknownInput1 = 21;
unknownInput1 = true;
text1 = anyInput1;
if (typeof unknownInput1 === "string") {
  text1 = unknownInput1;
}

// never型
// 決して何も返さない
const error = (message: string): never => {
  throw new Error(message);
};
console.log(error("this is an error"));

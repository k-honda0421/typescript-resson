/**
 * 関数に型をつける
 * 関数の引数に関数を付与しないとanyになってしまう
 */
const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

const anotherAdd: (n1: number, n2: number) => number = add;

const doubleNumber = (number: number): number => number * 2;
const doubleNumber1: (num: number) => number = (num) => num * 2;

// callback関数
const doubleAndHandle = (num: number, cb: (num: number) => number): void => {
  const doubleNum = cb(num * 2);
  console.log(num * 2);
  console.log(doubleNum);
};
doubleAndHandle(21, (doubleNum) => {
  return doubleNum;
});

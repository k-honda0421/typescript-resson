"use strict";
// タイプエイリアス: オブジェクトの型を事前に定義しておくやつ
// type Human = {
//   name: string;
//   age: number;
// };
const nameable = {
    name: "quill",
    nickName: "quilla",
};
let addFunc;
addFunc = (num1, num2) => {
    return num1 + num2;
};
const human = {
    name: "Quill",
    age: 38,
    greeting(message = "hello") {
        console.log(message);
    },
};
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
    }
    greeting(message) {
        console.log("Hello");
    }
}
const user = new Developer("takashi", 28, 3);

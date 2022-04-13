"use strict";
var _a, _b, _c;
// interfaceも可
// interface EngineerBlogger extends Engineer, Blogger {}
const quill = {
    name: "quill",
    role: "frontend",
    follower: 1000,
};
function toUpperCase(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    else {
        return x;
    }
}
const upperHello = function (x) {
    return 0;
};
// let intersectionFunc: FuncA & FuncB;
// intersectionFunc = function (a: number | string, b?: number | string): number {
//   return 0;
// };
let unionFunc;
unionFunc = function (a, b) {
    return 0;
};
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    // 型のもつキーを判定
    if ("role" in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ("follower" in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    constructor() {
        this.kind = "dog";
    }
    speak() {
        console.log("bow-wow");
    }
}
class Bird {
    constructor() {
        this.kind = "bird";
    }
    speak() {
        console.log("tweet-tweet");
    }
    fly() {
        console.log("flutter");
    }
}
function havePet(pet) {
    pet.speak();
    // タグ付きunion: キーワードとなるリテラルを定義し、判別させる
    switch (pet.kind) {
        case "bird":
            pet.fly();
    }
    // インスタンスを判定
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
/**
    <input id="input">
*/
// 型アサーション
const input = document.getElementById("input");
// asをよく使う
const input2 = document.getElementById("input");
// non-null assertion operator: nullではないと言い切る方法
const input3 = document.getElementById("input");
document.getElementById("input").value =
    "initial input value";
input.value = "initial input value";
input2.value = "initial input value";
const designer = {
    name: "Quill",
    role: "web",
};
console.log(designer.name);
const downloadedData = {
    id: 1,
};
// Optional Chaining: データが存在していればという記述ができる ?付与
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
// Nullish Coalescing: 左辺がnullであればdefault値として右辺を代入する
const userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : "no-user";
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
let target = Color.RED;
let source = 0;
target = source;
// レストパラメーター: 関数の引数に好きな値を入れられる（可変長引数）
function advancedFn(...args) { }
advancedFn(0, "hi", true, 3, 3, 3, 3, 3, 3);
// const アサーション
let milk = "ミルク";
let drink = milk;
const array = [10, 20];
const peter = {
    name: "Peter",
    age: 38,
};

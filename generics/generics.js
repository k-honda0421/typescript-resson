"use strict";
// ジェネリクス: 型を引数として受け取る
// T: typeのTで引数として型を渡してあげる
function copy(value) {
    return value;
}
console.log(copy("hello"));
// 型推論される
console.log(copy({ name: "gorila" }));
// extendsをつけて条件を厳しくする ↓objectでキーがnameでstrのもののみ受け付ける
function copy2(value) {
    return value;
}
console.log(copy2({ name: "gorila" }));
function copy3(value, key) {
    value[key];
    return value;
}
console.log(copy3({ name: "gorila", age: 38 }, "age"));
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add("apple");
stringLightDatabase.add("banana");
stringLightDatabase.add("grape");
stringLightDatabase.remove("grape");
console.log(stringLightDatabase.get());

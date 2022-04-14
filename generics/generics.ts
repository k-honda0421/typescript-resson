// ジェネリクス: 型を引数として受け取る
// T: typeのTで引数として型を渡してあげる
function copy<T>(value: T): T {
  return value;
}
console.log(copy<string>("hello"));
// 型推論される
console.log(copy({ name: "gorila" }));

// extendsをつけて条件を厳しくする ↓objectでキーがnameでstrのもののみ受け付ける
function copy2<T extends { name: string }>(value: T): T {
  return value;
}
console.log(copy2({ name: "gorila" }));

function copy3<T extends { name: string }, U extends keyof T>(
  value: T,
  key: U
): T {
  value[key];
  return value;
}
console.log(copy3({ name: "gorila", age: 38 }, "age"));
// keyof: 定義したobjectのキーをユニオン型にし入れ込む
type K = keyof { name: string; age: number };

class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add("apple");
stringLightDatabase.add("banana");
stringLightDatabase.add("grape");
stringLightDatabase.remove("grape");
console.log(stringLightDatabase.get());
interface TmpDatabase<T> {
  id: number;
  data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32],
};

type TmpDatabase2<T> = {
  id: number;
  data: T[];
};

const tmpDatabase2: TmpDatabase2<number> = {
  id: 3,
  data: [32],
};

interface Todo {
  title: string;
  text: string;
}

// 内蔵されているジェネリック型であるUtility型
type todoable = Partial<Todo>;
type readTodo = Readonly<Todo>;

// promiseはunkownを返すので事前に帰ってくる型を定義してあげる
const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 3000);
});
fetchData.then((data) => {
  data.toLocaleUpperCase();
});
// 配列の型定義
const vegetables: Array<string> = ["Tomato", "Broccolu", "Asparagus"];

// Tのデフォルトを使用
interface ResponseData<T = any> {
  data: T;
  status: number;
}
let tmp: ResponseData;

interface Vegetable {
  tomato: string;
  pumpkin: string;
}
// Mapped Types: 型のfor
type MappedTypes = {
  [P in "tomato" | "pumpkin"]: string;
};

type MappedTypes2 = {
  -readonly [P in keyof Vegetable]?: string;
};

// Conditional Types: 型のif分
// tomato型がストリング型に代入できるのであればnumberできなければboolean
type ConditionalTypes = "tomato" extends string ? number : boolean;
// infer R: anyみたいなもので型推論をする
type ConditionalTypesInfer = { tomato: "tomato" } extends { tomato: infer R }
  ? R
  : boolean;
type DistributiveConditionalTypes = "tomato" | "pumpkin" extends "tomato"
  ? number
  : boolean;
type DistributiveConditionalTypes2<T> = T extends "tomato" ? number : boolean;
let tmp4: DistributiveConditionalTypes2<"tomato" | "pumpkin">;
let tmp5: NonNullable<string | null>;

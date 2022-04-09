// タイプエイリアス: オブジェクトの型を事前に定義しておくやつ
// type Human = {
//   name: string;
//   age: number;
// };

interface Nameable {
  name: string;
  nickName?: string;
}

const nameable: Nameable = {
  name: "quill",
  nickName: "quilla",
};

interface addFunc {
  (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (num1: number, num2: number) => {
  return num1 + num2;
};

interface Human extends Nameable {
  // インターフェース: タイプエイリアスと変わらないがオブジェクトのみに用いる
  name: string;
  age: number;
  //   greeting: (message: string) => void;
  greeting(message: string): void;
}

const human: Human = {
  name: "Quill",
  age: 38,
  greeting(message: string = "hello") {
    console.log(message);
  },
};
class Developer implements Human {
  constructor(public name: string, public age: number, experience: number) {}
  greeting(message: string) {
    console.log("Hello");
  }
}
const user: Human = new Developer("takashi", 28, 3);

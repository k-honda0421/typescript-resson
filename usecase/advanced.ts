// interfaceでも可
type Engineer = {
  name: string;
  role: string;
};

type Blogger = {
  name: string;
  follower: number;
};
// 2つの型を指定する
type EngineerBlogger = Engineer & Blogger;
// interfaceも可
// interface EngineerBlogger extends Engineer, Blogger {}

const quill: EngineerBlogger = {
  name: "quill",
  role: "frontend",
  follower: 1000,
};
type tmp = string & number;

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

// 関数のオーバーロード
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
  if (typeof x === "string") {
    return x.toUpperCase();
  } else {
    return x;
  }
}
interface TmpFunc {
  (x: string): number;
  (x: number): number;
}
const upperHello: TmpFunc = function (x: string | number) {
  return 0;
};
interface FuncA {
  (a: number, b: string): number;
  (a: string, b: number): number;
}
interface FuncB {
  (a: string): string;
}
// let intersectionFunc: FuncA & FuncB;
// intersectionFunc = function (a: number | string, b?: number | string): number {
//   return 0;
// };

let unionFunc: FuncA | FuncB;
unionFunc = function (a: number | string, b?: number | string): number {
  return 0;
};

type nomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: nomadWorker) {
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
  kind: "dog" = "dog";
  speak() {
    console.log("bow-wow");
  }
}

class Bird {
  kind: "bird" = "bird";
  speak() {
    console.log("tweet-tweet");
  }
  fly() {
    console.log("flutter");
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
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
const input = <HTMLInputElement>document.getElementById("input");
// asをよく使う
const input2 = document.getElementById("input") as HTMLInputElement;
// non-null assertion operator: nullではないと言い切る方法
const input3 = document.getElementById("input")!;
(document.getElementById("input") as HTMLInputElement).value =
  "initial input value";
input.value = "initial input value";
input2.value = "initial input value";

interface Designer {
  name: string;
  // インデックスシグネイチャー
  [index: string]: string;
}

const designer: Designer = {
  name: "Quill",
  role: "web",
};

console.log(designer.name);

interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}

const downloadedData: DownloadedData = {
  id: 1,
};
// Optional Chaining: データが存在していればという記述ができる ?付与
console.log(downloadedData.user?.name?.first);

// Nullish Coalescing: 左辺がnullであればdefault値として右辺を代入する
const userData = downloadedData.user ?? "no-user";

// Lookup型: objectが持っているメンバーの型にアクセスするとき
type id = DownloadedData["id"];
enum Color {
  RED,
  BLUE,
}
let target = Color.RED;
let source = 0;
target = source;

// レストパラメーター: 関数の引数に好きな値を入れられる（可変長引数）
function advancedFn(
  ...args: readonly [number, string, boolean?, ...number[]]
) {}
advancedFn(0, "hi", true, 3, 3, 3, 3, 3, 3);

// const アサーション
let milk = "ミルク" as const;
let drink = milk;
const array = [10, 20] as const;
const peter = {
  name: "Peter",
  age: 38,
} as const;

type PeterType = typeof peter;

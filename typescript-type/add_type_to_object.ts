/**
 * オブジェクト
 */
const person: {
  name: string;
  age: number;
} = {
  name: "jack",
  age: 21,
};

// objectの方も定義することができるがあまり使わない
// {}かobjectがあれば全般的なオブジェクトと考える
const person1: object = {
  name: {
    first: "jack",
    last: "smith",
  },
  age: 21,
};

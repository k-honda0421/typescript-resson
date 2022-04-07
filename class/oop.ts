abstract class Person {
  // field
  // public name: string; // publicはなくても良い
  // private age: number;
  readonly id: number;
  static species = "Home Sapi";
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }

  // constructor(initnName: string, initAge: number) {
  //   this.name = initnName;
  //   this.age = initAge;
  // }
  // protected: 継承先でも使えるようにする
  constructor(public readonly name: string, protected age: number) {
    // コンストラクの中では変更が可能
    this.id = 31;
  }

  incrementAge() {
    Person.isAdult(this.age);
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    this.explainJob();
  }

  abstract explainJob(): void;
}

class Teacher extends Person {
  private static instance: Teacher;

  explainJob() {
    console.log(`I am a teacher and I teach ${this.subject}`);
  }

  get subject() {
    if (!this._subject) {
      throw new Error("There is no subject");
    }
    return this._subject;
  }

  set subject(value) {
    if (!value) {
      throw new Error("There is no subject");
    }
    this._subject = value;
  }

  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }

  greeting() {
    console.log(
      `Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this._subject}`
    );
  }

  static getInstance() {
    if (Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher("takashi", 30, "Math");
    return Teacher.instance;
  }
}

const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);

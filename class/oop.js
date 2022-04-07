"use strict";
class Person {
    // constructor(initnName: string, initAge: number) {
    //   this.name = initnName;
    //   this.age = initAge;
    // }
    // protected: 継承先でも使えるようにする
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // コンストラクの中では変更が可能
        this.id = 31;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    incrementAge() {
        Person.isAdult(this.age);
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }
}
Person.species = "Home Sapi";
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
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
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this._subject}`);
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher("takashi", 30, "Math");
        return Teacher.instance;
    }
}
const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);

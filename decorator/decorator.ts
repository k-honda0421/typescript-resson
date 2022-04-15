//  "experimentalDecorators": true, tsconfig.jsonコメントイン
function Logging(message: string) {
  return function (constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
  };
}

// decorator factory
function Component(template: string, selector: string) {
  return function <
    T extends {
      new (...args: any[]): { name: string };
    }
  >(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        const moutedElement = document.querySelector(selector);
        const instance = new constructor();
        if (moutedElement) {
          moutedElement.innerHTML = template;
          moutedElement.querySelector("h1")!.textContent = instance.name;
        }
      }
    };
  };
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log("propertyLogging");
  console.log(target);
  console.log(propertyKey);
}

function MethodLogging(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log("methodLogging");
  console.log(target);
  console.log(propertyKey);
}

function enumerable(isEnumerable: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    return {
      enumerable: isEnumerable,
    };
  };
}

function AccessorLogging(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log("AccessorLogging");
  console.log(target);
  console.log(propertyKey);
}

function ParameterLogging(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log("ParameterLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}

@Component("<h1>{{ name }}</h1>", "#app")
// decolatorはクラスの定義時に実行される
@Logging("Logging User")
class User {
  @PropertyLogging
  name = "quill";

  constructor(private _age: number) {
    console.log("User was created!");
  }

  @enumerable(false)
  @MethodLogging
  greeting(@ParameterLogging message: string) {
    console.log(message);
  }

  @AccessorLogging
  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }
}

const user1 = new User(32);
const user2 = new User(33);
const user3 = new User(34);

{
  class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
}

// これを次のように簡略化できる
// ※修飾子（publicやprivateなど）が必須
{
  class User {
    constructor(public name: string, private age: number) {}
  }
}

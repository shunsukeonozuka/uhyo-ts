{
  class User {
    name: string;
    readonly age: number;

    constructor(name: string, age: number) {
      this.name = name;

      // これはOK（コンストラクタはオブジェクトを作っている最中だから）
      this.age = age;
    }

    setAge(newAge: number) {
      // これはNG
      // this.age = newAge;
      // >読み取り専用プロパティであるため、'age' に代入することはできません。ts(2540)
    }
  }

  const uhyo = new User("uhyo", 26);

  // これももちろんNG
  // uhyo.age = 27;
  // >読み取り専用プロパティであるため、'age' に代入することはできません。ts(2540)
}

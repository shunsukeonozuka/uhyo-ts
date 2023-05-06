{
  class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      // 初期化よりも前に使用しているためエラー
      // console.log(this.age);
      // >プロパティ 'age' は割り当てられる前に使用されています。ts(2565)

      this.name = name;
      this.age = age;

      // これはOK
      console.log(this.age);
    }
  }
}

{
  class User {
    name: string;
    #age: number; // プライベートプロパティ

    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }

    public isAdult(): boolean {
      return this.#age >= 20;
    }
  }

  const uhyo = new User("uhyo", 26);
  console.log(uhyo.name); // >uhyo
  console.log(uhyo.isAdult()); // >true
  // console.log(uhyo.#age); // >プロパティ '#age' には private 識別子が指定されているため、クラス 'User' の外部ではアクセスできません。ts(18013)
}

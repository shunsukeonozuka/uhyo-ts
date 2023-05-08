{
  // クラス宣言時には同じ名前の型（User型）が作成される
  class User {
    name: string = "";
    age: number = 0;

    isAdult(): boolean {
      return this.age >= 20;
    }
  }

  // これはもちろんOK
  const uhyo: User = new User();

  // これもOK
  const john: User = {
    name: "John Smith",
    age: 15,
    isAdult: () => true,
  };
}

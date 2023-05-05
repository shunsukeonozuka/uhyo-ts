{
  class User {
    // 読み取り専用も可
    readonly name: string = "";

    age: number = 0;
  }

  const uhyo = new User();

  // uhyo.name = "うひょ";
  // >読み取り専用プロパティであるため、'name' に代入することはできません。ts(2540)
}

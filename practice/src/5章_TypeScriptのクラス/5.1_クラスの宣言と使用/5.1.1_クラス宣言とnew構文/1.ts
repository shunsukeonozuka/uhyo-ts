{
  // クラス宣言
  class User {
    name: string = "";
    age: number = 0;
  }

  // newでクラスのインスタンスを作成
  const uhyo = new User();

  console.log(uhyo.name);
  // >""
  console.log(uhyo.age);
  // >0

  uhyo.age = 26;
  console.log(uhyo.age);
  // >26
}

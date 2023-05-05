{
  class User {
    // オプショナルも可（この場合初期値省略OK）
    name?: string;

    age: number = 0;
  }

  const uhyo = new User();

  console.log(uhyo.name);
  // >undefined

  uhyo.name = "うひょ";
  console.log(uhyo.name);
  // >うひょ
}

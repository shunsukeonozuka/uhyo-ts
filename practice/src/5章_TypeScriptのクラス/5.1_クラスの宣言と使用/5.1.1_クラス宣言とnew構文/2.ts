{
  // クラス宣言より前に使用するとエラー（巻き上げなし）
  // const uhyo = new User();
  // >クラス 'User' は宣言の前に使用されました。ts(2449)

  class User {
    name: string = "";
    age: number = 0;
  }
}

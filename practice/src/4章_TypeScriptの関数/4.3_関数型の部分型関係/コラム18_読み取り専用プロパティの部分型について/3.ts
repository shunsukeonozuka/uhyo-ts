{
  type User = { name: string };
  type ReadonlyUser = { readonly name: string };

  const uhyoify = (user: User) => {
    user.name = "uhyo";
  };

  const john: ReadonlyUser = {
    name: "John Smith",
  };

  // これはコンパイルエラー
  // john.name = "Nanashi";
  // >読み取り専用プロパティであるため、'name' に代入することはできません。ts(2540)

  // これはエラーにならない！
  uhyoify(john);

  // readonlyなのにnameが変えられてしまった
  console.log(john.name);
  // >uhyo
}

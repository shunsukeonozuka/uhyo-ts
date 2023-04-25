{
  type User = { name: string; age: number };

  const users: User[] = [
    { name: "uhyo", age: 26 },
    { name: "John Smith", age: 15 },
  ];

  // 20歳以上のユーザーだけの配列
  const adultUsers = users.filter((user: User) => user.age >= 20);
  console.log(adultUsers);

  // すべてのユーザーが20歳以上ならtrue
  const allAdult = users.every((user: User) => user.age >= 20);
  console.log(allAdult);

  // 60歳以上のユーザーが1人でもいればtrue
  const seniorExists = users.some((user: User) => user.age >= 60);
  console.log(seniorExists);

  // 名前がJohnで始まるユーザーを探して返す
  const john = users.find((user: User) => user.name.startsWith("John"));
  console.log(john);
}

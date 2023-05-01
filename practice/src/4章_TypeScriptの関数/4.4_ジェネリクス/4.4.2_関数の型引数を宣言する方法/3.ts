{
  // extendsも使用可能
  const repeat = <T extends { name: string }>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  };

  type HasNameAndAge = {
    name: string;
    age: number;
  };

  // これはOK
  console.log(repeat<HasNameAndAge>({ name: "uhyo", age: 26 }, 3));
  // >[ { name: 'uhyo', age: 26 },{ name: 'uhyo', age: 26 },{ name: 'uhyo', age: 26 } ]

  // これはコンパイルエラー
  // console.log(repeat<string>("a", 5));
  // >型 'string' は制約 '{ name: string; }' を満たしていません。ts(2344)
}

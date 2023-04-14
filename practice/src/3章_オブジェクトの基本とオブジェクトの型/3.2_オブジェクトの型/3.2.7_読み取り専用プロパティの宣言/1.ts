{
  type MyObj = {
    readonly foo: number; // 読み取り専用プロパティ
  };

  const obj: MyObj = { foo: 123 };
  // obj.foo = 0; // >読み取り専用プロパティであるため、'foo' に代入することはできません。
}

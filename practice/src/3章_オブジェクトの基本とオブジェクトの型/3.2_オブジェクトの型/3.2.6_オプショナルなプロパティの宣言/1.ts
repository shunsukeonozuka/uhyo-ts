{
  type MyObj = {
    foo: boolean;
    bar: boolean;
    baz?: number; // オプショナルなプロパティ（あってもなくてもよいプロパティ）
  };

  const obj: MyObj = { foo: false, bar: true };
  console.log(obj.baz);
  // >undefined

  const obj2: MyObj = { foo: true, bar: false, baz: 1234 };
  console.log(obj2.baz);
  // >1234
}

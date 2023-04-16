{
  type FooBar = {
    foo: string;
    bar: number;
  };
  type FooBarBaz = {
    foo: string;
    bar: number;
    baz: boolean;
  };

  const obj: FooBarBaz = {
    foo: "hi",
    bar: 1,
    baz: false,
  };

  const obj2: FooBar = obj; // 部分型のためコンパイルエラーにならない

  // console.log(obj2.baz); // obj2からbazにはアクセス不可（コンパイルエラーとなる）
  // >プロパティ 'baz' は型 'FooBar' に存在しません。
}

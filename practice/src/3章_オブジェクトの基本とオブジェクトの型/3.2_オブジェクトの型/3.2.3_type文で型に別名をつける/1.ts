{
  type FooBarObj = {
    foo: number;
    bar: string;
  };

  const obj: FooBarObj = {
    foo: 123,
    bar: "Hello, world!",
  };
}

/* type文による型名の作成は型名を使うよりあとでもOK */
{
  const obj: FooBarObj = {
    foo: 123,
    bar: "Hello, world!",
  };

  type FooBarObj = {
    foo: number;
    bar: string;
  };
}

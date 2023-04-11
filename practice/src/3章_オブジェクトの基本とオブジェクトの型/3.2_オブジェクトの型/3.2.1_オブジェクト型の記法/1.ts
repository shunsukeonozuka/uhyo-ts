{
  const obj = {
    foo: 123,
    bar: "Hello, world!",
  };
}

/* 変数objの宣言に型注釈を加える */
{
  const obj: {
    foo: number;
    bar: string;
  } = {
    foo: 123,
    bar: "Hello, world!",
  };
}

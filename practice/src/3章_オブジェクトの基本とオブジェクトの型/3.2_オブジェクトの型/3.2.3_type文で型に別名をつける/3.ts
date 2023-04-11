/* 作った型にさらに別名を与えることも可能 */
{
  type FooObj = { foo: number };
  type MyObj = FooObj;

  const obj: MyObj = { foo: 0 };
}

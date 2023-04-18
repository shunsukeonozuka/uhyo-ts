{
  type NestedObj = {
    obj?: {
      foo: number;
    };
  };

  const nested1: NestedObj = {
    obj: { foo: 123 },
  };
  const nested2: NestedObj = {};

  const { obj: { foo: foo1 } = { foo: 500 } } = nested1;
  console.log(foo1);
  // >123

  const { obj: { foo: foo2 } = { foo: 500 } } = nested2;
  console.log(foo2);
  // >500
}

{
  const obj = {
    foo: 111,
    bar: 222,
    "foo bar": 333,
  };

  const { foo, bar: barVar, "foo bar": fooBar } = obj;
  console.log(foo, barVar, fooBar);
  // >111 222 333
}

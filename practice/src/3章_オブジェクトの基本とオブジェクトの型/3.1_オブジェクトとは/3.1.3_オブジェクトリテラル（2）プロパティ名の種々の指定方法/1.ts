{
  const obj = {
    foo: 123,
    "foo bar": -500,
    "↑↓↑↓": "",
  };

  console.log(obj.foo);
  // >123

  console.log(obj["foo bar"]);
  // >-500
}

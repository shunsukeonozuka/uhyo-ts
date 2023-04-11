{
  const foo = { num: 1234 };
  const bar = foo;
  console.log(bar.num);
  // >1234

  bar.num = 0;
  console.log(foo.num);
  // >0
}

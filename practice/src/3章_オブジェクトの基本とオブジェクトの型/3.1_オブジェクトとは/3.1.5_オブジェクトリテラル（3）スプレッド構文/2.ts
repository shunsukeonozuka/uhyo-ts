{
  const obj1 = {
    foo: 123,
    bar: 456,
    baz: 789,
  };

  const obj2 = {
    ...obj1,
    foo: -9999,
  };

  console.log(obj2);
  // >foo: -9999, bar: 456, baz: 789 }
}

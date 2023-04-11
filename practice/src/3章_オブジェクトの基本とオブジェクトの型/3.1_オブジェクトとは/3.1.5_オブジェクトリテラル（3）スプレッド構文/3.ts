{
  const obj1 = {
    foo: 123,
    bar: 456,
    baz: 789,
  };

  const obj2 = {
    // foo: -9999, // >'foo' が複数回指定されているため、ここでの使用は上書きされます。
    ...obj1,
  };
}

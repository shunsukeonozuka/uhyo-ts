{
  type Family<Parent, Child> = {
    mother: Parent;
    father: Parent;
    child: Child;
  };

  const obj1: Family<number, string> = {
    mother: 0,
    father: 100,
    child: "1000",
  };

  // const obj2: Family = {
  //   mother: 0,
  //   father: 100,
  //   child: "1000",
  // };
  // >ジェネリック型 'Family' には 2 個の型引数が必要です。
}

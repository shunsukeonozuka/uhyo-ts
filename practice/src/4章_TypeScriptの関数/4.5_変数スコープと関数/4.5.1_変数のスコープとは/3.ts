{
  const repeatLength = 5;

  const repeat = function <T>(element: T): T[] {
    const repeatLength = 3;

    const result: T[] = [];
    for (let i = 0; i < repeatLength; i++) {
      result.push(element);
    }
    return result;
  };

  // 内側と外側に同じ名前の変数がある場合、より内側のスコープが優先される
  console.log(repeat("a"));
  // >[ 'a', 'a', 'a' ]

  console.log(repeatLength);
  // >5
}

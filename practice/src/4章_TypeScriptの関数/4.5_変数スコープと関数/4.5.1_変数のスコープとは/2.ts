{
  const repeatLength = 5;

  const repeat = function <T>(element: T): T[] {
    const result: T[] = [];

    // repeatLengthは関数スコープの外に属しているが、関数スコープの中からアクセスできる
    for (let i = 0; i < repeatLength; i++) {
      result.push(element);
    }
    return result;
  };

  console.log(repeat("a"));
  // >[ 'a', 'a', 'a', 'a', 'a' ]
}

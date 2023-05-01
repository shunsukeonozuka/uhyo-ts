{
  const repeat = function <T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  };

  // repeat関数の型は以下となる
  // const repeat: <T>(element: T, length: number) => T[]
}

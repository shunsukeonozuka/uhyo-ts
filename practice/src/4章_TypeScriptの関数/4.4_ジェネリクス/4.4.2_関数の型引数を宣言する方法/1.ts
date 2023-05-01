{
  // function関数式の場合
  const repeat = function <T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  };
}

{
  // アロー関数式の場合
  const repeat = <T>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  };
}

{
  // メソッド記法の場合
  const utils = {
    repeat<T>(element: T, length: number): T[] {
      const result: T[] = [];
      for (let i = 0; i < length; i++) {
        result.push(element);
      }
      return result;
    },
  };
}

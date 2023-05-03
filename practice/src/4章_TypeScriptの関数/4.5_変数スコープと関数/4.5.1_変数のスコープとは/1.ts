{
  const repeat = function <T>(element: T, length: number): T[] {
    // この変数resultはrepeatの変数スコープに属する
    const result: T[] = [];

    for (let i = 0; i < length; i++) {
      result.push(element);
    }

    // 同じスコープ内で宣言されているためエラー
    // const result = [];
    // >ブロック スコープの変数 'result' を再宣言することはできません。ts(2451)

    return result;
  };

  // 関数の外には変数resultは存在しないためエラー
  // console.log(result);
  // >名前 'result' が見つかりません。ts(2304)
}

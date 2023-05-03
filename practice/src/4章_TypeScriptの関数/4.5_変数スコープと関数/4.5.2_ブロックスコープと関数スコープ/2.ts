{
  function sum(arr: number[]) {
    let result = 0;

    // この変数iはfor文の中のみのスコープに存在
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }

    // ここで変数iを使うのはエラー
    // console.log(i);
    // >名前 'i' が見つかりません。ts(2304)

    return result;
  }
}

{
  function sabayomi(age: number) {
    if (age >= 30) {
      const lie = age - 10;
      return lie;
    }

    // ブロックを分ければ、同じ変数名を使える
    if (age >= 20) {
      const lie = age - 5;
      return lie;
    }

    // ブロックの外には存在しないためエラー
    // console.log(lie);
    // >名前 'lie' が見つかりません。ts(2304)

    return age;
  }
}

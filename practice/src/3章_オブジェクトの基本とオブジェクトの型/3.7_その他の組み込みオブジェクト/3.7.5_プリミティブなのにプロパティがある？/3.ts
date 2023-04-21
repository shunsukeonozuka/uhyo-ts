{
  /* これらはOK */
  let val: {} = 123;
  val = "foobar";
  val = { num: 1234 };

  /* これらはコンパイルエラー */
  // val = null;
  // >型 'null' を型 '{}' に割り当てることはできません。ts(2322)
  // val = undefined;
  // >型 'undefined' を型 '{}' に割り当てることはできません。ts(2322)
}

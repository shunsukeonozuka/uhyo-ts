{
  /* これはOK */
  const arr: number[] = [1, 10, 100];

  /* これはコンパイルエラー */
  // const arr2: string[] = [123, -456];
  // >型 'number' を型 'string' に割り当てることはできません。ts(2322)
}

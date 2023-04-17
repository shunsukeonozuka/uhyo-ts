{
  const arr = [1, 10, 100];
  arr.push(1000);
  console.log(arr);
  // >[ 1, 10, 100, 1000 ]

  // arr.push("foobar");
  // >型 'string' の引数を型 'number' のパラメーターに割り当てることはできません。ts(2345)
}

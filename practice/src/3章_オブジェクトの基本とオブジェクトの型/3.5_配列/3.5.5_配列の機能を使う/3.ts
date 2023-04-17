{
  const arr = [1, 10, 100];

  console.log(arr.includes(100));
  // >true

  console.log(arr.includes(50));
  // >false

  // console.log(arr.includes("foobar"));
  // >型 'string' の引数を型 'number' のパラメーターに割り当てることはできません。ts(2345)
}

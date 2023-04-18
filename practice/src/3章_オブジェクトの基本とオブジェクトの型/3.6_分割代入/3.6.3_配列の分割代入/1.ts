{
  const arr = [1, 2, 4, 8, 16, 32];

  const [first, second, third] = arr;

  console.log(first, second, third);
  // >1 2 4
}

/* 分割代入を用いない場合は以下となる */
{
  const arr = [1, 2, 4, 8, 16, 32];

  const first = arr[0];
  const second = arr[1];
  const third = arr[2];

  console.log(first, second, third);
  // >1 2 4
}

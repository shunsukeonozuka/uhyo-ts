{
  const arr = [1, 2, 4, 8, 16, 32];

  const [, foo, , bar, , baz] = arr; // 空白を用いて要素をスキップ
  console.log(foo, bar, baz);
  // >2 8 32
}

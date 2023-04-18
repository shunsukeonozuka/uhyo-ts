{
  const arr = [1, 1, 2, 3, 5, 8, 13];

  const [first, second, third, ...rest] = arr;
  console.log(first, second, third, rest);
  // >1 1 2 [ 3, 5, 8, 13 ]
}

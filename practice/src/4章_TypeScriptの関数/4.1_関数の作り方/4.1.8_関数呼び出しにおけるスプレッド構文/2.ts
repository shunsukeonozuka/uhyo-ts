{
  const sum3 = (a: number, b: number, c: number) => a + b + c;

  // const nums = [1, 2, 3];
  // console.log(sum3(...nums));

  const nums: [number, number, number] = [1, 2, 3];
  console.log(sum3(...nums));
}

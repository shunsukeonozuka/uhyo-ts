{
  type Human = {
    height: number;
    weight: number;
  };

  // 関数の引数に分割代入を行うことも可能
  const calcBMI = function ({ height, weight }: Human): number {
    return weight / height ** 2;
  };

  const uhyo: Human = { height: 1.84, weight: 72 };
  console.log(calcBMI(uhyo));
}

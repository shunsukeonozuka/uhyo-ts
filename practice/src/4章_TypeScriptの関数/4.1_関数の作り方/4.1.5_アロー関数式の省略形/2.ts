{
  type Human = {
    height: number;
    weight: number;
  };
  type ReturnObj = {
    bmi: number;
  };

  // 正しい書き方
  const calcBMIObject = ({ height, weight }: Human): ReturnObj => ({ bmi: weight / height ** 2 });

  // これはコンパイルエラーが発生
  // const calcBMIObject2 = ({ height, weight }: Human): ReturnObj => {
  //   bmi: weight / height ** 2;
  // };
}

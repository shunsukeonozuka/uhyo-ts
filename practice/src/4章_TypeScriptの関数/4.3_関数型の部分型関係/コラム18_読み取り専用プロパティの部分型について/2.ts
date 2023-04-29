{
  function fillZero(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
      nums[i] = 0;
    }
  }

  // fillZeroにはnumber[]型を与えることができる
  const nums1: number[] = [1, 10, 100];
  fillZero(nums1);
  console.log(nums1);
  // >[ 0, 0, 0 ]

  // fillZeroにreadonly number[]を与えるのはコンパイルエラー
  const nums2: readonly number[] = [1, 1, 2, 3, 5, 8];
  // fillZero(nums2);
  // >型 'readonly number[]' の引数を型 'number[]' のパラメーターに割り当てることはできません。
  // >  型 'readonly number[]' は 'readonly' であるため、変更可能な型 'number[]' に代入することはできません。ts(2345)
}

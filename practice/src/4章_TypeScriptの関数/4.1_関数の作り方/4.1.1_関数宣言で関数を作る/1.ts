{
  console.log(range(5, 10));

  function range(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    return result;

    /* コンパイルエラー */
    // return max;
  }

  console.log(range(5, 10));

  /* コンパイルエラー */
  // range("5", "10");
  // range(5);
}

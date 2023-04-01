// res1の型はnumber型になる
const res1 = 5 - 1.86;

// res2の型はbigint型になる
const res2 = 2n ** 5n;

// 混ぜて使うことはできない（コンパイルエラー）
// const res3=3+4n;
// >演算子 '+' を型 '3' および '4n' に適用することはできません。

/* ==と===の違い */
{
  const str: any = "3";

  console.log(str == 3);
  // >true
  // 文字列が数値に変換されるため

  console.log(str === 3);
  // >false
  // 異なる型である文字列と数値を比較しているため
}

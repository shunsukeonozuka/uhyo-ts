{
  let tuple: [string, number] = ["foo", 0];
  tuple = ["aiueo", -555];

  const str = tuple[0]; // const str: string
  const num = tuple[1]; // const num: number

  // const nothing = tuple[2];
  // >長さ '2' のタプル型 '[string, number]' にインデックス '2' の要素がありません。ts(2493)
}

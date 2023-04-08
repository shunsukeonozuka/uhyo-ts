{
  let input;

  const name = input ? input : "名無し";
  const user = {
    name: name,
    age: 20,
  };
}

/* 上記の省略記法 */
{
  let input;

  const name = input ? input : "名無し";
  const user = {
    name, // プロパティ名と変数名が同じ場合は省略できる
    age: 20,
  };
}

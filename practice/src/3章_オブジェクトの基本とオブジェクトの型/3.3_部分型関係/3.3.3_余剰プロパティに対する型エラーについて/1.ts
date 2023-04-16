{
  type User = {
    name: string;
    age: number;
  };

  const u: User = {
    name: "uhyo",
    age: 26,

    // telNumber: "09012345678",
    // >型 '{ name: string; age: number; telNumber: string; }' を型 'User' に割り当てることはできません。
    // >オブジェクト リテラルは既知のプロパティのみ指定できます。'telNumber' は型 'User' に存在しません。
  };
}

/* 以下のようにオブジェクトリテラルじゃなければエラーは発生しない */
{
  type User = {
    name: string;
    age: number;
  };

  const obj = {
    name: "uhyo",
    age: 26,
    telNumber: "09012345678",
  };

  const u: User = obj;
}

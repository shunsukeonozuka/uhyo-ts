{
  type PriceData = {
    [key: string]: number;
  };

  const data: PriceData = {
    apple: 220,
    coffee: 120,
    bento: 500,
  };

  data.chicken = 250; // これはOK
  // data.弁当 = "foo"; // >型 'string' を型 'number' に割り当てることはできません。
}

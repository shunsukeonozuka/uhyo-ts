{
  type HasName = {
    name: string;
  };

  type Family<Parent extends HasName, Child extends Parent> = {
    mother: Parent;
    father: Parent;
    child: Child;
  };

  // type T = Family<number, string>;
  // >型 'number' は制約 'HasName' を満たしていません。

  type Animal = {
    name: string;
  };
  type Human = {
    name: string;
    age: number;
  };

  type S = Family<Animal, Human>;

  // type T = Family<Human, Animal>;
  // >型 'Animal' は制約 'Human' を満たしていません。
  // >プロパティ 'age' は型 'Animal' にありませんが、型 'Human' では必須です。
}

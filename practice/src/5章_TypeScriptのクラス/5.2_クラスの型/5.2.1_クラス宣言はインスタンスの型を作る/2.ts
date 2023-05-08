{
  // クラス式では型は作られない
  const User = class {
    name: string = "";
    age: number = 0;

    isAdult(): boolean {
      return this.age >= 20;
    }
  };

  // OK
  const uhyo = new User();

  // エラー：'User' は値を参照していますが、ここでは型として使用されています。'typeof User' を意図していましたか?ts(2749)
  // const john: User = new User();
}

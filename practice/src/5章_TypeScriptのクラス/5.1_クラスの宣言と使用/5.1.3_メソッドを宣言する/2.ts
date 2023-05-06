{
  class User {
    name: string = "";
    age: number = 0;

    isAdult(): boolean {
      return this.age >= 20;
    }
  }

  // Userのインスタンスを2つ作成
  const uhyo = new User();
  const baby = new User();

  uhyo.age = 26;

  console.log(uhyo.isAdult());
  // >true
  console.log(baby.isAdult());
  // >false
}

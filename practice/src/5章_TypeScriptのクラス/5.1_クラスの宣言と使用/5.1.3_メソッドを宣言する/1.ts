{
  class User {
    name: string = "";
    age: number = 0;

    // isAdultメソッド
    isAdult(): boolean {
      return this.age >= 20;
    }

    // setAgeメソッド
    setAge(newAge: number) {
      this.age = newAge;
    }
  }

  const uhyo = new User();
  console.log(uhyo.isAdult());
  // >false

  uhyo.setAge(26);
  console.log(uhyo.isAdult());
  // >true
}

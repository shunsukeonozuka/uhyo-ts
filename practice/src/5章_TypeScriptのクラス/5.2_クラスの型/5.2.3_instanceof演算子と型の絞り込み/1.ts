{
  class User {
    name: string = "";
    age: number = 0;
  }

  const uhyo = new User();

  // uhyoはUserのインスタンスなのでtrue
  console.log(uhyo instanceof User); // >true

  // {}はUserのインスタンスではないのでfalse
  console.log({} instanceof User); // >false

  const john: User = {
    name: "John Smith",
    age: 15,
  };
  // johnは”User型ではあるが”、Userのインスタンスではないのでfalse
  console.log(john instanceof User); // >false
}

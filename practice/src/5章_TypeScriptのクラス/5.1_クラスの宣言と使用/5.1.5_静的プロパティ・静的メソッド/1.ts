{
  class User {
    // 静的プロパティ
    static adminName: string = "uhyo";

    // 静的メソッド
    static getAdminUser() {
      return new User(User.adminName, 26);
    }

    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    isAdult(): boolean {
      return this.age >= 20;
    }
  }

  console.log(User.adminName);
  // >uhyo

  const admin = User.getAdminUser();
  console.log(admin.age);
  // >26
  console.log(admin.isAdult());
  // >true

  const uhyo = new User("uhyo", 26);
  // console.log(uhyo.adminName);
  // >プロパティ 'adminName' は型 'User' には存在しません。代わりに静的メンバー 'User.adminName' にアクセスしようとしていましたか?ts(2576)
}

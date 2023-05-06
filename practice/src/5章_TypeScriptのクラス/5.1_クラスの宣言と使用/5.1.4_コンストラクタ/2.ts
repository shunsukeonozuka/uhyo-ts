{
  class User {
    name: string;

    // コンストラクタで初期化してないためエラー
    // age: number;
    // >プロパティ 'age' に初期化子がなく、コンストラクターで明確に割り当てられていません。ts(2564)

    constructor(name: string, age: number) {
      this.name = name;
    }
  }
}

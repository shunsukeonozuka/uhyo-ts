{
  console.log("Hello");

  class C {
    // staticブロックはクラス宣言の評価中に実行される
    static {
      console.log("uhyo");
    }
  }

  console.log("world!");
}
// 出力結果
// >Hello
// >uhyo
// >world!

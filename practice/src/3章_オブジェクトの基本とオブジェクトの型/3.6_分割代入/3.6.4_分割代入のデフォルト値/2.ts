{
  const obj = { foo: null };

  const { foo = 123 } = obj; // デフォルト値はnullに対して何もしない（undefinedのみ適用される）
  console.log(foo);
  // >null
}

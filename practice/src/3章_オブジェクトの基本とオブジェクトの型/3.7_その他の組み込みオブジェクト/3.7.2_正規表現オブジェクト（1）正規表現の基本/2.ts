{
  const r = /^abc/;

  console.log(r.test("abcdegf"));
  // >true
  console.log(r.test("Hello, abcdegf"));
  // >false
}

{
  console.log("Hello, abbbbbbbc world! abbc".replace(/ab+c/, "foobar"));
  // >Hello, foobar world! abbc

  console.log("Hello, abbbbbbbc world! abbc".replace(/ab+c/g, "foobar"));
  // >Hello, foobar world! foobar
}

{
  const result = "Hello, abbbbbbbc world! abc".match(/a(b+)c/);

  if (result !== null) {
    console.log(result[0]);
    // >abbbbbbbc
    console.log(result[1]);
    // >bbbbbbb
  }
}

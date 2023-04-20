{
  const result = "Hello, abbbbbbbc world! abc".match(/a(b+)c/g);

  console.log(result);
  // >[ 'abbbbbbbc', 'abc' ]
}

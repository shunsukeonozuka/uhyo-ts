{
  const result = "Hello, abbbbbbbc world! abc".match(/a(?<worldName>b+)c/);

  if (result !== null) {
    console.log(result.groups);
    // >{ worldName: 'bbbbbbb' }
  }
}

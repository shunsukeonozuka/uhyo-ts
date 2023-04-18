{
  const obj = {
    arr: [123],
  };

  const {
    arr: [foo],
  } = obj;

  console.log(foo);
  // >123
}

{
  type Obj = { foo?: number };

  const obj1: Obj = {};

  const { foo = 500 } = obj1;
  console.log(foo);
  // >500
}

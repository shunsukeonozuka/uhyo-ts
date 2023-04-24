{
  function foo(): void {}
  const bar = (): void => {};

  console.log(foo.name);
  console.log(bar.name);

  type HasName = { name: string };
  const obj: HasName = foo;
}

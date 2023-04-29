{
  const f = (name: string) => ({ name });
  const g: (name: string) => void = f;

  console.log(g("shun"));
  // >{ name: 'shun' }
}

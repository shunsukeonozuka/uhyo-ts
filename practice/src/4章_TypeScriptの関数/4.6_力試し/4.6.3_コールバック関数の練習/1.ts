{
  function map<T, K>(array: T[], callback: (value: T) => K): K[] {
    const result: K[] = [];
    for (const elm of array) {
      result.push(callback(elm));
    }
    return result;
  }

  const data = [1, -3, -2, 8, 0, -1];

  const result: boolean[] = map(data, (x) => x >= 0);
  console.log(result);
}

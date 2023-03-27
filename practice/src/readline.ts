import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("数値を入力してください：", (line) => {
  const result = line + 1000;
  console.log(result);
  rl.close();
});

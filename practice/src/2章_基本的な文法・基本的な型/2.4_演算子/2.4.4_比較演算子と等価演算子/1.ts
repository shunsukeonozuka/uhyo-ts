{
  const left1 = -5,
    right1 = 0;
  console.log(left1 < right1);
  // >true

  const left2 = 100n,
    right2 = 50n;
  console.log(left2 >= right2);
  // >true

  const left3 = -10,
    right3 = 0;
  console.log(left3 > right3);
  // >false

  const left4 = 12n,
    right4 = 8n;
  console.log(left4 <= right4);
  // >false
}

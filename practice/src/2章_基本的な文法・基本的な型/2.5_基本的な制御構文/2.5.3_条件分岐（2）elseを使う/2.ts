{
  let num: number = 0;

  if (num < 0) {
    console.log("numは負の数です");
  } else if (num === 0) {
    console.log("numは0です");
  } else {
    console.log("numは正の数です");
  }
}

/* 以下のように書いても同じ */
{
  let num: number = 0;

  if (num < 0) {
    console.log("numは負の数です");
  } else {
    if (num === 0) {
      console.log("numは0です");
    } else {
      console.log("numは正の数です");
    }
  }
}

function pattern(x: number): void {
  const n: number = x;
  let y: string = "";
  for (let i = 0; i < n; i++) {
    for (let j = n; j >= n - i; j--) {
      if (j % 2 === 0) y = y + starRepeat(j / 2);
      else y = y + ` ${j}`;
    }
    console.log(y);
    y = "";
  }
}

pattern(5);

function starRepeat(x: number) {
  let s: string = "";
  for (let i = 0; i < x; i++) s += " *";
  return s;
}

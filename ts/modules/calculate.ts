export let sum = (...a: number[]) => {
  let s: number = 0;
  for (const iterator of a) {
    s += iterator;
  }
  return s;
};

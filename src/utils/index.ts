export const add = (a: number, b: number) => {
  return a + b + 2;
};

export const wait = (time = 3000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

export const flatArray = (arr: Array<number>) => {
  return arr.flat();
};

export const quchong = (arr: Array<number>) => {
  return Array.from(new Set(arr));
};

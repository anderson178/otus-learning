export type ScalarOperationType = (first: number, second: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => {
  return first * second;
};

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const squaring: ScalarOperationType = (
  first: number,
  second: number
): number => {
  // console.log('sd');
  // console.log(first * first);
  return first * first;
};

export const exponentiation: ScalarOperationType = (
  first: number,
  second: number
): number => {
  // console.log('sd');
  return Math.pow(first, second);
};

export const factorial: ScalarOperationType = (
  first: number,
  second: number
): number => {
  let i: number;
  let rst = 1;

  for (i = first; i >= 1; i--) {
    rst *= i;
  }
  return rst;
};

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "**": squaring,
  "!": factorial,
  "^": exponentiation,
};

export const mathPriorities: number[] = [1, 2, 3, 4];

const [FIRST, SECOND, THIRD, FOURTH] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "!": FIRST,
  "**": FIRST,
  "^": SECOND,
  "*": THIRD,
  "/": THIRD,
  "+": FOURTH,
  "-": FOURTH,
};

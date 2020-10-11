// eslint-disable-next-line prettier/prettier
export type ScalarOperationType = (first: number, second: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => {
  return first * second};

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

export const squaring: ScalarOperationType = (first: number, second: number): number => {
  console.log('sd');
  return first * first;
}

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "**": squaring,
};

export const mathPriorities: number[] = [1, 2, 3];

const [FIRST, SECOND, THIRD] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "**": FIRST,
  "*": SECOND,
  "/": SECOND,
  "+": THIRD,
  "-": THIRD,
};

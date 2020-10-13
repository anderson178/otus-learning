// eslint-disable-next-line prettier/prettier
import {ParsedLineType, parser} from "./parser";

import {
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
  fourthPrioritiesCalc,
  firstPrioritiesCalc,
} from "./engine";

export const runner = (line: string): number => {
  const stack = parser(line);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }
  let rst = firstPrioritiesCalc(stack);

  if (rst.length === 1) {
    return Number(rst[0]);
  }

  rst = secondPrioritiesCalc(rst);

  if (rst.length === 1) {
    return Number(rst[0]);
  }
  rst = thirdPrioritiesCalc(rst);

  if (rst.length === 1) {
    return Number(rst[0]);
  }

  return fourthPrioritiesCalc(rst);
};

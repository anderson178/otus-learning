// eslint-disable-next-line prettier/prettier
import {ParsedLineType, parser} from "./parser";

import {firstPrioritiesCalc, secondPrioritiesCalc, thirdPrioritiesCalc} from "./engine";

export const runner = (line: string): ParsedLineType => {
  const stack = parser(line);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }
  // return firstPrioritiesCalc(stack);

  const firstPrioritiesRes = firstPrioritiesCalc(stack);
  return firstPrioritiesRes;

  // if (firstPrioritiesRes.length === 1) {
  //   return Number(firstPrioritiesRes[0]);
  // }
  // const secondPrioritiesRes =  secondPrioritiesCalc(firstPrioritiesRes);
  //
  // if (secondPrioritiesRes.length === 1) {
  //   return Number(secondPrioritiesRes[0]);
  // }
  //
  // return thirdPrioritiesCalc(secondPrioritiesRes);
  // return thirdPrioritiesCalc(firstPrioritiesRes);
};

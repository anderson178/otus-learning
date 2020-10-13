// eslint-disable-next-line prettier/prettier
import {isNumber} from "./helpers";
import {
  mathOperators,
  mathOperatorsPriorities,
  mathPriorities,
} from "./mathOperators";

export type ParsedLineType = (number | string)[];
const [FIRST, SECOND, THIRD, FOURTH] = mathPriorities;
export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  const rst = stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];
    const prevPrevItem = stack[key - 2];
    const isValidNumberPush =
      (isNumber(item) &&
        !isNumber(prevItem) &&
        mathOperatorsPriorities[prevItem] != FIRST &&
        mathOperatorsPriorities[prevItem] != SECOND) ||
      (isNumber(item) &&
        !isNumber(prevItem) &&
        isNumber(prevPrevItem) &&
        mathOperatorsPriorities[prevItem] === SECOND);
    const isValidOperatorPush =
      (isNumber(prevItem) &&
        !isNumber(item) &&
        mathOperators.hasOwnProperty(item)) ||
      (!isNumber(prevItem) &&
        mathOperatorsPriorities[prevItem] === FIRST &&
        !isNumber(item));
    const isValidateFirstOperatorPush =
      isNumber(prevItem) &&
      !isNumber(item) &&
      mathOperatorsPriorities[item] === FIRST &&
      mathOperators.hasOwnProperty(item);

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else if (isValidateFirstOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return result;
  }, []);
  return rst;
};

// eslint-disable-next-line prettier/prettier
import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
} from "./mathOperators";

const [FIRST, SECOND, THIRD, FOURTH] = mathPriorities;

// eslint-disable-next-line @typescript-eslint/no-use-before-define
export const secondPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];
    // console.log(stack);
    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    // console.log(result);
    return result;
  }, []);

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 1];
    if (
      !isNumber(String(nextItem)) &&
      mathOperatorsPriorities[nextItem] === FIRST
    ) {
      if (!mathOperators[nextItem]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -1),
        mathOperators[nextItem](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    console.log(result);
    return result;
  }, []);

export const thirdPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];
    // console.log(stack);
    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === THIRD) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    // console.log(result);
    return result;
  }, []);

export const fourthPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (
      mathOperatorsPriorities[item] === FIRST ||
      mathOperatorsPriorities[item] === SECOND ||
      mathOperatorsPriorities[item] === THIRD
    ) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FOURTH) {
      result = mathOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));

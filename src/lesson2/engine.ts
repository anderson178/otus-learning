import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
} from "./mathOperators";

const [FIRST, SECOND, THIRD] = mathPriorities;

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
    stack.reduce<ParsedLineType>((result, nextItem) => {
        console.log('step 0');
        console.log('stack = ' + stack);
        console.log('rst = ' + result);
        const prevItem = result[result.length - 1];
        // const item = result[result.length];
        console.log('step 1');
        console.log(nextItem);
        console.log(!isNumber(String(nextItem)));
        console.log(mathOperatorsPriorities[nextItem] === FIRST);
        if (!isNumber(String(nextItem)) && mathOperatorsPriorities[nextItem] === FIRST) {
            if (!mathOperators[nextItem]) {
                throw new TypeError("Unexpected stack!");
            }
            console.log('step 2');
            result = [
                ...result.slice(0, -2),
                mathOperators[nextItem](Number(prevItem), Number(nextItem)),
            ];
            console.log('step 3');
            console.log(result);
        } else {
            console.log('step 4');
            result.push(nextItem);
        }

        return result;
    }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];
    console.log(stack);
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
    console.log(result);
    return result;
  }, []);

export const thirdPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (mathOperatorsPriorities[item] === FIRST || mathOperatorsPriorities[item] === SECOND) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === THIRD) {
      result = mathOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));

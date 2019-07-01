import { growPossibilities, numericStringToLetters,  } from './utils';
import filterT9Predictions from '../filter';
import { T9_HASH } from '../../../constants';

/**
 * Converts a given input into an array of T9 predictive text matches.
 * Input can be a numeric string or an array (as detailed below) -
 * prefer the array as it is more efficient.
 * 
 * @param {string | [string[], string]} input - either:
 *    (a) a string of numeric input to convert into T9, e.g. '23'; or
 *    (b) an array where:
 *        (i) the first element is previous accumulated possibilities; and
 *        (ii) the second element is the next pressed key
 * @param {Boolean} [filterOutUncommon = false] - Should the array be filtered for uncommon (i.e. not in the top 10000 most common English words) words?
 * @return {string[]} An array of predictive text matches
 */
const getT9Predictions = (input, filterOutUncommon = false) => {
  const [letterOptions, initialAccumulator] = letterOptionsAndInitialAccumulator(input)
  const unfilteredPredictions = letterOptions.reduce(growPossibilities, initialAccumulator)
  return filterOutUncommon
    ? filterT9Predictions(unfilteredPredictions)
    : unfilteredPredictions
}

const letterOptionsAndInitialAccumulator = input => (
  Array.isArray(input)
    ? [[T9_HASH[input[1]]], input[0]]
    : [numericStringToLetters(input), []]
)

export default getT9Predictions;
import { growPossibilities, numericStringToLetters,  } from './utils';
import filterT9Predictions from '../filter';
import { T9_HASH } from '../../../constants';

/**
 * Converts a given input into an array of T9 predictive text matches.
 * Input can be a numeric string or an array (as detailed below) -
 * prefer the array as it is more efficient.
 * 
 * @param {string | [string, string[]]} input - either:
 *    (a) a string of numeric input to convert into T9, e.g. '23'; or
 *    (b) an array where:
 *        (i) the first element is the next pressed key; and
 *        (ii) the second element is a 1D array of previous accumulated possibilities
 * @param {Boolean} [filterOutUncommon = false] - Should the array be filtered for uncommon (i.e. not in the top 10000 most common English words) words?
 * @return {string[]} An array of predictive text matches
 */
const getT9Predictions = (input, filterOutUncommon = false) => {
  const [possibilities, initialAccumulator] = possibilitiesAndInitialAccumulator(input)
  const unfilteredPredictions = possibilities.reduce(growPossibilities, initialAccumulator)
  return filterOutUncommon
    ? filterT9Predictions(unfilteredPredictions)
    : unfilteredPredictions
}

const possibilitiesAndInitialAccumulator = input => (
  Array.isArray(input)
    ? [[T9_HASH[input[0]]], input[1]]       // to fit the return format of numericStringToLetters
    : [numericStringToLetters(input), []]
)

export default getT9Predictions;
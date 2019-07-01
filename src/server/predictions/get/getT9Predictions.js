import { growPossibilities, numericStringToLetters,  } from './utils';
import filterT9Predictions from '../filter';

/**
 * Converts a given numeric string into an array of T9 predictive text matches
 * 
 * @param {string} numericString - A string of numeric input to convert into T9, e.g. '23'
 * @param {Boolean} [filterOutUncommon = false] - Should the array be filtered for uncommon (i.e. not in the top 10000 most common English words) words?
 * @return {string[]} An array of predictive text matches
 */
const getT9Predictions = (numericString, filterOutUncommon = false) => {
  const lettersOptions = numericStringToLetters(numericString)
  const unfilteredPredictions = lettersOptions.reduce(growPossibilities, [])
  return filterOutUncommon
    ? filterT9Predictions(unfilteredPredictions)
    : unfilteredPredictions
}


export default getT9Predictions;
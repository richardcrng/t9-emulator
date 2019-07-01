import _ from 'lodash';
import { T9_HASH } from '../../../constants';

/**
 * Takes an array of possible follow-up letters and a current prediction string, returning an array of continued prediction strings.
 * 
 * Curryable function to allow point-free invocation in growPossibilies' flatMap.
 * 
 * @param {String[]} lettersArr - Next possible letters
 * @param {String} prediction - Word / prediction
 * @return {String[]} Array of predictions augmented from prediction via lettersArr 
 */
export const augmentPrediction = _.curry((lettersArr, prediction) => (
  lettersArr.map(letter => `${prediction}${letter}`)
))

export const growPossibilities = (accumulatedPossibilities, lettersArr) => {
  // if no accumulated possibilities, then there are no possibilities to grow
  //    - so return the lettersArr as the only possibilities for now
  if (accumulatedPossibilities.length === 0) return lettersArr

  // otherwise, map each possibility onto an array where we augment by
  //    the lettersArr; should be a flatMap so that we end up with a
  //    one-dimensional array of all possibilities
  return _.flatMap(accumulatedPossibilities, augmentPrediction(lettersArr))
}

/**
 * Converts a numeric string of n letters into an array of n elements, 
 * where each element is an array of letters
 * 
 * @param {String} numericString 
 * @returns {Array.<string[]>}
 */
export const numericStringToLetters = numericString => {
  const numbersPressed = numericString.split('')
  return numbersPressed.map(numberKey => T9_HASH[numberKey])
}
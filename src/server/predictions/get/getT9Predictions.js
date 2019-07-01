import _ from 'lodash';
import { T9_HASH } from '../../../constants';

/**
 * Converts a given numeric string into an array of T9 predictive text matches
 * 
 * @param {string} numericString - A string of numeric input to convert into T9, e.g. '23'
 * @return {string[]} An array of predictive text matches
 */
const getT9Predictions = numericString => {
  const lettersOptions = numericStringToLetters(numericString)
  return lettersOptions.reduce(
    (accumulatedPossibilities, lettersArr) => {
      if (accumulatedPossibilities.length === 0) return lettersArr
      return _.flatMap(
        accumulatedPossibilities,
        possibility => augmentPrediction(lettersArr, possibility)
      )
    },
    []
  )
}

/**
 * Converts a numeric string of n letters into an array of n elements, 
 * where each element is an array of letters
 * 
 * @param {String} numericString 
 * @returns {Array.<string[]>}
 */
const numericStringToLetters = numericString => {
  const numbersPressed = numericString.split('')
  return numbersPressed.map(numberKey => T9_HASH[numberKey])
}

/**
 * Takes an array of possible follow-up letters and a current prediction string, returning an array of continued prediction strings
 * 
 * @param {String[]} lettersArr - Next possible letters
 * @param {String} prediction - Word / prediction
 * @return {String[]} Array of predictions augmented from prediction via lettersArr 
 */
const augmentPrediction = (lettersArr, prediction) => (
  lettersArr.map(letter => `${prediction}${letter}`)
)

export default getT9Predictions;

export {
  augmentPrediction
}
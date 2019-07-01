import _ from 'lodash';

/**
 * Converts a given numeric string into an array of T9 predictive text matches
 * 
 * @param {String} numericString - A string of numeric input to convert into T9, e.g. '23'
 * @return {String[]} An array of predictive text matches
 */
const getT9Predictions = numericString => {
  const inputNums = numericString.split('')
  return inputNums.reduce(
    (accumulatedPredictions, currentInputNum) => {
      return _.flatMap(
        accumulatedPredictions,
        prediction => {
          // something here
        }
      )
    },
    []
  )
}

/**
 * 
 * @param {String[]} lettersArr - Next possible letters
 * @param {String} prediction - Word / prediction
 * @return {String[]} Array of predictions augmented from prediction via lettersArr 
 */
const augmentPrediction = (lettersArr, prediction) => {
  return lettersArr.reduce(
    (accumulatedPredictions, letter) => {
      return [...accumulatedPredictions, `${prediction}${letter}`]
    },
    []
  )
}

export default getT9Predictions;

export {
  augmentPrediction
}
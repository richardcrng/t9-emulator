import _ from 'lodash';

/**
 * Converts a given numeric string into an array of T9 predictive text matches
 * 
 * @param {String} numericString - A string of numeric input to convert into T9, e.g. '23'
 * @return {String[]} An array of predictive text matches
 */
function getT9Predictions(numericString) {
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

export default getT9Predictions;
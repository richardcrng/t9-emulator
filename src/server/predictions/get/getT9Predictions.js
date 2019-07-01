import { growPossibilities, numericStringToLetters,  } from './utils';

const fs = require('fs')
const wordsRaw = fs.readFileSync(`${__dirname}/top10000words.txt`, 'utf-8')
const wordsArr = wordsRaw.split('\n')

console.log(wordsArr)

/**
 * Converts a given numeric string into an array of T9 predictive text matches
 * 
 * @param {string} numericString - A string of numeric input to convert into T9, e.g. '23'
 * @return {string[]} An array of predictive text matches
 */
const getT9Predictions = numericString => {
  const lettersOptions = numericStringToLetters(numericString)
  return lettersOptions.reduce(growPossibilities, [])
}


export default getT9Predictions;
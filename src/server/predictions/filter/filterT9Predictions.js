const fs = require('fs')
const wordsRaw = fs.readFileSync(`${__dirname}/top10000words.txt`, 'utf-8')
const wordsArr = wordsRaw.split('\n')

const filterT9Predictions = arr => arr.filter(str => wordsArr.includes(str))

export default filterT9Predictions
const fs = require('fs')
const wordsRaw = fs.readFileSync(`${__dirname}/top10000words.txt`, 'utf-8')
const wordsArr = wordsRaw.split('\n')

console.log(wordsArr)


const filterT9Predictions = arr => {

}

export default filterT9Predictions
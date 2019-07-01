import top10000words from "./top10000words";

const wordsArr = top10000words.split('\n')

const filterT9Predictions = arr => arr.filter(str => wordsArr.includes(str))

export default filterT9Predictions
import getT9Predictions from ".";
import { augmentPrediction } from "./getT9Predictions";

describe("getT9Predictions", () => {
  describe.skip("GIVEN the input '23'", () => {
    const input = '23'

    describe("WHEN we pass the input to getT9Predictions", () => {
      const result = getT9Predictions(input)

      test("THEN it returns the array ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']", () => {
        expect(result).toEqual([
          'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'
        ])
      })
    })
  })
})

describe("augmentPredictions", () => {
  describe("GIVEN an array of letters to follow, ['d', 'e', 'f']", () => {
    const lettersArr = ['d', 'e', 'f']

    describe("AND an existing prediction, 'a'", () => {
      const prediction = 'a'

      describe("WHEN augmentPredictions is called with these two arguments", () => {
        const result = augmentPrediction(lettersArr, prediction)

        test("THEN the result is ['ad', 'ae', 'af']", () => {
          expect(result).toEqual([
            'ad', 'ae', 'af'
          ])
        })
      })
    })
  })
})
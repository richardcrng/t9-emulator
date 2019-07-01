import getT9Predictions from ".";

describe("getT9Predictions", () => {
  describe("GIVEN the input '23'", () => {
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
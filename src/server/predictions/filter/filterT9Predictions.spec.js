import filterT9Predictions from ".";

describe("filterT9Predictions", () => {
  describe("GIVEN the array ['product', 'postmortem', 'international', 'tnetennba']", () => {
    const array = ['product', 'postmortem', 'international', 'tnetennba']

    describe("WHEN we pass the input to filterT9Predictions", () => {
      const result = filterT9Predictions(array)

      test("THEN it returns the array ['product', 'international']", () => {
        expect(result).toEqual([
          'product', 'international'
        ])
      })
    })
  })
})
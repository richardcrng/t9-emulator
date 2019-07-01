import getT9Predictions from ".";

describe("getT9Predictions: provides array of predictions given a numeric input", () => {
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

  describe("GIVEN the input '228'", () => {
    const input = '228'

    describe("WHEN we pass the input to getT9Predictions and don't filter", () => {
      const result = getT9Predictions(input)

      test("THEN it returns an unfiltered array", () => {
        expect(result).toEqual([
          'aat', 'aau', 'aav',
          'abt', 'abu', 'abv',
          'act', 'acu', 'acv',
          'bat', 'bau', 'bav',
          'bbt', 'bbu', 'bbv',
          'bct', 'bcu', 'bcv',
          'cat', 'cau', 'cav',
          'cbt', 'cbu', 'cbv',
          'cct', 'ccu', 'ccv'
        ])
      })
    })

    describe("WHEN we pass the input to getT9Predictions and filter", () => {
      const result = getT9Predictions(input, true)

      test("THEN it returns a filtered array", () => {
        expect(result).toEqual(['abu', 'act', 'bat', 'cat'])
      })
    })
  })
})
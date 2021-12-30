import couldBeNumber from '../could-be-number'

describe('Check "couldBeNumber" function', () => {
  it('Check argument is a number', () => {
    const result = couldBeNumber('45')

    expect(result).toBe(true)
  }) 

  it('Check argument is not a number', () => {
    const result = couldBeNumber('23adf')

    expect(result).toBe(false)
  })
})
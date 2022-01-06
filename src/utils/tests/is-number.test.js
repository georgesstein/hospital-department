import isNumber from '../is-number'

describe('Check "isNumber" function', () => {
  it('Check argument is a number', () => {
    const result = isNumber('45')

    expect(result).toBe(true)
  }) 

  it('Check argument is not a number', () => {
    const result = isNumber('23adf')

    expect(result).toBe(false)
  })
})
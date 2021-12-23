import countIntersections from './count-intersections'

describe('Check "countIntersection" function', () => {
  it('Find no intersections', () => {
    const result = countIntersections(6, [
      [1, 3],
      [3, 5],
      [5, 6],
    ])
    expect(result).toBe(0)
  })

  it('Find 2 edge intersections', () => {
    const result = countIntersections(1, [
      [1, 2],
      [2, 3],
      [1, 4],
    ])
    expect(result).toBe(2)
  })
})

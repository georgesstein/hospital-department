export default function countIntersections(
  current: number,
  ranges: Array<[number, number]>
) {
  let result = 0

  ranges.forEach(([head, tail]) => {
    if (current >= head && current < tail) {
      result++
    }
  })

  return result
}
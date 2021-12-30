export default function couldBeNumber(str: string): boolean {
  const splittedStr: number[] = str.split('').map(char => parseInt(char))

  if (splittedStr.includes(NaN)) {
    return false
  }

  return true
}

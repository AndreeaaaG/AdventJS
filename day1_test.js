import { expect, test } from 'vitest'
import { findFirstRepeated } from 'Day1/day1.js'

test('Challenge 1: First repeated gift', () => {
  expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe(3)
  expect(findFirstRepeated([1, 2, 3, 4])).toBe(-1)
  expect(findFirstRepeated([5, 1, 5, 1])).toBe(5)
  expect(findFirstRepeated([1, 2])).toBe(-1)
  expect(findFirstRepeated([1])).toBe(-1)
  expect(findFirstRepeated([])).toBe(-1)
})
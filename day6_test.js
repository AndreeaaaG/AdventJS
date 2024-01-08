import { expect, test } from 'vitest'
import { maxDistance } from './day6.js'

test('Challenge 6: The reindeer on trial', () => {
  expect(maxDistance('>>*<')).toBe(2)
  expect(maxDistance('<<<>')).toBe(2)
  expect(maxDistance('>***>')).toBe(5)
  expect(maxDistance('<<<<<')).toBe(5)
  expect(maxDistance('**********')).toBe(10)
  expect(maxDistance('<<**>>')).toBe(2)
})
import { expect, test } from 'vitest'
import { organizeGifts } from 'Day8/day8.js'

test('Challenge 8: Sorting the warehouse', () => {
  expect(organizeGifts('76a11b')).toBe('[a]{a}{a}(aaaaaa){b}(b)')
  expect(organizeGifts('20a')).toBe('{a}{a}')
  expect(organizeGifts('70b120a4c')).toBe('[b]{b}{b}[a][a]{a}{a}(cccc)')
  expect(organizeGifts('9c')).toBe('(ccccccccc)')
  expect(organizeGifts('19d51e')).toBe('{d}(ddddddddd)[e](e)')
})
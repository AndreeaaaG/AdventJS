import { expect, test } from 'vitest'
import { adjustLights } from 'Day9/day9.js'

const test1 = ['🟢', '🔴', '🟢', '🟢', '🟢']
const test2 = ['🔴', '🔴', '🟢', '🟢', '🔴']
const test3 = ['🟢', '🔴', '🟢', '🔴', '🟢']
const test4 = ['🔴', '🔴', '🔴']
const test5 = ['🟢', '🔴', '🔴', '🟢', '🔴']
const test6 = ['🔴', '🔴', '🟢', '🔴', '🟢']

test('Challenge 9: Switch the lights', () => {
  expect(adjustLights(test1)).toBe(1)
  expect(adjustLights(test2)).toBe(2)
  expect(adjustLights(test3)).toBe(0)
  expect(adjustLights(test4)).toBe(1)
  expect(adjustLights(test5)).toBe(2)
  expect(adjustLights(test6)).toBe(1)
})
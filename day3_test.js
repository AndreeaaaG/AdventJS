import { expect, test } from 'vitest'
import { findNaughtyStep } from 'Day3/day3.js'

test('Challenge 3: The naughty elf', () => {
  expect(findNaughtyStep('abcd', 'abcde')).toBe('e')
  expect(findNaughtyStep('stepfor', 'stepor')).toBe('f')
  expect(findNaughtyStep('igual', 'igual')).toBe('')
  expect(findNaughtyStep('xxxx', 'xxoxx')).toBe('o')
})
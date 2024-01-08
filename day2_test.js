import { expect, test } from 'vitest'
import { manufacture } from 'Day2/day2.js'

test('Challenge 2: We start the factory', () => {
  expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toEqual([
    'tren',
    'oso'
  ])
  expect(manufacture(['juego', 'puzzle'], 'jlepuz')).toEqual(['puzzle'])
  expect(manufacture(['libro', 'ps5'], 'psli')).toEqual([])
})
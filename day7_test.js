import { expect, test } from 'vitest'
import { drawGift } from 'Day7/day7.js'

test('Challenge 7: Boxes in 3D', () => {
  expect(drawGift(4, '+')).toBe(
    '   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n'
  )
  expect(drawGift(5, '*')).toBe(
    '    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n'
  )
  expect(drawGift(1, '^')).toBe('#\n')
  expect(drawGift(2, '&')).toBe(' ##\n###\n##\n')
})
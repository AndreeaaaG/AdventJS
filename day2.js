function manufacture(gifts, materials) {
  
    return gifts.filter((gift) => gift.split('').every((char) => materials.includes(char)) )
  }

console.log(manufacture(['juego', 'puzzle'], 'jlepuz')) // ['puzzle']
console.log(manufacture(['libro', 'ps5'], 'psli')) // []
function maxDistance(movements) {
    let total = 0
    const right = movements.match(/>/g)?.length ?? 0
    const left = movements.match(/</g)?.length ?? 0
    total = right - left
    const extra = movements.length - (right + left)
  
    return Math.abs(total) + extra
  }

console.log(maxDistance('>>*<')) // (2)
console.log(maxDistance('<<<>')) // (2)
console.log(maxDistance('>***>')) // (5)
console.log(maxDistance('<<<<<')) // (5)
console.log(maxDistance('**********')) // (10)
console.log(maxDistance('<<**>>')) // (2)
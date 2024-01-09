function findFirstRepeated(gifts) {
    const repeatedGiftts = new Set()
  
    for(let i = 0; i < gifts.length; i++) {
      const currentVal = gifts[i]
  
      if(repeatedGiftts.has(currentVal)) {
        return currentVal
      }
  
      repeatedGiftts.add(currentVal)
    }  
    return -1
  }

console.log(findFirstRepeated([2, 1, 3, 5, 3, 2])) // 3
console.log(findFirstRepeated([1, 2, 3, 4])) // -1
console.log(findFirstRepeated([5, 1, 5, 1])) // 5
console.log(findFirstRepeated([1, 2])) // -1
console.log(findFirstRepeated([1])) // -1
console.log(findFirstRepeated([])) // -1

export function findFirstRepeated(gifts) {
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
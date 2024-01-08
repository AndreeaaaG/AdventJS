function findNaughtyStep(original, modified) {
    const originalArray = original.split('')
    const modifiedArray = modified.split('')
  
    const minLength = Math.min(originalArray.length, modifiedArray.length)
  
    for(let i = 0; i < minLength; i++){
      if( original[i] !== modifiedArray[i]) {
        return originalArray.length > modifiedArray.length
        ? originalArray[i]
        : modifiedArray[i]
      }
    }
  
    return originalArray.length > modifiedArray.length
    ? originalArray[minLength]
    : modifiedArray[minLength] || ''
  }
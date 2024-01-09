function getIndexsForPalindrome(word) {
    const size = word.length
  
    function isPalindrome(word){
      return word === word.split('').reverse().join('')
    }
  
    if (isPalindrome(word)) {
      return []
    }
  
    for(let i = 0; i < size; i++){
      for(let j = i + 1; j < size; j++){
  
        // const newWord = word.split('')
        // const temp = newWord[i]
        // newWord[i] = newWord[j]
        // newWord[j] = temp
  
        // if(isPalindrome(newWord.join(''))) {
        //   return [i, j]
        // }
  
        const newWord = 
          word.substring(0, i) +
          word[j] +
          word.substring(i + 1, j) +
          word[i] + 
          word.substring(j + 1);
  
        if(isPalindrome(newWord)) {
          return [i, j];
        }
  
      }
    }
  
    return null
  }


console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null
function checkIsValidCopy(original, copy) {

    for(let i = 0; i < original.length; i++){
      const char = original[i].match(/\w/g)
  
      const valid =  `${char ? `${char}${char[0].toLowerCase()}` : ''}#+:. `
  
      if(valid.indexOf(copy[i]) < valid.indexOf(original[i])) {
      return false
      }
    }
    return true
  }

console.log(checkIsValidCopy(
    'Santa Claus is coming',
    'sa#ta Cl#us i+ comin#'
  )) // true

  console.log(checkIsValidCopy(
    's#nta Cla#s is coming',
    'p#nt: cla#s #s c+min#'
  )) // false (due to the initial p)

  console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true

  console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (there is a # where it shouldn't be)
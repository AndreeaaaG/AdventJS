function compile(code) {
    let counter = 0
    let temp = 0
    
    for(let i = 0; i < code.length; i++){
        
      switch( code.charAt(i) ){
      case '+':
          counter += 1
          break
          
      case '*':
          counter *= 2
          break    
      
      case '-':
          counter -= 1
          break
      
      case '%':
          temp = i
          break 
          
      case '<':
          if(code.charAt(temp) === '%'){
              counter += compile(code.substring(temp + 1, i))
          }
          break
          
      case '¿':
          if(counter <= 0){
              const jumpIndex = code.indexOf('?', i + 1)
              i = jumpIndex
          }
          break
          
      case '?':
          break
      }
    }
    return counter
  }
  
  console.log( compile('++*-') )
  // (1 + 1) * 2 - 1 = 3
  
  console.log( compile('++%++<') )
  // 1 + 1 + 1 + 1 + 1 + 1 = 6
  
  console.log( compile('++<--') )
  // 1 + 1 - 1 - 1 = 0
  
  console.log( compile('++¿+?') )
  // 1 + 1 + 1 = 3
  
  console.log( compile('--¿+++?') )
  // - 1 - 1 = -2
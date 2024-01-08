export function drawGift(size, symbol) {

    if (size === 1) return '#\n'
  
    let gift = ''
    const maxLength = size * 2 - 1
    const leftRepSymbol = symbol.repeat(size - 2)
    const repLineSize = '#'.repeat(size)
  
    const upperBorder = ' '.repeat(maxLength - size) + repLineSize
    let upperPlane = ''
  
    const middleBorder = repLineSize + leftRepSymbol + '#'
  
    let lowerPlane = ''
    const lowerBorder = repLineSize
    
    for(let i = 1, j = size - 2; i <= size - 2; i++, j--){
      const repBlanks = ' '.repeat(maxLength - size - i)
      const edge1 = '#'
      const edge2 = '#'
      const upperRightRepSymbol = symbol.repeat(i - 1)
      const lowerRightRepSymbol = symbol.repeat(j - 1)
      const edge3 = '#\n'
      const currentLine = edge1 + leftRepSymbol + edge2
  
      upperPlane += repBlanks + currentLine + upperRightRepSymbol + edge3
  
      lowerPlane += currentLine + lowerRightRepSymbol + edge3
    }
  
    gift += upperBorder + '\n'
    gift += upperPlane 
    gift += middleBorder + '\n'
    gift += lowerPlane 
    gift += lowerBorder + '\n'
  
    return gift
  
  }
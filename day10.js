function createChristmasTree(ornaments, height) {
  
    const ornaments_aux = ornaments.repeat(60)
    let tree = ''
  
     for(let i = 0; i < height; i++){
      const spaces = " ".repeat(height - 1 - i)
  
      const startIndex = (i * (i + 1)) / 2
      const endIndex = ((i + 1) * (i + 2)) / 2
  
      const ornamentRow = ornaments_aux
        .slice(startIndex, endIndex)
        .split('')
        .join(' ');
      
      tree += `${spaces}${ornamentRow}\n`
    }
  
    tree += ' '.repeat(height - 1) + '|\n'
    return tree
  }
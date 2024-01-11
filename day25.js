function travelDistance(map) {
  
    const roadMapArray = map.split('\n')
    const roadMap = roadMapArray.join('')
    
    const cols = roadMapArray[0].length
    
    const santaPos = roadMap.indexOf('S')
      
    let gift = 1
    let distance = 0
    
    let santaCol = santaPos % cols
    let santaRow = (santaPos / cols) | 0
    
    const numbers = roadMap.match(/\d/g)
    
    const colValues = [0, 0]
    const rowValues = [0, 0]
      
    for(const number_aux of numbers){
        
        const giftPos = roadMap.indexOf(`${gift}`)
        
        const giftCol = giftPos % cols
        const giftRow = (giftPos / cols) | 0
        
        const col  = santaCol - giftCol
        const row = santaRow - giftRow
        
        colValues[0] = col
        colValues[1] = - col
        
        rowValues[0] = row
        rowValues[1] = - row 
        
        distance += colValues[+(col < 0)] + rowValues[+(row < 0)]
        
        santaCol = giftCol
        santaRow = giftRow
        
        gift++
      } 
    
    return distance
  }
  
  const map = `.....1....
  ..S.......
  ..........
  ....3.....
  ......2...`
  console.log( travelDistance(map) ) // -> 12 km
  
  /* const map = `
  .....1....
  ..S.......
  ..........
  ....3.....
  ......2... `
  
  From S to kid 1: 4 moves
  From kid 1 to 2: 5 moves
  From kid 2 to 3: 3 moves
  Total: 12 moves
  */
  
  const map2 = `..S.1...`
  console.log( travelDistance(map2) ) // -> 2
  
  
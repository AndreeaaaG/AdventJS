function revealSabotage(store) {
  
    const rowLength = store.length
    const colLength = store[0].length
    
    const possibleNeighbors = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1],  [1, 0],  [1, 1]  ]
      
    for(let row = 0; row < rowLength; row++){
      for(let col = 0; col < colLength; col++){
          
        if(store[row][col] === '*')
          continue
        
        let sabotagedGifts = 0
        
        for(const neighbor of possibleNeighbors){

          if( store[row + neighbor[0]]?.[col + neighbor[1]] === '')
            continue
        
          if( store[row + neighbor[0]]?.[col + neighbor[1]] === '*')
            sabotagedGifts++
        }
        store[row][col] = sabotagedGifts === 0 ? ' ' : sabotagedGifts.toString()
      }
    }
    return store
  }
  
    const store = [
      ['*', ' ', ' ', ' '],
      [' ', ' ', '*', ' '],
      [' ', ' ', ' ', ' '],
      ['*', ' ', ' ', ' ']
    ]
    console.log(revealSabotage(store))
  
    const store2 = [
      [' ', ' ', ' '],
      [' ', '*', ' '],
      [' ', ' ', ' ']
    ]
    console.log(revealSabotage(store2))
    
    const failedTest = [['*', ' ', '*']]
    console.log(revealSabotage(failedTest))
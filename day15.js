function autonomousDrive(store, movements) {
    let robotPosition = []
  
    const storeRows = store.length
    const storeColumns = store[0].length
  
    const newStore = store.map((row) => row.split(''))
  
    store.forEach((row, index) => {
      const robotIndex = row.indexOf('!')
      if (robotIndex !== -1) {
        robotPosition = [index, robotIndex]
      }
    })
  
    movements.forEach((movement) => {
      const [row, column] = robotPosition
  
      switch (movement) {
        case 'R':
          if (column + 1 < storeColumns && newStore[row][column + 1] !== '*') {
            
            newStore[row][column] = '.'
            
            newStore[row][column + 1] = '!'
            
            robotPosition = [row, column + 1]
          }
          break
  
        case 'L':
          if (column - 1 >= 0 && newStore[row][column - 1] !== '*') {
            
            newStore[row][column] = '.'
            
            newStore[row][column - 1] = '!'
            
            robotPosition = [row, column - 1]
          }
          break
  
        case 'U':
          if (row - 1 >= 0 && newStore[row - 1][column] !== '*') {
            
            newStore[row][column] = '.'
            
            newStore[row - 1][column] = '!'
            
            robotPosition = [row - 1, column]
          }
          break
  
        case 'D':
          if (row + 1 < storeRows && newStore[row + 1][column] !== '*') {
            
            newStore[row][column] = '.'
            
            newStore[row + 1][column] = '!'
            
            robotPosition = [row + 1, column]
          }
          break
          
        default:
          break
      }
    })
  
    return newStore.map((row) => row.join(''))
  }
    const store = ['..!....', '...*.*.']
    const movements = ['R', 'R', 'D', 'L']
  
    const result = autonomousDrive(store, movements)
    console.log(result)
  //   [
  //   ".......",
  //   "...*!*."
  //   ]
  
    const store2 = ['*..!..*', '*.....*']
    const movements2 = ['R', 'R', 'D', 'D']
  
    const result2 = autonomousDrive(store2, movements2)
    console.log(result2) 
  // [
  //   "*.....*",
  //   "*....!*"
  // ]
  
function distributeGifts(weights) {

    const averages = []
  
    for(const [i, row] of weights.entries()){
      averages[i] = []
  
      for(const [j, col] of row.entries()){
        const nextCol = row[j + 1]
        const prevCol = row[j - 1]
        
        const nextRow = weights[i + 1]?.[j]
        const prevRow = weights[i - 1]?.[j]
  
        const total = (+col | 0) + (+nextCol | 0) + (+prevCol | 0) + (+nextRow | 0) + (+prevRow | 0)
  
        const divisor = +(col != null) + +(nextCol != null) + +(prevCol != null) + +(nextRow != null) + +(prevRow != null)
  
        const average = Math.round(total / divisor)
  
        averages[i][j] = average
      }
    }
    return averages
  }
  
  const input = [
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4]
  ]
  
  console.log( distributeGifts(input) )
  // [ [ 5, 3, 3 ], [ 6, 5, 3 ], [ 7, 6, 4 ] ]
  /*
  [
    [(4 + 5 + 6) / 3, (5 + 4 + 1) / 3, (1 + 5 + 3) / 3],
    [(6 + 4 + 8) / 3, (5 + 6 + 3) / 3, (3 + 1 + 4) / 3],
    [(8 + 6) / 2, (8 + 4) / 2, (4 + 3) / 2]
  ]
  
  // Final result after rounding with Math.round()
  [
    [5, 3, 3],
    [6, 5, 3],
    [7, 6, 4]
  ]
  */
  
  
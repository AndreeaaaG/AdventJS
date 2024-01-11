function getStaircasePaths(steps, maxJump) {
    
    const sequences = []
    
    function findSequences(currentSeq, remainingSteps) {
        
        if(remainingSteps === 0) {
            sequences.push(currentSeq.slice())
            return
        }
        for(let jump = 1; jump <= maxJump && jump <= remainingSteps; jump++){
            
            currentSeq.push(jump)
  
            findSequences(currentSeq, remainingSteps - jump)
            
            currentSeq.pop()
        }
    }
      
    findSequences([], steps)  
      
    return sequences
  }
  
  console.log( getStaircasePaths(2, 1) ) // [[1, 1]]
  
  console.log( getStaircasePaths(3, 3) ) // [[1, 1, 1], [1, 2], [2, 1], [3]]
  
  console.log( getStaircasePaths(5, 1) ) // [[1, 1, 1, 1, 1]]
  
  console.log( getStaircasePaths(5, 2) )
  /*
  [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 2],
    [1, 1, 2, 1],
    [1, 2, 1, 1],
    [1, 2, 2],
    [2, 1, 1, 1],
    [2, 1, 2],
    [2, 2, 1],
  ]
  */
function findBalancedSegment(message) {
  
    let max_length = 0;
    let segment = []
    
    for(let start = 0; start < message.length; start ++){
        let zeros = 0
        let ones = 0
        
        for(let end = start; end <  message.length; end++){
            if( message[end] === 0) zeros++
            else ones++
            
            if( zeros === ones && end - start + 1 > max_length){
                max_length = end - start + 1
                segment = [start, end]
            }
        }
    }
    return segment
  }
  
  console.log( findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]) )
  //                         |________|
  // position of segment:    [2, 5]
  // longest balanced
  // of 0s and 1s
  
  console.log( findBalancedSegment([1, 1, 0]) )
  //                      |__|
  //                     [1, 2]
  
  console.log( findBalancedSegment([1, 1, 1]) )
  // no balanced segments: []
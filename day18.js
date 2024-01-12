function drawClock(time) {

    const nums = {
      '0': ['***','* *','* *','* *','* *','* *','***'],
      '1': ['  *','  *','  *','  *','  *','  *','  *'],
      '2': ['***','  *','  *','***','*  ','*  ','***'],
      '3': ['***','  *','  *','***','  *','  *','***'],
      '4': ['* *','* *','* *','***','  *','  *','  *'],
      '5': ['***','*  ','*  ','***','  *','  *','***'],
      '6': ['***','*  ','*  ','***','* *','* *','***'],
      '7': ['***','  *','  *','  *','  *','  *','  *'],
      '8': ['***','* *','* *','***','* *','* *','***'],
      '9': ['***','* *','* *','***','  *','  *','***'],
      ':': [' ', ' ', '*', ' ', '*', ' ', ' '],
    }
  
    const hour0 = nums[time[0]]
    const hour1 = nums[time[1]]
    const points = nums[':']
    const min0 = nums[time[3]]
    const min1 = nums[time[4]]
  
    const res = [...hour0]
    let pos = 0
  
    for(let row of res){
      
      const str = `${row} ${hour1[pos]} ${points[pos]} ${min0[pos]} ${min1[pos]}`
  
      res[pos] = [...str]
  
      pos++
    }
  
    return res
  }
  
  console.table(drawClock('01:30'))
  console.table(drawClock('16:48'))
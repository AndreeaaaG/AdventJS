function calculateTime(deliveries) {

    const limit_in_sec = 3600 * 7
    let totalDeliveries = 0
  
    for(const  delivery of deliveries){
      const [hours, minutes, seconds] = delivery.split(':')
      totalDeliveries += +hours * 3600 + +minutes * 60 + +seconds
    }
  
    const remainingSeconds = limit_in_sec - totalDeliveries
  
    const sign = remainingSeconds > 0 ? '-' : ''
    const absRemainingSeconds = Math.abs(remainingSeconds)
  
    const hours = Math.floor(absRemainingSeconds / 3600)
    const minutes = Math.floor((absRemainingSeconds % 3600) / 60)
  
    const remainingSecondsAux = absRemainingSeconds % 60
  
    const remainingtime = `${sign}${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ""}${minutes}:${remainingSecondsAux < 10 ? '0' : ''}${remainingSecondsAux}`
  
  
    return remainingtime
  }

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00'])) // '-02:20:00'
console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00'])) // '00:30:00'
console.log(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']))  // '-05:29:00'
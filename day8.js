function organizeGifts(gifts) {
    const giftsArr = gifts.match(/\d+[a-z]/g)
    let result = ''
  
    giftsArr.forEach((gift) => {
      const giftNum = parseInt(gift)
      const giftType = gift.match(/[a-z]/g)[0]
  
      const pallets = Math.floor(giftNum / 50)
      const boxes = Math.floor((giftNum - pallets * 50) / 10)
      const remaining = Math.floor(giftNum - pallets * 50 - boxes * 10)
  
      const bagContent = giftType.repeat(remaining)
  
      result += `${pallets > 0 ? `[${giftType}]`.repeat(pallets) : ''}${
        boxes > 0 ? `{${giftType}}`.repeat(boxes) : ''
      }${remaining > 0 ? `(${bagContent})` : ''}`
    })
    
    return result
  }

console.log(organizeGifts('76a11b')) // '[a]{a}{a}(aaaaaa){b}(b)'
console.log(organizeGifts('20a')) // '{a}{a}'
console.log(organizeGifts('70b120a4c')) // '[b]{b}{b}[a][a]{a}{a}(cccc)'
console.log(organizeGifts('9c')) // '(ccccccccc)'
console.log(organizeGifts('19d51e')) // '{d}(ddddddddd)[e](e)'
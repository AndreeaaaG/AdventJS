function decode(message) {
    const countOpenAndCloseParenthesis = message.match(/\(|\)/g)
    let parenthesisCounter =
      countOpenAndCloseParenthesis !== null
        ? countOpenAndCloseParenthesis.length
        : 0
  
    if (parenthesisCounter === 0) {
      return message
    }
  
    function decodeOnce(message) {
      const regex = /\(([^()]+)\)/
      const matching = message.match(regex)
      const notMatching1 = message.slice(0, matching.index)
      const notMatching2 = message.slice(
        matching.index + matching[0].length,
        message.length
      )
  
      return (
        notMatching1 + matching[1].split('').reverse().join('') + notMatching2
      )
    }
  
    while (parenthesisCounter > 0) {
      message = decodeOnce(message)
      parenthesisCounter -= 2
    }
  
    return message
  }

  const msg1 = 'hola (odnum)'
  const msg2 = '(olleh) (dlrow)!'
  const msg3 = 'sa(u(cla)atn)s'
  const msg4 = 'sin paréntesis'

  console.log(decode(msg1)) // 'hola mundo'
  console.log(decode(msg2)) // 'hello world!'
  console.log(decode(msg3)) // 'santaclaus'
  console.log(decode(msg4)) // 'sin paréntesis'
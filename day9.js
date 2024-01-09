function adjustLights(lights) {
    let option1 = 0
    const lightsCopy1 = [...lights]
    const lightsCopy2 = [...lights]
    let option2 = 0
  
    for (let i = 0; i < lights.length - 1; i++) {
      if (lightsCopy1[i] === lightsCopy1[i + 1]) {
        option1++
        lightsCopy1[i + 1] = lightsCopy1[i] === '🔴' ? '🟢' : '🔴'
      }
    }
  
    for (let i = lights.length - 1; i > 0; i--) {
      if (lightsCopy2[i] === lightsCopy2[i - 1]) {
        option2++
        lightsCopy2[i - 1] = lightsCopy2[i] === '🔴' ? '🟢' : '🔴'
      }
    }
  
    return Math.min(option1, option2)
  }

const test1 = ['🟢', '🔴', '🟢', '🟢', '🟢']
const test2 = ['🔴', '🔴', '🟢', '🟢', '🔴']
const test3 = ['🟢', '🔴', '🟢', '🔴', '🟢']
const test4 = ['🔴', '🔴', '🔴']
const test5 = ['🟢', '🔴', '🔴', '🟢', '🔴']
const test6 = ['🔴', '🔴', '🟢', '🔴', '🟢']


console.log(adjustLights(test1)) // 1
console.log(adjustLights(test2)) // 2
console.log(adjustLights(test3)) // 0
console.log(adjustLights(test4)) // 1
console.log(adjustLights(test5)) // 2
console.log(adjustLights(test6)) // 1
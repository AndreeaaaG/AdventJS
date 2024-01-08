export function adjustLights(lights) {
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
function adjustLights(lights) {
  const lightsCopy = [...lights];
  let option1 = 0;
  let option2 = 0;
  
  for (let i = 0; i < lights.length - 1; i++) {

      if (lightsCopy[i] === lightsCopy[i + 1]) {
          option1++;
          lightsCopy[i + 1] = lightsCopy[i]  === '🔴' ? '🟢' : '🔴';
      }
      // Check the opposite side as well in the same loop
      if (lights[lights.length - 1 - i] === lights[lights.length - 2 - i]) {
          option2++;
          lights[lights.length - 2 - i] = lights[lights.length - 1 - i] === '🔴' ? '🟢' : '🔴';
      }
  }
  
  return Math.min(option1, option2);
}

const lights = ['🔴', '🔴', '🔴', '🟢', '🟢', '🔴', '🔴'];
const test1 = ['🟢', '🔴', '🟢', '🟢', '🟢']
const test2 = ['🔴', '🔴', '🟢', '🟢', '🔴']
const test3 = ['🟢', '🔴', '🟢', '🔴', '🟢']
const test4 = ['🔴', '🔴', '🔴']
const test5 = ['🟢', '🔴', '🔴', '🟢', '🔴']
const test6 = ['🔴', '🔴', '🟢', '🔴', '🟢']

console.log(adjustLights(lights))  //  3
console.log(adjustLights(test1)) // 1
console.log(adjustLights(test2)) // 2
console.log(adjustLights(test3)) // 0
console.log(adjustLights(test4)) // 1
console.log(adjustLights(test5)) // 2
console.log(adjustLights(test6)) // 1
function organizeChristmasDinner(dishes) {
  
  const ingredientsMap = new Map()

  for (const dish of dishes) {

    const dishName = dish[0]
    const dishIngredients = dish.slice(1)

    for (const ingredient of dishIngredients) {
      
      if (!ingredientsMap.has(ingredient)) {
        ingredientsMap.set(ingredient, []);
      }

      ingredientsMap.get(ingredient).push(dishName);
    }
  }

  const result = []

  for (const [ingredient, dishNames] of ingredientsMap.entries()) {
    
    if (dishNames.length > 1) {
      const sortedDishNames = dishNames.sort();

      result.push([ingredient, ...sortedDishNames]);
    }
  }

  result.sort();
  return result;
}

const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
]
console.log( organizeChristmasDinner(dishes) )

const dishes2 = [
  ["chicken alfredo", "chicken", "pasta", "parmesan"],
  ["parmesan chicken", "chicken", "parmesan", "bread crumbs"],
  ["pasta salad", "pasta", "olive oil", "tomato"],
  ["tomato soup", "tomato", "basil", "cream"]
]
console.log( organizeChristmasDinner(dishes2) )
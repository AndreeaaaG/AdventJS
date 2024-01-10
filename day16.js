function transformTree(tree) {
  
    function buildTree(index) {
      if (index >= tree.length || tree[index] === null) {
        return null
      }
      
      const node = {
        value: tree[index],
        
        left: buildTree(2 * index + 1),
        
        right: buildTree(2 * index + 2)
      }
      return node
    }
  
    const result = buildTree(0)
    return result
  }
  
  console.log(transformTree([3, 1, 0, 8, 12, null, 1]) )
  
  // {
  //   value: 3,
  //   left: {
  //     value: 1,
  //     left: {
  //       value: 8,
  //       left: null,
  //       right: null
  //     },
  //     right: {
  //       value: 12,
  //       left: null,
  //       right: null
  //     }
  //   },
  //   right: {
  //     value: 0,
  //     left: null,
  //     right: {
  //       value: 1,
  //       left: null,
  //       right: null
  //     }
  //   }
  // }
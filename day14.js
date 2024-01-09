function maxGifts(houses) {
   const houseQty = houses.length
   
   if (houseQty === 0) return 0
   if (houseQty === 1) return houses[0]
 
   const maxi_gifts = Array(houseQty).fill(0)
   
   maxi_gifts[0] = houses[0]
   maxi_gifts[1] = Math.max(houses[0], houses[1])
 
   for (let i = 2; i < houseQty; i++) {
   //   console.log(houses[i], maxi_gifts[i-2], maxi_gifts[i-1])
      
     maxi_gifts[i] = Math.max(maxi_gifts[i - 1], maxi_gifts[i - 2] + houses[i])
      
   //   console.log(maxi_gifts[i])
   }
 
   return maxi_gifts[houseQty - 1]
 }
 
 console.log( maxGifts([2, 4, 2]) ) // 4 (4)
 console.log( maxGifts([5, 1, 1, 5]) ) // 10 (5 + 5)
 console.log( maxGifts([4, 1, 1, 4, 2, 1]) ) // 9 (4 + 4 + 1)
 console.log( maxGifts([1, 3, 1, 3, 100]) )// 103 (3 + 100)
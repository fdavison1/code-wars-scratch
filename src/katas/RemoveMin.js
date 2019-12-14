// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]

function removeSmallest(numbers) {
    const arr = Array.from(numbers)
    if (!arr){return []}
    let index = arr.findIndex(element => element === Math.min.apply(Math, numbers))
    arr.splice(index, 1)
    return arr
  }
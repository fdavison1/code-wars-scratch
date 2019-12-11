//LIST FILTERING

// let arr = [1, 2, 'a']

// function filter_list(arr){
//     const newList = []
//     arr.map( item => {
//         if (typeof item === 'number'){
//             newList.push(item)
//         }
//     })
//     return newList
// }

// filter_list(arr)

//SORT BY LAST CHAR
let str = 'what time are we climbing up the volcano'

function last(x){
    let arr = []
    let arr2 = []
    let test = x.split(' ')
    for (let i = 0; i < test.length; i++){
        let lastLetter = test[i][test[i].length-1]

        let index = lastLetter.charCodeAt(0)

        arr.push(lastLetter + i + test[i])
    }
    arr.sort()
    for (let i =0; i <arr.length; i++){
        let letters = arr[i].split('')
        letters.shift()
        letters.shift()
        let word = letters.join('')
        arr2.push(word)
    }
    return arr2
}

console.log(last(str))

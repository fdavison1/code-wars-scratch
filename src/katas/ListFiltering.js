let arr = [1, 2, 'a']

function filter_list(arr){
    const newList = []
    arr.map( item => {
        if (typeof item === 'number'){
            newList.push(item)
        }
    })
    return newList
}

filter_list(arr)



let test = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'

function printerError(input) {
    // your code
    let correct = 0
    let error = 0
    input.split('')
    for (let i = 0; i < input.length; i++){
        // console.log(input[i])
        // console.log(input.charCodeAt(i))
        if (input.charCodeAt(i) <= 109 ){
            correct++
        } else {
            error++
        }
    }
    // console.log(correct)
    // console.log(error)
    // console.log(`${error}/${correct}`)
    return `${error}/${correct+error}`
}

printerError(test)
// "3/56"
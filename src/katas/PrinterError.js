let test = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'

function printerError(input) {
    // your code
    let correct = 0
    let error = 0
    input.split('')
    for (let i = 0; i < input.length; i++){
        if (input.charCodeAt(i) <= 109 ){
            correct++
        } else {
            error++
        }
    }
    return `${error}/${correct+error}`
}

printerError(test)
// "3/56"
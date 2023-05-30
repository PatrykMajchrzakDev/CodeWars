// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    let newString = ''
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(item of string){
        if(letters.includes(item)){
            newString += ' '
        }
        newString += item
    }
    return newString
}

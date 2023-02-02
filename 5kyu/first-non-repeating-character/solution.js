function firstNonRepeatingLetter(s) {
    let nrl = s.split('')

    // Will only return true if it didn't return false
    // Will always return false if there is found to be duplicate of it
    // Will filter non unique items
    nrl = nrl.filter((l, j) => {
       for (let i = 0; i < nrl.length; i++) {
        if (i === j) { continue }
        if (l.toLowerCase() === nrl[i].toLowerCase()) { return false }
       }
       return true
    })
    if (nrl.length === 0) { return ''}
    return nrl[0]
}

const x = 'moonmeen'

console.log(firstNonRepeatingLetter(x))
function isValidWalk(walk) {
    let myOrigin = [0,0]

    if (walk.length !== 10) {
        return false
    }

    walk.forEach(step => {
        if (step === 'n') {
            myOrigin[1] += 1
        } else if (step === 's') {
            myOrigin[1] -= 1
        } else if (step === 'e') {
            myOrigin[0] += 1
        } else if (step === 'w') {
            myOrigin[0] -= 1
        }
    });

    return myOrigin.toString() === [0,0].toString()
}

const arg = ['w','e','w','e','w','e','w','e','w','e','w','e']
const x = isValidWalk(arg)
console.log(x)
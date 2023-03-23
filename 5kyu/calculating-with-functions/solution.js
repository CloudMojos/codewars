function zero(arg) {
    if (arg === undefined) {
        return 0
    }
    else {
        const a = arg
        return Math.floor(eval(`0 ${arg}`))
    }
}
function one(arg) {
    if (arg === undefined) {
        return 1
    }
    else {
        const a = arg
        return Math.floor(eval(`1 ${arg}`))
    }
}
function two(arg) {
    if (arg === undefined) {
        return 2
    }
    else {
        const a = arg
        return Math.floor(eval(`2 ${arg}`))
    }
}
function three(arg) {
    if (arg === undefined) {
        return 3
    }
    else {
        const a = arg
        return Math.floor(eval(`3 ${arg}`))
    }
}
function four(arg) {
    if (arg === undefined) {
        return 4
    }
    else {
        const a = arg
        return Math.floor(eval(`4 ${arg}`))
    }
}
function five(arg) {
    if (arg === undefined) {
        return 5
    }
    else {
        const a = arg
        return Math.floor(eval(`5 ${arg}`))
    }
}
function six(arg) {
    if (arg === undefined) {
        return 6
    }
    else {
        const a = arg
        return Math.floor(eval(`6 ${arg}`))
    }
}
function seven(arg) {
    if (arg === undefined) {
        return 7
    }
    else {
        const a = arg
        return Math.floor(eval(`7 ${arg}`))
    }
}
function eight(arg) {
    if (arg === undefined) {
        return 8
    }
    else {
        const a = arg
        return Math.floor(eval(`8 ${arg}`))
    }
}
function nine(arg) {
    if (arg === undefined) {
        return 9
    }
    else {
        const a = arg
        return Math.floor(eval(`9 ${arg}`))
    }
}

function plus(arg) {
    return `+ ${arg}`
}
function minus(arg) {
    return `- ${arg}`
}
function times() {
    return `* ${arg}`
}
function dividedBy() {
    return `/ ${arg}`
}

const x = zero(plus(one()))
console.log(x)
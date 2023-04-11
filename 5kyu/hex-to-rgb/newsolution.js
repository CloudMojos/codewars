function hexStringToRGB(hexString) {
    const hexArray = hexStringToArray(hexString)
    let rgb = []
    hexArray.forEach(hex => {
        rgb.push(hexToDec(hex))
    })
    let rgbMap = new Map()
    rgbMap.set('r', rgb[0])
    rgbMap.set('g', rgb[1])
    rgbMap.set('b', rgb[2])
    
    return rgbMap
}

function hexToDec(hex) {
    let tens = checkHex(hex[0])
    let ones = checkHex(hex[1])
    tens *= 16
    return tens + ones
}

function checkHex(hex) {
    if (hex.toUpperCase() === 'F') { return 15 }
    else if (hex.toUpperCase() === 'E') { return 14 }
    else if (hex.toUpperCase() === 'D') { return 13 }
    else if (hex.toUpperCase() === 'C') { return 12 }
    else if (hex.toUpperCase() === 'B') { return 11 }
    else if (hex.toUpperCase() === 'A') { return 10 }
    else { return Number(hex) }
}
 
function hexStringToArray(hexString) {
    hexString = hexString.split('')
    return [hexString.slice(1, 3), hexString.slice(3, 5), hexString.slice(-2)]
}

console.log(hexStringToRGB('#FF9933'))
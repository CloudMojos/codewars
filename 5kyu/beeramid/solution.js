function beeramid(bonus, price) {
    // Compute for the number of cans that can be bought
    let cans = bonus / price
    // loop while the number of available beer cans is greater than the beer cans required in the level.
    let level = 1
    let required = level * level
    let completed = 0
    while (cans >= required) {
        completed += 1
        cans -= required
        level += 1
        required = level * level
    }
    return completed
}

const bonus = 455
const price = 5
const x = beeramid(bonus, price)
console.log(x)
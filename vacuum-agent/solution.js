function solution(vacuum, dirts) {
    let path = ''
    // Check for dirt validity
    dirts = dirts.filter(dirt => {
        if (dirt[0] < 5 && dirt[1] < 5 && dirt[0] >= 0 && dirt[1] >= 0) {
            return dirt
        }
    })

    while (dirts.length > 0) {
        // We first traverse the x direction before the y
        // Check for the distance, then clean that dirt first
        nearest = 0
        for (let j = 0; j < dirts.length; j++) {
            // abs(vacuumx - x) + abs(vacuumy - y)
            distance = -(vacuum[0] - dirts[j][0]) + -(vacuum[1] - dirts[j][1])
            // if this distance < dirt[nearest].distance
            nearestDistance = -(vacuum[0] - dirts[nearest][0]) + -(vacuum[1] - dirts[nearest][1])
            if (distance < nearestDistance) {
                // change current nearest
                nearest = j
            }
        }
        while (vacuum[0] != dirts[nearest][0]) {
            if (vacuum[0] < dirts[nearest][0]) {
                vacuum[0] += 1
                path += 'R'
            }
            else if (vacuum[0] > dirts[nearest][0]) {
                vacuum[0] -= 1
                path += 'L'
            }
        }
        while (vacuum[1] != dirts[nearest][1]) {
            if (vacuum[1] < dirts[nearest][1]) {
                vacuum[1] += 1
                path += 'D'
            }
            else if (vacuum[1] > dirts[nearest][1]) {
                vacuum[1] -= 1
                path += 'U'
            }
        }
        if ( vacuum.join() == dirts[nearest].join()) {
            path += 'C'
        }
        console.log(vacuum.join())
        dirts.splice(nearest, 1)
    }
    return path
}

const dirts = [[4,4], [0, 1], [2, 2], [5, 5], [-1, -1]]
// let dirts = []
// let dirt = ''
// while (dirt != 'okay') {
//     dirt = prompt("Enter a number: ie 1,1, type okay to stop")
//     if (dirt === 'okay')
//     {
//         break
//     }
//     dirt = dirt.split(',')
//     dirt = dirt.map(d => Number(d))
//     console.log(dirt)
//     dirts.push(dirt)
//     console.table(dirts)
// }
const vacuum = [0, 0]
const x = solution(vacuum, dirts)
console.log(x)

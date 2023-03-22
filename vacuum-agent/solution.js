function solution(vacuum, dirts) {
    let path = ''
    for (let i = 0; i < dirts.length; i++) {
        // We first traverse the x direction before the y
        while (vacuum[0] != dirts[i][0]) {
            if (vacuum[0] < dirts[i][0]) {
                vacuum[0] += 1
                path += 'R'
            }
            else if (vacuum[0] > dirts[i][0]) {
                vacuum[0] -= 1
                path += 'L'
            }
        }
        while (vacuum[1] != dirts[i][1]) {
            if (vacuum[1] < dirts[i][1]) {
                vacuum[1] += 1
                path += 'D'
            }
            else if (vacuum[1] > dirts[i][1]) {
                vacuum[1] -= 1
                path += 'U'
            }
        }
        if (vacuum.join() == dirts[i].join()) {
            path += 'C'
        }
        console.log(vacuum.join())
    }
    return path
}

const dirts = [[1,1], [2, 0], [2, 2]]
const vacuum = [0, 0]
const x = solution(vacuum, dirts)
console.log(x)
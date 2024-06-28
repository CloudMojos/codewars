
// ---*---
// --***--
// -*****-
// *******

// j[3] yung kanyang unang star
// j[2] to j[4]
// j[1] to j[5]
// j[0] to j[6]

const height = 4;
for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j < height * 2; j++) {
        if (j > height - i && j < height + i) {
            row += '*'
        } else {
            row += ' '
        }
    }
    console.log(row);
}

// height = 4
// height - 

// j == 3

// j < height - i && j > height + i

// ___*___ j = 0 i = 0  
// __***
// ********
// ********
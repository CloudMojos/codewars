function noSpace(x) {
    let newString = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] == ' ') { continue; }
        newString += x[i];
    }
    return newString;
}

const x = noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');
console.log(x);
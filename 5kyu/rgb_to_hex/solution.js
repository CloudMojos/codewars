function rgb(r, g, b){
    // Store the parameters to array
    let rgb = [r, g, b];
    let hex = '';
    // Check validity
    rgb = rgb.map (v => {
        if (v > 255) { return 255; }
        else if (v < 0) {return 0; }
        
        return v;
    })
    // Change the representation from 0 - 255 to 00 - FF
    rgb.forEach(v => {
        hex += toHex(v);
    })
    return hex;
}

toHex = (c) => {
    // Store all the remainders in r
    let r = []
    let h = ''
    let x = c
    if (c == 0) {
        return '00';
    }
    while (x > 0) {
        r.push(x % 16);
        x = Math.floor(x / 16);
        if (x <= 0 && r.length == 1) {
            r.push(0);
        }
    }
    r.reverse().forEach(v => {
        if (v === 15) {
            h += 'F';
        } else if (v === 14) {
            h += 'E';
        } else if (v === 13) {
            h += 'D'; 
        } else if (v === 12) {
            h += 'C';
        } else if (v === 11) {
            h += 'B';
        } else if (v === 10) {
            h += 'A';
        } else {{
            h += v.toString();
        }}
    })
    return h;
}

x = rgb(5,137,64);
console.log(x);

function longestConsec(strarr, k) {
    // Refactor this
    let max = '';
    let str = '';
    if (k <= 0 || k > strarr.length) { return ''; }
    for (let i = 0, n = strarr.length; i < n; i++) {
        str = strarr[i];
        for (let j = 0; j < k; j++) {
            if (!strarr[i + j]) { continue; }
            if (strarr[i] == strarr[i + j]) { continue; }
            str += strarr[i + j];
        }
        if (str.length > max.length) {
            max = str;
        }
    }
    return max;
}

const c = longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2);
console.log(c);
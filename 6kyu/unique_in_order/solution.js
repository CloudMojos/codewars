let uniqueInOrder = function(iterable) {
    iterable = [...iterable];
    let unique = []; 
    for (let i = 0, n = iterable.length; i < n; i++) {
        if (unique[unique.length - 1] == iterable[i]) { continue; }
        unique.push(iterable[i]);
    }
    return unique;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));

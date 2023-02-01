function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(c => vowels.every(v => v !== c.toLowerCase())).join('');
}

const x = disemvowel('I love Yani');
console.log(x);
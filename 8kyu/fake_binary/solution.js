function fakeBin(x){
    return x.split('').map(i => i < 5 ? '0' : '1').join('');
}

x = fakeBin('45385593107843568');
console.log(x);
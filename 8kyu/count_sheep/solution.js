var countSheep = function (num){
    s = '';
    for (let i = 1; i <= num; i++)
    {
        s += `${i} sheep...`
    }
    return s;
}

x = countSheep(3);

console.log(x);

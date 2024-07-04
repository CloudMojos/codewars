function distributionOf(golds){
    let beggarA = [];
    let beggarB = [];
    
    let beggars = [[], []];
    
    let index = 0;
    while(golds.length > 0) {
      if (golds[0] >= golds[golds.length - 1]) {
        beggars[index].push(golds.shift())
      } else if (golds[0] < golds[golds.length - 1]) {
        beggars[index].push(golds.pop())
      }
      index == 0 ? index = 1 : index = 0;
    }
    
    beggarA = summarize(beggars[0]);
    beggarB = summarize(beggars[1]);
    
    return [beggarA, beggarB];
  }

function summarize(arr) {
    return arr.reduce((a, c) => {
        return a + c;
    }, 0)
}

console.log(distributionOf([4, 7, 2, 9, 5, 2]))
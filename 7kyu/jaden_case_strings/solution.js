String.prototype.toJadenCase = function () {
    return this.split(" ").map(w => w[0] = w[0].toUpperCase());
  };


quote = "How can mirrors be real if our eyes aren't real"
console.log(quote.toJadenCase());
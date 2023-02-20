function permutations(string) {
	const strArr = string.split('')
	
	for (let i = 0; i < strArr.length; i++) {
		console.log(strArr[i])
	}
}

// console.log(permutations('abc'))
permutations('abc')
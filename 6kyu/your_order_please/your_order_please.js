function solution(arg) {
    const words = arg.split(' ')
    let nums = []
    words.forEach((word, index) => {
        word.split('').every(char => {
            if (isCharNumeric(char)) {
                nums[index] = {}
                nums[index]["word"] = word;
                nums[index]["index"] = Number(char);
                return false;
            }
            return true;
        })
    })

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1; j++) {
            if (nums[j]["index"] > nums[j + 1]["index"]) {
                let temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
        }
    }
    return nums.map(num => {
        return num["word"]
    }).join(' ');
}

function isCharNumeric(c) {
    return c.charCodeAt() >= 49 && c.charCodeAt() <= 57;
}

const arg = "4of Fo1r pe6ople g3ood th5e the2"
const x = solution(arg)
console.log(x)
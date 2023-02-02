function validBraces(braces) {
    const validOpening = ['[', '{', '(']
    const validClosing = [']', '}', ')']

    if (braces === '') { return }

    if (!braces.split('').every(b => validOpening.includes(b) || validClosing.includes(b))) { return }

    let open = []
    let close = []

    braces.split('').forEach(b => {
        if (validOpening.includes(b)) {
            open.push(b)
        } else if (validClosing.includes(b)) {
            close.push(b)
            if (b == ']' && open.at(-1) == '[' 
            || b == '}' && open.at(-1) == '{'
            || b == ')' && open.at(-1) == '(') {
                open.pop();
                close.pop();
            } 
        }
    })
    if (open.length === 0 && close.length === 0) { return true }
    else { return false }
}

const x = '[({})](]';
// validBraces(x);
console.log(validBraces(x));
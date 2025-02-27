# Problem Description
Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Each open bracket must have a closing close bracket, and vice versa.


# My Journal

valid braces

valid opening '( { ['

valid closing ') } ]'

iterate over s
c is the character in s
if c is in valid opening:

'(){}[]' - valid

'({[]})' - valid

'(}()[]' - invalid

validOpening '('

validClosing ')'

validOpening ''

validClosing ''

valid Opening '()

validOpening.push(c)

validClosing.push(c)

we pop validOpening and Closing

if the lengh of validopening and closing === 0 

we return true

we false

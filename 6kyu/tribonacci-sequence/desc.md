# Problem Description
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

# My Journal

What I can remember on fibonacci sequence is that there are two base cases, x[0] and x[1]. I'm determined to use similar approach on this one, using three base cases: x[0], x[1], and x[2].

Let's try to recall the code for solving fibonacci sequence.
Given an index `n`, find its corresponding number in fibonacci sequence.

[0, 1, 1, 2, 3, 5, 8]

`n` = 5, find its number

number = fib(5 - 1) (3) + fib(5 - 2) (2)
----
n = 4
signature = [1, 1, 1]
if n === 1, return or push s[0]
if n === 2, return or push s[1]
if n === 3, return or push s[2]

else
    return or push fib(4 - 1) (1) + fib(4 - 2) (1) + fib(4 - 3) (1)
    


# Problem Description
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

# My Journal

1. There needs to be some kind of association: The number, and how many times it occured.
2. After finding the association, we must find the number that occured odd number of times.

Point 2 seems straightforward. I need to loop through the array of values, if it's mod is equal to zero then it's not it. Then I return the number it is associated with. Point 1 for me is difficult. I don't want to use objects just so I can create this. 
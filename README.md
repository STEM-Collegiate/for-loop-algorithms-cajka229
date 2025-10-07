# Common For Loop Algorithms
 These are 10 of the most common for loop algorithms that you will find in the wild.

 ## Summation
 A summation algorithm adds together all the numbers in an array to find their total. It uses a running variable that starts at zero and increases each time a new element is added. This is often the first step before finding an average or total score.

 ## Mean
The mean (or average) takes the total sum of all values and divides it by the number of elements in the array. It helps show the “typical” or central value of a data set. In code, this usually involves calling the summation algorithm first and then dividing by `arr.length`.

 ## Transformation
A transformation algorithm changes each element in an array according to a rule and produces a new array with the results. For example, you might double, square, or take the absolute value of each number.

 ## Minimum
This algorithm scans through all elements to find the smallest value in the array. It starts with an assumption that the first number is the smallest, then compares every other number to see if any are lower.

 ## Maximum
Similar to the minimum algorithm, the maximum algorithm searches for the largest number in the array. It keeps track of the highest value found so far and updates it when a bigger one appears.

 ## Count Instances
A counting algorithm keeps track of how many elements meet a certain condition, such as being positive or even. It starts at zero and increases the counter each time the condition is true.
 ## Filter Instances
A filtering algorithm creates a new array containing only the elements that meet a condition. For example, you might filter out only the even numbers, or only negative ones.
 ## Existential Quantifier
An existential quantifier algorithm checks whether at least one element in the array meets a condition. It can stop early as soon as it finds a match, returning `true` immediately.
 ## Universal Quantifier
A universal quantifier algorithm checks whether every element in the array meets a condition. If even one element fails the test, the result is `false`.
 ## Sanity Checks
Sanity checks ensure that the array’s data is safe to use before running more complex operations. They confirm that all elements are defined, not `null`, and are of the correct type. These checks prevent bugs and help your code handle unexpected input gracefully.
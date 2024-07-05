Write
Array.prototype.remove = function(pred) {}

public static class Kata
{
  public static List<object> Remove(this List<object> array, Func<object, bool> pred)
  {    
  }
}

that given an array, removes all the elements that satisfy the predicate from the original array and then return all the elements that just got removed. 
For example:
var array = [1,2,3,4,5];
// We wish to remove all the even elements from array and then return those removed elements
var removed = array.remove(function(a) { return a%2===0;});
// array === [1,3,5]  removed === [2,4]

var array = new List<object> { 1,2,3,4,5 };
// We wish to remove all the even elements from array and then return those removed elements
var removed = array.RemoveByPred(a => a % 2 == 0);
// array --> { 1,3,5 }  removed --> { 2,4 }


https://www.codewars.com/kata/56035d75426e197c3e0000a2/train/javascript
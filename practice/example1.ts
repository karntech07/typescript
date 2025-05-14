// Question on generic
// Write a generic function in TypeScript called reverseArray that takes an array of any  type and returns a new array with the elements in reverse order.

function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

console.log(reverseArray([1,2,3,4]));
console.log(reverseArray(['1','2','3','4']));
console.log(reverseArray([true, true, false, false, true]));
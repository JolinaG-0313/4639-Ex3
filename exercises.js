let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce ((flat, current) => {
    return flat.concat(current);
}, []));

// Your code here.
// → [1, 2, 3, 4, 5, 6]


// Your code here.

function loop (value, test, update, execute ) {
    if (!test(value)) return;
    execute(value);
    return loop(update(value), test, update, execute);
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1


function everyLoop(array, test) 
{
  // Your code here.
  for (let element of array) {
    if  (!test(element)) {
        return false;
    }
  }
  return true;
}

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true

function everySome(array, test) 
{
// Your code here.
return array.some(test);

} 

console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true

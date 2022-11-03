// function map(array, fn) {
//   return array;
// }

function map(array, fn) {
  const result = [];
  for (const item of array) {
    const newEl = fn(item);
    result.push(newEl)
  }
  
  return result;
}
// function map(array, fn) {
//   return array;
// }

function map(array, fn) {
  const el = array[0];
  const newEl = fn(el);
  return [newEl];
}
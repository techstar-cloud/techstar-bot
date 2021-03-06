/**
 * Calculate Hamming distance between two sets
 * @param a, b - arrays
 * @return number of elements in a-b plus number of elements in b-a
 */
export function hammingDistance(a, b) {
  var d = 0;
  for (var i = 0; i < a.length; ++i) {
    if (b.indexOf(a[i]) < 0) d++;
  }
  for (var i = 0; i < b.length; ++i) {
    if (a.indexOf(b[i]) < 0) d++;
  }
  return d;
}

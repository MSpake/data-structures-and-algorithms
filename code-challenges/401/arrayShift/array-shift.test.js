function arrayShift(arr, newVal) {
  if((typeof arr) !== 'object') return null; 
  if(arr.length === 0) return [newVal];

  for(let i = arr.length; i > Math.floor(arr.length/2); i--) {
    arr[i] = arr[i-1];
  }

  arr[Math.floor(arr.length/2)] = newVal;
  return arr;
}

describe('Inserts a new entry into the venter index of an array', () => {
  it('takes in an array and a value, returns the array with the new value inserted into the center index', () => {
    expect(arrayShift([1, 2, 3, 4], 12)).toEqual([1, 2, 12, 3, 4]);
  });
  it('If an array has one value, it gets instered second', () => {
    expect(arrayShift([1], 12)).toEqual([1, 12]);
  });
  it('works with an epmty array', () => {
    expect(arrayShift([], 12)).toEqual([12]);
  });
  it('Only acccepts arrays', () => {
    expect(arrayShift('hello', 12)).toBeNull();
  });
});